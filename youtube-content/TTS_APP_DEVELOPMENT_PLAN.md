# TTS App Development Plan - Paid Version with Login

## Overview

Transform the current TTS feature in the portfolio into a paid service with authentication, usage tracking, and subscription management.

---

## Phase 1: Standalone Demo App (For Video Production)

### Goal
Create a simple, no-login TTS app for video demonstrations and screen captures.

### Tasks
- [ ] Deploy current TTS component to subdomain (`demo.tkamot.com` or `tts-demo.tkamot.com`)
- [ ] No authentication required
- [ ] No usage limits
- [ ] Keep it minimal - just current TTS functionality
- [ ] Use for Video 2 screen capture
- [ ] Can be deleted after videos are published (or kept as simple showcase)

### Timeline
1-2 days

### Technical Details
- Same codebase, separate deployment
- No database needed
- No auth needed
- Just the TextToSpeech component

---

## Phase 2: Main App - Paid TTS with Login (Priority)

### Goal
Add authentication, usage tracking, and payment system to the main portfolio TTS feature.

### Features

#### 2.1 Authentication System
- **Technology**: NextAuth.js (recommended for Next.js)
- **Providers**: 
  - Google OAuth (easiest, most users have Google)
  - Email/Password (optional, more complex)
- **Database**: PostgreSQL (via Supabase) or MongoDB
- **User Model**:
  ```typescript
  {
    id: string
    email: string
    name: string
    subscriptionTier: 'free' | 'basic' | 'pro'
    wordsUsed: number
    wordsLimit: number
    subscriptionId?: string (Stripe)
    createdAt: Date
    updatedAt: Date
  }
  ```

#### 2.2 Usage Tracking
- Track words per user per month
- Reset monthly (based on subscription start date or calendar month)
- Check usage before each TTS request
- Store in database

#### 2.3 Pricing Tiers

**Free Tier** (Login Required):
- 1,000 words per month
- All voice options
- MP3 download
- Basic support

**Basic Tier** - $4.99/month:
- 10,000 words per month
- All voice options
- MP3 download
- Priority processing
- Email support

**Pro Tier** - $9.99/month:
- Unlimited words
- All voice options
- MP3 download
- Priority processing
- Priority support
- Usage history
- API access (future)

**Annual Plans** (20% discount):
- Basic Annual: $47.90/year (save $12)
- Pro Annual: $95.90/year (save $24)

#### 2.4 Payment System
- **Technology**: Stripe
- **Features**:
  - Subscription management
  - Webhook handling for payment events
  - Customer portal for subscription management
  - Automatic billing
  - Cancel/upgrade/downgrade flows

#### 2.5 User Dashboard
- Current usage stats (words used / limit)
- Subscription status
- Upgrade/downgrade buttons
- Usage history (optional)
- Account settings
- Billing management (via Stripe Customer Portal)

#### 2.6 TTS Component Updates
- Check authentication before allowing TTS
- Check usage limits before processing
- Show usage stats in UI
- Show upgrade prompts when limit reached
- Handle subscription status

---

## Implementation Steps

### Step 1: Set Up Authentication (Week 1)
1. Install NextAuth.js
2. Set up database (Supabase recommended - free tier available)
3. Configure Google OAuth
4. Create user model/schema
5. Implement login/logout
6. Protect TTS route with authentication

### Step 2: Usage Tracking (Week 1-2)
1. Create usage tracking table in database
2. Implement word counting logic
3. Create API endpoint to check usage
4. Create API endpoint to update usage
5. Add usage check before TTS generation
6. Display usage stats in UI

### Step 3: Stripe Integration (Week 2)
1. Set up Stripe account
2. Install Stripe SDK
3. Create products and prices in Stripe
4. Implement checkout flow
5. Set up webhooks for subscription events
6. Update user subscription status in database

### Step 4: User Dashboard (Week 2-3)
1. Create dashboard page (`/dashboard` or `/account`)
2. Display usage stats
3. Show subscription status
4. Add upgrade/downgrade buttons
5. Link to Stripe Customer Portal
6. Add account settings

### Step 5: UI Updates (Week 3)
1. Add login button to TTS component
2. Show usage limit warnings
3. Add upgrade prompts
4. Update TTS component to check auth/usage
5. Handle error states (limit reached, not logged in)
6. Polish UI/UX

### Step 6: Testing & Polish (Week 3-4)
1. Test authentication flow
2. Test usage tracking
3. Test payment flows
4. Test subscription management
5. Test error handling
6. Performance optimization
7. Security audit

---

## Technical Stack

### Frontend
- Next.js (already using)
- React (already using)
- Tailwind CSS (already using)
- NextAuth.js (new)
- Stripe.js (new)

### Backend
- Next.js API Routes (already using)
- NextAuth.js API (new)
- Stripe API (new)

### Database
- **Option 1**: Supabase (PostgreSQL) - Recommended
  - Free tier: 500MB database, 2GB bandwidth
  - Easy setup
  - Built-in auth (optional, but we'll use NextAuth)
- **Option 2**: MongoDB Atlas
  - Free tier: 512MB storage
  - Good for flexible schemas
- **Option 3**: Vercel Postgres
  - Integrated with Vercel
  - Pay-as-you-go

### Payment
- Stripe
  - 2.9% + $0.30 per transaction
  - Subscription management
  - Customer portal

### Environment Variables Needed
```env
# NextAuth
NEXTAUTH_URL=https://tkamot.com
NEXTAUTH_SECRET=your-secret-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database
DATABASE_URL=your-database-connection-string

# Stripe
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=your-webhook-secret

# Google Cloud TTS (existing)
GOOGLE_APPLICATION_CREDENTIALS=your-credentials
```

---

## File Structure

```
myportfolio2027/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts          # NextAuth handler
│   │   ├── tts/
│   │   │   ├── generate/
│   │   │   │   └── route.ts           # Updated with auth/usage check
│   │   │   └── voices/
│   │   │       └── route.ts
│   │   ├── usage/
│   │   │   ├── check/
│   │   │   │   └── route.ts           # Check user usage
│   │   │   └── update/
│   │   │       └── route.ts           # Update usage after TTS
│   │   ├── subscription/
│   │   │   ├── checkout/
│   │   │   │   └── route.ts           # Create Stripe checkout
│   │   │   └── webhook/
│   │   │       └── route.ts           # Handle Stripe webhooks
│   │   └── user/
│   │       └── route.ts               # Get user info
│   ├── dashboard/
│   │   └── page.tsx                   # User dashboard
│   ├── creator/
│   │   └── page.tsx                   # Updated with auth check
│   └── ...
├── components/
│   ├── TextToSpeech.tsx               # Updated with auth/usage
│   ├── AuthButton.tsx                 # Login/logout button
│   ├── UsageStats.tsx                 # Display usage
│   ├── UpgradePrompt.tsx              # Upgrade CTA
│   └── ...
├── lib/
│   ├── auth.ts                        # NextAuth config
│   ├── db.ts                          # Database connection
│   ├── usage.ts                       # Usage tracking functions
│   ├── stripe.ts                      # Stripe configuration
│   └── ...
└── ...
```

---

## User Flow

### New User Flow
1. User visits `/creator` page
2. Sees TTS component with "Login to Try" button
3. Clicks login → Google OAuth
4. Redirected back to `/creator`
5. Sees usage: "0 / 1,000 words used this month"
6. Can use TTS (up to 1,000 words)
7. When limit reached → upgrade prompt

### Existing User Flow
1. User visits `/creator` page
2. Already logged in
3. Sees current usage
4. Uses TTS within limit
5. Can upgrade anytime from dashboard

### Payment Flow
1. User clicks "Upgrade" button
2. Redirected to Stripe Checkout
3. Enters payment info
4. Payment processed
5. Webhook updates user subscription
6. User redirected back with upgraded status
7. Can now use higher limits

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  image TEXT,
  subscription_tier VARCHAR(20) DEFAULT 'free',
  words_used INTEGER DEFAULT 0,
  words_limit INTEGER DEFAULT 1000,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  subscription_status VARCHAR(50),
  usage_reset_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Usage History Table (Optional)
```sql
CREATE TABLE usage_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  words_count INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Security Considerations

1. **Authentication**: All TTS requests require valid session
2. **Usage Tracking**: Server-side only, cannot be bypassed
3. **API Keys**: Keep Stripe keys server-side only
4. **Rate Limiting**: Add rate limiting to prevent abuse
5. **Input Validation**: Validate all user inputs
6. **SQL Injection**: Use parameterized queries
7. **XSS Protection**: Sanitize user inputs

---

## Testing Checklist

### Authentication
- [ ] Login with Google works
- [ ] Logout works
- [ ] Session persists across page reloads
- [ ] Protected routes redirect to login
- [ ] User data loads correctly

### Usage Tracking
- [ ] Words are counted accurately
- [ ] Usage resets monthly
- [ ] Limits are enforced
- [ ] Usage stats display correctly
- [ ] Cannot bypass limits

### Payments
- [ ] Checkout flow works
- [ ] Webhooks process correctly
- [ ] Subscription status updates
- [ ] Upgrade/downgrade works
- [ ] Cancellation works
- [ ] Customer portal accessible

### UI/UX
- [ ] Login prompts are clear
- [ ] Usage stats are visible
- [ ] Upgrade prompts appear at right time
- [ ] Error messages are helpful
- [ ] Loading states work
- [ ] Mobile responsive

---

## Timeline

**Total: 3-4 weeks**

- Week 1: Authentication + Usage Tracking
- Week 2: Stripe Integration
- Week 3: Dashboard + UI Updates
- Week 4: Testing + Polish

---

## Success Metrics

- Users can log in successfully
- Usage is tracked accurately
- Payments process correctly
- Subscriptions manage properly
- User experience is smooth
- No security vulnerabilities

---

## Next Steps After Launch

1. Monitor usage patterns
2. Collect user feedback
3. Adjust pricing if needed
4. Add more premium features
5. Marketing and promotion
6. Analytics and optimization

---

## Notes

- Start with Google OAuth only (simplest)
- Can add email/password later if needed
- Free tier limit can be adjusted based on usage
- Pricing can be adjusted based on market response
- Can add more tiers later (e.g., Enterprise)
- Consider adding referral program later

