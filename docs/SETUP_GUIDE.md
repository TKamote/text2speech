# Setup Guide - TTS App

This guide will walk you through setting up the Text-to-Speech application from scratch.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- A Google account (for Firebase and Google Cloud)
- A Stripe account (for payments)

---

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js, React, TypeScript
- Firebase SDK
- Google Cloud TTS SDK
- Stripe SDK
- Tailwind CSS

---

## Step 2: Firebase Setup

### 2.1 Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select existing project
3. Follow the setup wizard
4. Note your project ID

### 2.2 Enable Authentication

1. In Firebase Console, go to **Authentication** > **Get started**
2. Click **Sign-in method** tab
3. Enable **Email/Password** provider
4. Click **Save**

### 2.3 Create Firestore Database

1. Go to **Firestore Database** > **Create database**
2. Start in **production mode** (we'll set security rules)
3. Choose a location (choose closest to your users)
4. Click **Enable**

### 2.4 Set Firestore Security Rules

1. Go to **Firestore Database** > **Rules**
2. Replace with these rules:

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

3. Click **Publish**

### 2.5 Get Firebase Web App Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll to **Your apps** section
3. Click **Web** icon (`</>`)
4. Register app with a nickname (e.g., "TTS App")
5. Copy the Firebase configuration object

### 2.6 Get Firebase Admin SDK Credentials

1. Still in **Project Settings**
2. Go to **Service accounts** tab
3. Click **Generate new private key**
4. Download the JSON file
5. **Important**: Save this securely, we'll use it for environment variables

---

## Step 3: Google Cloud Setup

> **Note**: This step will be recorded/screenshotted for the YouTube tutorial video.

### 3.1 Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click project dropdown at top
3. Click **New Project**
4. Enter project name (e.g., "tts-app")
5. Click **Create**

### 3.2 Enable Text-to-Speech API

1. In Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Cloud Text-to-Speech API"
3. Click on it
4. Click **Enable**

### 3.3 Create Service Account

1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Enter name: "tts-service"
4. Click **Create and Continue**
5. Grant role: **Cloud Text-to-Speech API User**
6. Click **Continue** then **Done**

### 3.4 Create and Download Key

1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Click **Create** (file downloads automatically)
6. Save this file as `google-cloud-credentials.json` in project root

---

## Step 4: Stripe Setup

### 4.1 Create Stripe Account

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Sign up or log in
3. Note: Start in **Test mode** for development

### 4.2 Get API Keys

1. In Stripe Dashboard, go to **Developers** > **API keys**
2. Copy **Publishable key** (starts with `pk_test_`)
3. Copy **Secret key** (starts with `sk_test_`) - click "Reveal test key"

### 4.3 Create Products and Prices

1. Go to **Products** > **Add product**
2. Create products for each tier:
   - **Basic Monthly**: $4.99/month
   - **Basic Annual**: $47.90/year
   - **Pro Monthly**: $9.99/month
   - **Pro Annual**: $95.90/year
3. Note the Price IDs (you'll need these for checkout)

### 4.4 Set Up Webhook

1. Go to **Developers** > **Webhooks**
2. Click **Add endpoint**
3. For local development, use [Stripe CLI](https://stripe.com/docs/stripe-cli)
4. For production, use your deployed URL: `https://yourdomain.com/api/subscription/webhook`
5. Select events to listen for:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
6. Copy the webhook signing secret

---

## Step 5: Environment Variables

Create a `.env.local` file in the project root:

```env
# Firebase Configuration (Client-side)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin SDK (Server-side)
# Get these from the Firebase Admin SDK JSON file you downloaded
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

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

**Important Notes**:
- Replace all placeholder values with your actual credentials
- For `FIREBASE_ADMIN_PRIVATE_KEY`, copy the entire private key from the JSON file, including `\n` characters
- The `.env.local` file is already in `.gitignore` - never commit it!

---

## Step 6: Verify Setup

1. Make sure `google-cloud-credentials.json` is in project root
2. Make sure `.env.local` is configured
3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)
5. Check browser console for any errors

---

## Step 7: Configure Firebase Auth Email Templates (Optional)

1. In Firebase Console, go to **Authentication** > **Templates**
2. Customize the email verification template
3. Set the action URL to: `http://localhost:3000/verify-email` (for dev)
4. For production: `https://yourdomain.com/verify-email`

---

## Troubleshooting

### Firebase Errors
- **"Firebase: Error (auth/configuration-not-found)"**: Check that all `NEXT_PUBLIC_FIREBASE_*` variables are set
- **"Firebase Admin SDK credentials error"**: Verify `FIREBASE_ADMIN_*` variables are correct

### Google Cloud Errors
- **"GOOGLE_APPLICATION_CREDENTIALS not set"**: Make sure the path is correct and file exists
- **"Permission denied"**: Check service account has "Cloud Text-to-Speech API User" role

### Stripe Errors
- **"Invalid API Key"**: Make sure you're using test keys in development
- **"Webhook signature verification failed"**: Check webhook secret is correct

---

## Next Steps

Once setup is complete, you can start building the app following the phases in `FULL_TTS_APP_PLAN.md`:

1. ✅ Phase 1: Project Setup (You are here!)
2. Phase 2: Authentication System
3. Phase 3: Google Cloud TTS Integration
4. Phase 4: Usage Tracking
5. Phase 5: Stripe Integration
6. Phase 6: User Dashboard
7. Phase 7: UI/UX Polish
8. Phase 8: Deployment

---

## Security Checklist

Before deploying to production:

- [ ] All environment variables are set correctly
- [ ] `.env.local` is in `.gitignore`
- [ ] Credential files are not committed to Git
- [ ] Firestore security rules are configured
- [ ] Firebase Auth authorized domains include your production domain
- [ ] Stripe webhook is configured for production URL
- [ ] HTTPS is enabled in production
- [ ] Rate limiting is implemented (optional but recommended)

---

Ready to start building! 🚀

