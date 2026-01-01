# Full TTS App Development Plan - Firebase Auth + Email Verification

## 🎯 Project Overview

**Goal**: Build a complete paid Text-to-Speech web application with:
- Firebase Authentication (native email/password)
- **Email verification required** before TTS usage
- Usage tracking and subscription management
- Stripe payment integration
- Google Cloud TTS API integration

**YouTube Tutorial Integration**: This project will be recorded/screenshotted for tutorial videos demonstrating the complete setup and development process.

---

## 🔐 Authentication System

### Technology: Firebase Authentication (Native)

**Authentication Method**: Email/Password only
- ✅ Native Firebase Authentication
- ✅ Email verification required
- ✅ Password reset functionality
- ❌ No Google OAuth
- ❌ No NextAuth.js

### Email Verification Workflow

#### User Signup Flow:
1. User enters email and password on signup page
2. Firebase creates account (but email not verified yet)
3. Firebase automatically sends verification email
4. User sees: "Please check your email to verify your account"
5. **TTS functionality is BLOCKED** until email verified
6. User clicks verification link in email
7. Email verified → `emailVerified = true`
8. User can now use TTS service

#### Verification Check:
```typescript
// Before allowing TTS usage
if (!user.emailVerified) {
  // Show "Please verify your email" message
  // Block TTS functionality
  // Show "Resend verification email" button
}
```

#### User States:
- **Not logged in**: Show login/signup buttons
- **Logged in, email not verified**: Block TTS, show verification message
- **Logged in, email verified**: Full access to TTS (within usage limits)

### Firebase Auth Features:
- `createUserWithEmailAndPassword()` - Signup
- `signInWithEmailAndPassword()` - Login
- `sendEmailVerification()` - Send verification email
- `sendPasswordResetEmail()` - Password reset
- `emailVerified` - Check verification status
- `onAuthStateChanged()` - Auth state listener

---

## 💾 Database: Firestore

### Why Firestore?
- Integrated with Firebase Auth
- NoSQL document database
- Real-time updates
- Free tier: 1GB storage, 50K reads/day
- Easy to scale

### Firestore Collections Structure:

#### `users` Collection
```typescript
{
  uid: string,                    // Firebase Auth UID (document ID)
  email: string,
  emailVerified: boolean,          // From Firebase Auth
  displayName?: string,
  subscriptionTier: 'free' | 'basic' | 'pro',
  wordsUsed: number,
  wordsLimit: number,
  usageResetDate: Timestamp,      // When to reset usage counter
  stripeCustomerId?: string,
  stripeSubscriptionId?: string,
  subscriptionStatus?: 'active' | 'canceled' | 'past_due',
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

#### `usage_history` Collection (Optional - for analytics)
```typescript
{
  id: string,                      // Auto-generated
  userId: string,                  // Reference to users.uid
  wordsCount: number,
  timestamp: Timestamp,
  voiceUsed?: string,
  textLength: number
}
```

### Firestore Security Rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Usage history - users can only read their own
    match /usage_history/{docId} {
      allow read: if request.auth != null && 
                     resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
    }
  }
}
```

---

## 💰 Pricing Tiers

### Free Tier (Email Verification Required):
- **1,000 words per month**
- All voice options available
- MP3 download
- Basic support
- Email verification required

### Basic Tier - $4.99/month:
- **10,000 words per month**
- All voice options
- MP3 download
- Priority processing
- Email support

### Pro Tier - $9.99/month:
- **Unlimited words**
- All voice options
- MP3 download
- Priority processing
- Priority support
- Usage history/analytics
- API access (future feature)

### Annual Plans (20% discount):
- Basic Annual: $47.90/year (save $12)
- Pro Annual: $95.90/year (save $24)

---

## 🔄 Usage Tracking

### Word Counting Logic:
- Count words in input text before TTS generation
- Update `wordsUsed` in Firestore
- Check against `wordsLimit` before processing
- Reset monthly based on `usageResetDate`

### Usage Reset:
- **Option 1**: Calendar month (1st of each month)
- **Option 2**: Rolling 30 days from signup date
- **Recommended**: Calendar month (simpler, predictable)

### Implementation:
```typescript
// Check usage before TTS
const userDoc = await getDoc(doc(db, 'users', userId));
const { wordsUsed, wordsLimit, usageResetDate } = userDoc.data();

// Check if reset needed
if (new Date() > usageResetDate.toDate()) {
  // Reset usage
  await updateDoc(doc(db, 'users', userId), {
    wordsUsed: 0,
    usageResetDate: getNextMonthStart()
  });
}

// Check limit
if (wordsUsed + wordCount > wordsLimit) {
  throw new Error('Usage limit reached');
}
```

---

## 💳 Payment System: Stripe

### Stripe Integration:
- Subscription management
- Webhook handling for payment events
- Customer portal for subscription management
- Automatic billing
- Cancel/upgrade/downgrade flows

### Stripe Products:
1. **Basic Monthly** - $4.99/month
2. **Basic Annual** - $47.90/year
3. **Pro Monthly** - $9.99/month
4. **Pro Annual** - $95.90/year

### Webhook Events to Handle:
- `customer.subscription.created` - New subscription
- `customer.subscription.updated` - Subscription changed
- `customer.subscription.deleted` - Subscription canceled
- `invoice.payment_succeeded` - Payment successful
- `invoice.payment_failed` - Payment failed

---

## 🎬 YouTube Tutorial Workflow

### Video 1: Google Cloud TTS Setup
**When**: During Phase 3 (Google Cloud Integration)
**Content**: Follow `youtube-content/02-google-cloud-setup-slides.md`
**Process**:
1. Record/screenshot Google Cloud Console setup
2. Create new Google Cloud project
3. Enable Text-to-Speech API
4. Create service account
5. Download credentials
6. Configure in app
7. Test TTS generation

### Video 2: Full App Development
**When**: After completion or during development
**Content**: Follow `youtube-content/01-tts-setup-slides.md`
**Process**:
1. Project setup
2. Firebase Auth setup
3. Firestore setup
4. TTS integration
5. Stripe integration
6. Deployment

---

## 📁 Project Structure

```
tts-app/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx              # Login page
│   │   ├── signup/
│   │   │   └── page.tsx               # Signup page
│   │   ├── verify-email/
│   │   │   └── page.tsx               # Email verification handler
│   │   └── reset-password/
│   │       └── page.tsx               # Password reset
│   ├── dashboard/
│   │   └── page.tsx                   # User dashboard
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup/
│   │   │   │   └── route.ts           # Signup endpoint
│   │   │   ├── login/
│   │   │   │   └── route.ts           # Login endpoint
│   │   │   ├── logout/
│   │   │   │   └── route.ts           # Logout endpoint
│   │   │   ├── resend-verification/
│   │   │   │   └── route.ts           # Resend verification email
│   │   │   └── reset-password/
│   │   │       └── route.ts            # Password reset
│   │   ├── tts/
│   │   │   ├── generate/
│   │   │   │   └── route.ts           # TTS generation (with auth/usage check)
│   │   │   └── voices/
│   │   │       └── route.ts           # List available voices
│   │   ├── usage/
│   │   │   ├── check/
│   │   │   │   └── route.ts           # Check user usage
│   │   │   └── update/
│   │   │       └── route.ts            # Update usage after TTS
│   │   ├── subscription/
│   │   │   ├── checkout/
│   │   │   │   └── route.ts           # Create Stripe checkout session
│   │   │   ├── webhook/
│   │   │   │   └── route.ts           # Handle Stripe webhooks
│   │   │   └── portal/
│   │   │       └── route.ts            # Stripe customer portal
│   │   └── user/
│   │       └── route.ts                # Get user info
│   └── page.tsx                        # Main TTS page (protected)
├── components/
│   ├── TextToSpeech.tsx                # Main TTS component
│   ├── AuthButton.tsx                   # Login/logout button
│   ├── EmailVerificationBanner.tsx      # Email verification reminder
│   ├── UsageStats.tsx                  # Display usage stats
│   ├── UpgradePrompt.tsx                # Upgrade CTA
│   └── ProtectedRoute.tsx               # Route protection wrapper
├── lib/
│   ├── firebase/
│   │   ├── config.ts                   # Firebase config
│   │   ├── auth.ts                     # Auth helpers
│   │   └── firestore.ts                # Firestore helpers
│   ├── google-cloud/
│   │   └── tts.ts                      # Google Cloud TTS client
│   ├── stripe/
│   │   └── config.ts                   # Stripe config
│   └── usage.ts                         # Usage tracking functions
├── .env.local                           # Environment variables
├── firebase-service-account.json        # Firebase Admin SDK (server-side)
├── google-cloud-credentials.json        # Google Cloud TTS credentials
└── package.json
```

---

## 🔧 Technical Stack

### Frontend:
- **Next.js 14+** (App Router)
- **React 18+**
- **Tailwind CSS** (styling)
- **Firebase SDK** (Auth + Firestore client-side)

### Backend:
- **Next.js API Routes**
- **Firebase Admin SDK** (server-side operations)
- **Google Cloud TTS API** (`@google-cloud/text-to-speech`)
- **Stripe SDK** (`stripe`)

### Database:
- **Firestore** (NoSQL document database)

### Payment:
- **Stripe** (subscriptions)

### Deployment:
- **Vercel** (recommended) or **Firebase Hosting**

---

## 📋 Environment Variables

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin SDK (server-side only)
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY=your-private-key

# Google Cloud TTS
GOOGLE_APPLICATION_CREDENTIALS=./google-cloud-credentials.json

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Implementation Phases

### Phase 1: Project Setup & Firebase Configuration (Week 1)
**Goals**: Set up project structure and Firebase

**Tasks**:
- [ ] Create Next.js project
- [ ] Install dependencies (Firebase, Google Cloud TTS, Stripe)
- [ ] Set up Firebase project in Firebase Console
- [ ] Configure Firebase Auth (enable email/password)
- [ ] Configure Firestore database
- [ ] Set up Firebase Admin SDK
- [ ] Create environment variables
- [ ] Set up basic project structure

**Deliverables**:
- Next.js project running
- Firebase project configured
- Environment variables set up

---

### Phase 2: Authentication System (Week 1-2)
**Goals**: Implement email/password auth with email verification

**Tasks**:
- [ ] Create signup page (`/signup`)
- [ ] Create login page (`/login`)
- [ ] Implement signup with `createUserWithEmailAndPassword()`
- [ ] Implement email verification sending
- [ ] Create email verification handler page (`/verify-email`)
- [ ] Implement login with `signInWithEmailAndPassword()`
- [ ] Create logout functionality
- [ ] Create password reset flow
- [ ] Create user document in Firestore on signup
- [ ] Implement auth state listener
- [ ] Create protected route wrapper
- [ ] Add email verification check before TTS access
- [ ] Create "Resend verification email" functionality
- [ ] Create email verification banner component

**User Flows to Implement**:
1. Signup → Email sent → Verification required message
2. Email verification link → Account activated
3. Login → Check email verified → Allow/block TTS
4. Password reset flow

**Deliverables**:
- Complete authentication system
- Email verification working
- Protected routes implemented

---

### Phase 3: Google Cloud TTS Integration (Week 2)
**Goals**: Integrate Google Cloud TTS API (record for tutorial)

**Tasks**:
- [ ] **RECORD/Screenshot**: Google Cloud Console setup
  - Create Google Cloud project
  - Enable Text-to-Speech API
  - Create service account
  - Download credentials JSON
- [ ] Install `@google-cloud/text-to-speech`
- [ ] Create Google Cloud TTS client
- [ ] Create `/api/tts/voices` endpoint (list voices)
- [ ] Create `/api/tts/generate` endpoint
  - Check authentication (user logged in)
  - Check email verification (`emailVerified === true`)
  - Check usage limits
  - Generate audio
  - Update usage in Firestore
  - Return audio file
- [ ] Test TTS generation
- [ ] Handle errors (quota exceeded, invalid input, etc.)

**Deliverables**:
- Google Cloud TTS integrated
- API endpoints working
- Tutorial screenshots/video recorded

---

### Phase 4: Usage Tracking (Week 2-3)
**Goals**: Track and enforce usage limits

**Tasks**:
- [ ] Implement word counting function
- [ ] Create usage check API endpoint
- [ ] Create usage update API endpoint
- [ ] Implement monthly reset logic
- [ ] Add usage stats display component
- [ ] Show usage in TTS component
- [ ] Show warnings when approaching limit
- [ ] Block TTS when limit reached
- [ ] Create usage history tracking (optional)

**Deliverables**:
- Usage tracking working
- Limits enforced
- Usage stats displayed

---

### Phase 5: Stripe Integration (Week 3)
**Goals**: Add payment and subscription management

**Tasks**:
- [ ] Set up Stripe account
- [ ] Create products and prices in Stripe Dashboard
- [ ] Install Stripe SDK
- [ ] Create checkout API endpoint
- [ ] Create webhook endpoint for subscription events
- [ ] Handle webhook events:
  - Subscription created
  - Subscription updated
  - Subscription canceled
  - Payment succeeded/failed
- [ ] Update Firestore on subscription changes
- [ ] Create Stripe Customer Portal link
- [ ] Test subscription flows (test mode)

**Deliverables**:
- Stripe integrated
- Subscriptions working
- Webhooks handling events

---

### Phase 6: User Dashboard (Week 3-4)
**Goals**: Create user dashboard for account management

**Tasks**:
- [ ] Create dashboard page (`/dashboard`)
- [ ] Display current usage stats
- [ ] Display subscription status
- [ ] Add upgrade/downgrade buttons
- [ ] Link to Stripe Customer Portal
- [ ] Add account settings
- [ ] Show usage history (optional)
- [ ] Add subscription management UI

**Deliverables**:
- Complete user dashboard
- Subscription management working

---

### Phase 7: UI/UX Polish & Testing (Week 4)
**Goals**: Polish interface and test everything

**Tasks**:
- [ ] Update TTS component UI
- [ ] Add loading states
- [ ] Add error handling and messages
- [ ] Add success notifications
- [ ] Make responsive (mobile-friendly)
- [ ] Test all user flows:
  - Signup → Verification → Login → Use TTS
  - Subscription upgrade/downgrade
  - Usage limit enforcement
  - Password reset
- [ ] Security audit
- [ ] Performance optimization
- [ ] Accessibility improvements

**Deliverables**:
- Polished UI
- All features tested
- Ready for deployment

---

### Phase 8: Deployment (Week 4)
**Goals**: Deploy to production

**Tasks**:
- [ ] Set up Vercel project
- [ ] Configure environment variables in Vercel
- [ ] Upload Firebase Admin SDK credentials securely
- [ ] Upload Google Cloud credentials securely
- [ ] Configure Stripe webhook URL
- [ ] Deploy to production
- [ ] Test production deployment
- [ ] Set up custom domain (if needed)
- [ ] Configure Firebase Auth authorized domains

**Deliverables**:
- App deployed and live
- All features working in production

---

## 🔒 Security Considerations

### Authentication Security:
1. **Email Verification Required**: Users cannot use TTS until email verified
2. **Password Requirements**: Enforce strong passwords (min 8 chars, complexity)
3. **Rate Limiting**: Limit login attempts to prevent brute force
4. **Session Management**: Secure session handling with Firebase Auth

### API Security:
1. **Authentication Check**: All TTS endpoints require valid Firebase Auth token
2. **Email Verification Check**: Verify `emailVerified === true` before TTS
3. **Usage Limits**: Enforced server-side, cannot be bypassed
4. **Input Validation**: Validate and sanitize all inputs
5. **Rate Limiting**: Limit API requests per user/IP

### Data Security:
1. **Firestore Security Rules**: Users can only access their own data
2. **Environment Variables**: Never commit secrets to Git
3. **Credentials**: Store securely, use environment variables
4. **HTTPS Only**: Enforce HTTPS in production

### Payment Security:
1. **Stripe Keys**: Keep secret keys server-side only
2. **Webhook Verification**: Verify Stripe webhook signatures
3. **PCI Compliance**: Stripe handles payment data (we don't store card info)

---

## 📊 User Flows

### New User Signup Flow:
1. User visits app → Sees TTS page
2. Clicks "Sign Up" → Redirected to `/signup`
3. Enters email/password → Submits
4. Account created → Firebase sends verification email
5. User sees: "Please check your email to verify your account"
6. **TTS functionality is BLOCKED**
7. User clicks email verification link
8. Email verified → Redirected to app
9. User can now use TTS (within free tier limits)

### Existing User Login Flow:
1. User visits app → Clicks "Login"
2. Enters email/password → Logs in
3. System checks `emailVerified`:
   - **If verified**: User can use TTS
   - **If not verified**: Show verification banner, block TTS
4. User sees usage stats: "X / 1,000 words used"
5. Can use TTS within limits

### TTS Generation Flow:
1. User enters text in TTS component
2. System checks:
   - ✅ User logged in?
   - ✅ Email verified?
   - ✅ Usage limit not exceeded?
3. If all checks pass:
   - Generate audio via Google Cloud TTS
   - Update usage in Firestore
   - Return audio to user
4. If checks fail:
   - Show appropriate error message
   - Block TTS generation

### Subscription Upgrade Flow:
1. User clicks "Upgrade" button
2. Redirected to Stripe Checkout
3. User enters payment info
4. Payment processed
5. Stripe webhook updates Firestore
6. User redirected back to app
7. Usage limits updated immediately

---

## ✅ Testing Checklist

### Authentication:
- [ ] Signup creates account and sends verification email
- [ ] Email verification link works
- [ ] Login works with verified email
- [ ] Login blocked if email not verified (TTS access)
- [ ] Logout works
- [ ] Password reset works
- [ ] Resend verification email works
- [ ] Session persists across page reloads
- [ ] Protected routes redirect to login

### Email Verification:
- [ ] TTS blocked before email verification
- [ ] Verification banner shows when not verified
- [ ] TTS works after email verification
- [ ] Verification status updates in real-time

### Usage Tracking:
- [ ] Words counted accurately
- [ ] Usage updates in Firestore
- [ ] Usage limits enforced
- [ ] Usage resets monthly
- [ ] Usage stats display correctly
- [ ] Cannot bypass limits

### TTS Functionality:
- [ ] TTS generation works
- [ ] Voice selection works
- [ ] Audio playback works
- [ ] MP3 download works
- [ ] Error handling works (invalid input, API errors)

### Payments:
- [ ] Checkout flow works
- [ ] Webhooks process correctly
- [ ] Subscription status updates
- [ ] Upgrade/downgrade works
- [ ] Cancellation works
- [ ] Customer portal accessible

### UI/UX:
- [ ] All pages responsive
- [ ] Loading states work
- [ ] Error messages are clear
- [ ] Success notifications work
- [ ] Navigation works smoothly

---

## 📝 Next Steps

1. **Review this plan** - Make sure everything aligns with your vision
2. **Set up Firebase project** - Create Firebase project in console
3. **Set up Google Cloud** - Create project and enable TTS API (record for tutorial)
4. **Set up Stripe** - Create Stripe account and products
5. **Start Phase 1** - Begin project setup

---

## 🎯 Success Criteria

- ✅ Users can sign up with email/password
- ✅ Email verification required before TTS usage
- ✅ TTS generation works with Google Cloud API
- ✅ Usage tracking accurate and enforced
- ✅ Subscriptions work end-to-end
- ✅ Dashboard shows all user info
- ✅ All security measures in place
- ✅ App deployed and live
- ✅ Tutorial videos recorded

---

## 📚 Documentation References

- Firebase Auth: https://firebase.google.com/docs/auth
- Firestore: https://firebase.google.com/docs/firestore
- Google Cloud TTS: https://cloud.google.com/text-to-speech/docs
- Stripe Subscriptions: https://stripe.com/docs/billing/subscriptions/overview
- Next.js: https://nextjs.org/docs

---

**Ready to start building! 🚀**

