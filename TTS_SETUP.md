# Text to Speech Setup Guide

## ⚠️ Important: Authentication Required

**The TTS feature now requires user authentication.** Users must sign up and log in to use Text-to-Speech. See `INSTALLATION_GUIDE.md` for Firebase authentication setup.

## 1. Install Dependencies

Run this command in your terminal:
```bash
npm install @google-cloud/text-to-speech
```

## 2. Google Cloud Setup

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Cloud Text-to-Speech API**

### Step 2: Create Service Account
1. Go to **IAM & Admin** > **Service Accounts**
2. Click **Create Service Account**
3. Give it a name (e.g., "tts-service")
4. Grant it the role: **Cloud Text-to-Speech API User**
5. Click **Done**

### Step 3: Create and Download Key
1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Download the JSON file

### Step 4: Set Environment Variable
Place the downloaded JSON file in your project root (or a secure location).

Then set the environment variable:

**Option A: Using .env.local file (Recommended)**
Create a `.env.local` file in your project root:
```
GOOGLE_APPLICATION_CREDENTIALS=./path/to/your-service-account-key.json
```

**Option B: Using system environment variable**
```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-service-account-key.json"
```

**Option C: Direct path in code (Not recommended for production)**
You can modify the API route to use a direct path, but this is less secure.

## 3. Add .env.local to .gitignore

Make sure `.env.local` is in your `.gitignore` file to keep your credentials secure.

## 4. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the Creator page (`/creator`)
3. **Sign up or sign in** (authentication required)
4. Click on the Text to Speech card to expand it
5. Enter some text and try generating audio
6. Free tier: 1,000 words per month

## Troubleshooting

- **"Google Cloud credentials not configured"**: Make sure `GOOGLE_APPLICATION_CREDENTIALS` is set correctly
- **"Failed to generate audio"**: Check that the Text-to-Speech API is enabled in your Google Cloud project
- **Billing**: Google Cloud TTS has a free tier (0-4M characters/month), then paid usage

## Cost Information

- **Free Tier**: First 0-4 million characters per month
- **Paid**: $4.00 per 1 million characters after free tier
- Check [Google Cloud Pricing](https://cloud.google.com/text-to-speech/pricing) for details

