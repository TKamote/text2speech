# Standalone Text-to-Speech App - Development Plan

## 🎯 Project Overview

**Goal**: Create a simple, single-page Next.js webapp for Text-to-Speech functionality
- **No authentication** (public access)
- **Single scrollable page** (vertical scroll only)
- **NEW Google Cloud account setup** (for YouTube tutorial demonstration)
- **Clean, simple UI** focused on TTS functionality
- **YouTube Content**: This setup will be recorded/screenshotted for TTS tutorial video

---

## 🎥 YouTube Tutorial Integration

**Purpose**: This project will be used to create YouTube content demonstrating:
1. **Google Cloud Setup Video** - Complete setup from scratch using a NEW Google account
2. **TTS App Development Video** - Building the standalone TTS app

**Important Notes**:
- ✅ Use a **NEW Google account** (not your existing portfolio account)
- ✅ Record/screenshot the entire Google Cloud setup process
- ✅ This provides clean, real-world demonstration for viewers
- ✅ Can be used for multiple tutorial videos
- ✅ Reference: `youtube-content/02-google-cloud-setup-slides.md` for slide content

---

## 📁 Project Structure

```
tts-standalone-app/
├── app/
│   ├── layout.tsx              # Root layout (minimal)
│   ├── page.tsx                # Single page with TTS UI
│   ├── globals.css              # Global styles
│   └── api/
│       ├── tts/
│       │   ├── generate/
│       │   │   └── route.ts    # Generate audio endpoint
│       │   └── voices/
│       │       └── route.ts     # List voices endpoint
│
├── components/
│   └── TextToSpeech.tsx        # Main TTS component
│
├── lib/
│   └── (empty or minimal utilities)
│
├── public/                      # Static assets (if needed)
├── .env.local                   # Google Cloud credentials
├── .gitignore
├── package.json
├── next.config.js
├── tsconfig.json
└── tailwind.config.js
```

---

## ✅ What Can Be Reused

### 1. Google Cloud Setup
- ❌ **NEW Google Account** - Create fresh account for tutorial/demonstration
- ❌ **NEW Google Cloud Project** - Start from scratch for clean tutorial
- ❌ **NEW Service Account** - Create new credentials for this project
- ✅ **Same Setup Process** - Follow same steps as portfolio app
- ✅ **Environment Variable** - Same `GOOGLE_APPLICATION_CREDENTIALS` setup pattern

**Why New Account?**
- ✅ Clean demonstration for YouTube tutorial
- ✅ Shows real-world setup process from scratch
- ✅ No confusion with existing projects
- ✅ Can be used for multiple tutorial videos
- ✅ Better for educational content

**Note**: Since it's public (no auth), you might want to:
- Set up API quotas/limits in Google Cloud Console
- Monitor usage to prevent abuse
- Consider rate limiting in the API routes

### 2. Code Logic (Can Adapt)
- ✅ API route structure (`/api/tts/generate/route.ts`)
- ✅ API route for voices (`/api/tts/voices/route.ts`)
- ✅ TTS component logic (text input, voice selection, audio playback)
- ✅ Google Cloud TTS client initialization

### 3. Dependencies
- ✅ `@google-cloud/text-to-speech` - Same package
- ✅ `next`, `react`, `react-dom` - Core Next.js
- ✅ `tailwindcss` - For styling (optional, can use simpler CSS)
- ✅ `framer-motion` - For animations (optional)
- ✅ `lucide-react` - For icons (optional)

---

## 🆕 What's Different

### 1. No Authentication
- ❌ No Firebase Auth
- ❌ No user accounts
- ❌ No usage tracking
- ❌ No subscription/payment
- ✅ **Public access** - Anyone can use it

### 2. Simplified Structure
- ✅ Single page (`app/page.tsx`)
- ✅ No routing needed
- ✅ No dashboard, no auth pages
- ✅ Minimal layout

### 3. Simplified UI
- ✅ Focus on TTS functionality only
- ✅ Clean, simple design
- ✅ Vertical scroll layout
- ✅ No complex navigation

---

## 📋 Implementation Steps

### Phase 1: Google Cloud Setup (NEW Account) - For YouTube Tutorial
**⚠️ IMPORTANT**: Use a NEW Google account for this project

1. **Create New Google Account** (if needed)
   - Use a separate account for tutorial/demonstration
   - This will be recorded for YouTube content

2. **Google Cloud Console Setup** (Record/Screenshot this process)
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Sign in with NEW account
   - Create new project (e.g., "tts-tutorial-demo")
   - Enable Cloud Text-to-Speech API
   - Create service account:
     - Name: "tts-service" or "tts-demo-service"
     - Role: "Cloud Text-to-Speech API User"
   - Generate and download JSON key file
   - **Save file as**: `tts-service-account.json` (or similar)
   - **Record/Screenshot**: Entire process for YouTube tutorial
   - **Reference**: See `youtube-content/02-google-cloud-setup-slides.md` for slide content

3. **Set Up Billing** (if needed)
   - Link billing account (required even for free tier)
   - Set up billing alerts
   - Monitor usage

### Phase 2: Next.js Project Setup
1. Create new Next.js project: `npx create-next-app@latest tts-standalone-app`
2. Install dependencies:
   ```bash
   npm install @google-cloud/text-to-speech
   npm install lucide-react framer-motion  # Optional
   ```
3. Add Google Cloud credentials:
   - Place `tts-service-account.json` in project root
   - Add to `.gitignore`:
     ```
     tts-service-account.json
     .env.local
     ```
4. Set up `.env.local`:
   ```env
   GOOGLE_APPLICATION_CREDENTIALS=./tts-service-account.json
   ```

### Phase 3: API Routes
1. Create `app/api/tts/generate/route.ts`
   - Remove authentication checks
   - Keep Google Cloud TTS logic
   - Return MP3 audio
2. Create `app/api/tts/voices/route.ts`
   - Remove authentication checks
   - Return list of available voices

### Phase 4: Frontend Component
1. Create `components/TextToSpeech.tsx`
   - Text input area
   - Voice selection dropdown
   - Generate button
   - Audio player (play/pause)
   - Download button
   - Simple, clean UI

### Phase 5: Single Page Layout
1. Create `app/page.tsx`
   - Hero section (title, description)
   - TTS component
   - Footer (optional)
   - Vertical scroll layout

### Phase 6: Styling
1. Simple, clean design
2. Responsive (mobile-friendly)
3. Dark mode (optional)
4. Focus on usability

---

## 🔒 Security Considerations

Since it's public (no auth), consider:

1. **Rate Limiting**
   - Limit requests per IP
   - Use Next.js middleware or Vercel Edge Functions
   - Example: Max 10 requests per minute per IP

2. **Input Validation**
   - Limit text length (e.g., max 5000 characters)
   - Sanitize input
   - Prevent abuse

3. **Google Cloud Quotas**
   - Set up quotas in Google Cloud Console
   - Monitor usage
   - Set daily/monthly limits

4. **Cost Monitoring**
   - Track API usage
   - Set up billing alerts
   - Monitor costs in Google Cloud Console

---

## 📦 Dependencies Needed

```json
{
  "dependencies": {
    "@google-cloud/text-to-speech": "^6.4.0",
    "next": "^14.2.18",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.562.0",
    "framer-motion": "^12.23.26"
  },
  "devDependencies": {
    "@types/node": "^25.0.3",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "typescript": "^5.9.3",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.23",
    "postcss": "^8.5.6"
  }
}
```

---

## 🎨 UI/UX Design

### Layout Structure (Top to Bottom)
1. **Header** (optional)
   - Simple title: "Text to Speech"
   - Subtitle: "Convert text to natural-sounding speech"

2. **Main TTS Section**
   - Text input (large textarea)
   - Voice selection dropdown
   - Generate button
   - Audio player (when audio is generated)
   - Download button

3. **Info Section** (optional)
   - About the service
   - Voice options info
   - Usage tips

4. **Footer** (optional)
   - Credits
   - Links

### Design Principles
- ✅ Clean and minimal
- ✅ Focus on functionality
- ✅ Easy to use
- ✅ Mobile-responsive
- ✅ Fast loading

---

## 🚀 Deployment

### Option 1: Vercel (Recommended)
- Same as portfolio app
- Easy deployment
- Environment variables in Vercel dashboard
- Free tier available

### Option 2: Other Platforms
- Netlify
- Railway
- Render
- Any Node.js hosting

---

## 📝 Next Steps

1. **Create the project structure**
2. **Set up API routes** (copy and adapt from portfolio)
3. **Build the TTS component** (simplified version)
4. **Create single page layout**
5. **Add rate limiting** (optional but recommended)
6. **Test locally**
7. **Deploy to Vercel**
8. **Update portfolio TTS card** to link to new app

---

## 🔄 Reusing Firebase App?

**Answer: No need for Firebase**

Since the app is public (no authentication):
- ❌ No Firebase Authentication needed
- ❌ No Firestore database needed
- ❌ No user accounts needed
- ✅ Just Google Cloud TTS API

**However**, if you want to add features later:
- Usage analytics (optional)
- Rate limiting per user (optional)
- These can be added without Firebase (use simple in-memory or Redis)

---

## 📚 Documentation to Reference

### From Portfolio Project:
- `docs/TTS_SETUP.md` - Google Cloud setup guide
- `docs/TTS_EDUCATION.md` - Voice types, sample rates, languages
- `docs/TTS_TROUBLESHOOTING.md` - Common issues and solutions
- `docs/VERCEL_SETUP.md` - Deployment guide

### YouTube Content:
- `youtube-content/02-google-cloud-setup-slides.md` - Google Cloud setup slides
- `youtube-content/01-tts-setup-slides.md` - TTS app development slides
- `youtube-content/01-tts-setup-script.md` - Video script reference

### Code Reference:
- Portfolio app API routes (for structure, remove auth)
- Portfolio app TextToSpeech component (simplified version)

---

## 🎬 YouTube Content Creation Checklist

### For Google Cloud Setup Video:
- [ ] Create NEW Google account
- [ ] Record/screenshot Google Cloud Console navigation
- [ ] Record project creation process
- [ ] Record API enabling process
- [ ] Record service account creation
- [ ] Record credential download
- [ ] Record billing setup (if needed)
- [ ] Use slides from `youtube-content/02-google-cloud-setup-slides.md`
- [ ] Edit video with TTS narration
- [ ] Upload as standalone tutorial video

### For TTS App Development Video:
- [ ] Record Next.js project creation
- [ ] Record API route implementation
- [ ] Record component development
- [ ] Record testing process
- [ ] Record deployment to Vercel
- [ ] Use slides from `youtube-content/01-tts-setup-slides.md`
- [ ] Edit video with TTS narration
- [ ] Upload as main tutorial video

---

## ✅ Development Checklist

- [ ] **Phase 1**: Create NEW Google account
- [ ] **Phase 1**: Set up Google Cloud (record for YouTube)
- [ ] **Phase 2**: Create new Next.js project
- [ ] **Phase 2**: Install dependencies
- [ ] **Phase 2**: Set up Google Cloud credentials
- [ ] **Phase 3**: Create API routes (generate, voices)
- [ ] **Phase 4**: Build TTS component
- [ ] **Phase 5**: Create single page layout
- [ ] **Phase 6**: Add styling
- [ ] **Phase 6**: Add rate limiting (optional)
- [ ] Test locally
- [ ] Deploy to Vercel
- [ ] Update portfolio TTS card URL

---

## 📁 Project Location

**Recommended**: Create this as a completely separate project/folder:
```
tts-standalone-app/          # New folder, separate from portfolio
├── (all project files)
└── docs/
    └── STANDALONE_TTS_APP_PLAN.md  # Copy this plan
```

**Why Separate?**
- ✅ Clean separation from portfolio project
- ✅ Independent version control
- ✅ Easier to manage and deploy
- ✅ Can be shared/referenced independently

---

## 🎯 Summary

This project will:
1. ✅ Use a **NEW Google account** for clean tutorial demonstration
2. ✅ Be **recorded/screenshotted** for YouTube content
3. ✅ Create a **simple, public TTS webapp** (no auth)
4. ✅ Serve as **reference implementation** for tutorial viewers
5. ✅ Be **completely independent** from portfolio project

**Next Steps**: 
- Copy this plan to new project folder
- Start with Phase 1 (Google Cloud setup with NEW account)
- Record the process for YouTube tutorial
- Build the app following the phases above

Ready to start building! 🚀

