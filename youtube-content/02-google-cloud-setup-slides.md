# Google Cloud TTS Setup - Standalone Video Script

## Video Metadata

**Title**: "Complete Google Cloud Text-to-Speech Setup Guide | Step-by-Step Tutorial"

**Description**:
```
Learn how to set up Google Cloud Text-to-Speech API from scratch. This comprehensive guide walks you through every step needed to get your TTS credentials ready for your Next.js application.

You'll learn:
✅ Creating a Google Cloud project
✅ Enabling the Text-to-Speech API
✅ Creating and configuring service accounts
✅ Downloading and securing credentials
✅ Best practices for credential management

🔗 Next Video: Building TTS with Next.js
📁 Code: [GitHub URL]

#GoogleCloud #TextToSpeech #Tutorial #CloudSetup #API
```

**Estimated Duration**: 8-10 minutes

**Note**: This is a standalone detailed tutorial. Can be uploaded before the main TTS video.

---

## Slide 1: Title Slide
**Visual**: Google Cloud Console interface
**Slide Text**: 
```
Complete Google Cloud
Text-to-Speech Setup

Step-by-Step Tutorial
```

**TTS Narration**:
```
Welcome! This is a complete, step-by-step guide to setting up Google Cloud Text-to-Speech API. Whether you're building a Next.js app, a React project, or any other application, this tutorial will walk you through every step needed to get your credentials configured. Let's get started!
```

---

## Slide 2: What You'll Need
**Visual**: Checklist
**Slide Text**:
```
What You'll Need

✓ Google account
✓ Access to Google Cloud Console
✓ 10-15 minutes
✓ Basic understanding of APIs
```

**TTS Narration**:
```
Before we begin, make sure you have a Google account and access to Google Cloud Console. The setup process takes about 10 to 15 minutes, and you don't need to be an expert - I'll walk you through everything step by step.
```

---

## Slide 3: Why Google Cloud TTS?
**Visual**: Benefits/features
**Slide Text**:
```
Why Google Cloud TTS?

✓ High-quality neural voices
✓ 50+ languages supported
✓ Free tier: 4M characters/month
✓ Easy API integration
✓ Production-ready
```

**TTS Narration**:
```
Google Cloud Text-to-Speech offers high-quality neural voices, supports over 50 languages, and has a generous free tier of 4 million characters per month. It's easy to integrate and production-ready. Perfect for adding text-to-speech to your applications.
```

---

## Slide 4: Step 1 - Access Google Cloud Console
**Visual**: Google Cloud Console homepage
**Slide Text**:
```
Step 1: Access Google Cloud Console

1. Go to console.cloud.google.com
2. Sign in with your Google account
3. You'll see the dashboard
```

**TTS Narration**:
```
First, navigate to console dot cloud dot google dot com. Sign in with your Google account. Once you're in, you'll see the Google Cloud Console dashboard. This is where we'll do all our setup.
```

---

## Slide 5: Step 2 - Create or Select Project
**Visual**: Project creation/selection
**Slide Text**:
```
Step 2: Create or Select Project

Option A: Create New Project
• Click "Create Project"
• Enter project name
• Click "Create"

Option B: Select Existing Project
• Use project dropdown
• Select your project
```

**TTS Narration**:
```
Next, you need a project. If you don't have one, click "Create Project" at the top, give it a name like "my-tts-project", and click create. If you already have a project, use the project dropdown at the top to select it. Projects help organize your resources and billing.
```

---

## Slide 6: Step 3 - Enable Text-to-Speech API
**Visual**: API Library page
**Slide Text**:
```
Step 3: Enable Text-to-Speech API

1. Go to "APIs & Services"
2. Click "Library"
3. Search "Text-to-Speech"
4. Click "Enable"
```

**TTS Narration**:
```
Now we need to enable the Text-to-Speech API. Go to "APIs and Services" in the left menu, then click "Library". Search for "Text-to-Speech API" or "Cloud Text-to-Speech API". Click on it, then click the "Enable" button. This gives your project access to the TTS service.
```

---

## Slide 7: Step 4 - Create Service Account
**Visual**: Service Accounts page
**Slide Text**:
```
Step 4: Create Service Account

1. Go to "IAM & Admin"
2. Click "Service Accounts"
3. Click "Create Service Account"
4. Enter name: "tts-service"
```

**TTS Narration**:
```
Now we create a service account. This is a special account that your application will use to authenticate with Google Cloud. Go to "IAM and Admin" in the left menu, then click "Service Accounts". Click "Create Service Account", and give it a name like "tts-service". This name is just for organization - you can use any name you prefer.
```

---

## Slide 8: Step 5 - Grant Permissions
**Visual**: Role selection
**Slide Text**:
```
Step 5: Grant Permissions

Role to Grant:
"Cloud Text-to-Speech API User"

This allows the service account
to use the TTS API
```

**TTS Narration**:
```
When creating the service account, you'll be asked to grant a role. Search for and select "Cloud Text-to-Speech API User". This role gives the service account permission to use the Text-to-Speech API, but nothing more. It follows the principle of least privilege - only the permissions needed.
```

---

## Slide 9: Step 6 - Create and Download Key
**Visual**: Keys tab / Download dialog
**Slide Text**:
```
Step 6: Create and Download Key

1. Click on your service account
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON" format
5. Click "Create" (downloads automatically)
```

**TTS Narration**:
```
Now we create the credentials file. Click on the service account you just created. Go to the "Keys" tab at the top. Click "Add Key", then "Create new key". Choose "JSON" as the format - this is important. Click "Create" and the file will download automatically. This JSON file contains all the authentication information your application needs.
```

---

## Slide 10: Step 7 - Secure Your Credentials
**Visual**: .gitignore file / security tips
**Slide Text**:
```
Step 7: Secure Your Credentials

⚠️ IMPORTANT:
✓ Add to .gitignore
✓ Never commit to Git
✓ Store securely
✓ Use environment variables
```

**TTS Narration**:
```
This is crucial - secure your credentials file. First, add the JSON file to your gitignore file so it never gets committed to your repository. Never share this file publicly. Store it securely in your project root or a secure location. For production, use environment variables instead of the file. Security is essential!
```

---

## Slide 11: File Structure
**Visual**: Project folder structure
**Slide Text**:
```
Where to Place Credentials

Option 1: Project Root
[yourproject]/
  ├── credentials.json
  ├── .gitignore (includes it)
  └── ...

Option 2: Secure Location
/path/to/secure/credentials.json
```

**TTS Narration**:
```
You have two options for where to place your credentials file. Option one is in your project root - just make sure it's in your gitignore. Option two is in a secure location outside your project. Either way works, but make absolutely sure it's in your gitignore file and never gets committed to version control.
```

---

## Slide 12: Verify Setup
**Visual**: Checklist
**Slide Text**:
```
Verify Your Setup

✓ Project created/selected
✓ Text-to-Speech API enabled
✓ Service account created
✓ JSON key downloaded
✓ Added to .gitignore
```

**TTS Narration**:
```
Let's verify everything is set up correctly. You should have: a Google Cloud project, the Text-to-Speech API enabled, a service account created with the right permissions, the JSON credentials file downloaded, and that file added to your gitignore. If you have all of these, you're ready to use Google Cloud TTS in your application!
```

---

## Slide 13: Next Steps
**Visual**: Arrow pointing forward
**Slide Text**:
```
Next Steps

1. Use credentials in your app
2. Set up environment variables
3. Test the TTS API
4. Check out the Next.js tutorial
```

**TTS Narration**:
```
Great! Your Google Cloud setup is complete. Next, you'll use these credentials in your application. Set up environment variables for production, test the TTS API to make sure everything works, and if you're building with Next.js, check out my tutorial on integrating this into your Next.js application. The link is in the description below.
```

---

## Slide 14: Troubleshooting
**Visual**: Common issues
**Slide Text**:
```
Common Issues

❌ "API not enabled"
→ Enable Text-to-Speech API

❌ "Permission denied"
→ Check service account role

❌ "Credentials not found"
→ Verify file path
```

**TTS Narration**:
```
If you run into issues, here are some common problems. If you get "API not enabled", make sure you enabled the Text-to-Speech API in the API Library. If you see "Permission denied", check that your service account has the "Cloud Text-to-Speech API User" role. And if credentials aren't found, verify the file path is correct.
```

---

## Slide 15: Cost Information
**Visual**: Pricing breakdown
**Slide Text**:
```
Cost Information

Free Tier: 0-4M characters/month
After: $4 per 1M characters

Perfect for most projects!
```

**TTS Narration**:
```
Quick note on cost. Google Cloud offers a generous free tier of up to 4 million characters per month. After that, it's about 4 dollars per million characters. For most projects, especially portfolio websites or small applications, the free tier is more than enough. You can check your usage in the Google Cloud Console.
```

---

## Slide 16: Summary
**Visual**: Summary points
**Slide Text**:
```
What You Learned

✓ Created Google Cloud project
✓ Enabled Text-to-Speech API
✓ Created service account
✓ Downloaded credentials
✓ Secured credentials properly
```

**TTS Narration**:
```
Let's recap what we covered. You learned how to create a Google Cloud project, enable the Text-to-Speech API, create a service account with the right permissions, download the JSON credentials file, and secure it properly. You're now ready to use Google Cloud TTS in your applications!
```

---

## Slide 17: Call to Action
**Visual**: Links and subscribe
**Slide Text**:
```
Ready to Build?

Next Video: Next.js TTS Integration
GitHub: [Your Repo]

Like & Subscribe for more!
```

**TTS Narration**:
```
If you're ready to build, check out my next video on integrating this into a Next.js application. The code is available on GitHub - link in the description. If this tutorial was helpful, give it a thumbs up and subscribe for more content. Let me know in the comments if you have any questions, and thanks for watching!
```

---

## Production Notes

### Visual Requirements
- Screenshots of Google Cloud Console for each step
- Clear annotations showing where to click
- Highlight important buttons and options
- Use arrows or callouts to guide viewers

### TTS Settings
- Voice: en-US-Neural2-F or en-US-Neural2-D
- Pace: Slightly slower for tutorial content
- Clear pronunciation of technical terms

### Estimated Duration
- Title slide: 10 seconds
- Each step slide: 45-60 seconds (more detailed)
- Troubleshooting: 30 seconds
- Total: 8-10 minutes

### Key Focus
- **Clarity**: Every step must be crystal clear
- **Visuals**: Screenshots are essential
- **Security**: Emphasize credential security
- **Usefulness**: Make it a go-to resource

---

## Content Strategy

### Why Standalone?
- More detailed than main video
- Useful as reference material
- Better for SEO (specific topic)
- Can be linked from main video
- Serves different audience needs

### Relationship to Main Video
- Main video can reference: "If you need help with Google Cloud setup, check out my detailed tutorial"
- This video can reference: "Next, check out how to integrate this into Next.js"
- Cross-promotion between videos

### Upload Strategy
- Upload this video FIRST
- Then upload main TTS video
- Link them in descriptions
- Create a playlist

