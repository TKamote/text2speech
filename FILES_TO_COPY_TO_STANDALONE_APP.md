# Files to Copy to Standalone TTS App

## 📋 Quick Reference: What to Copy

When creating the new standalone TTS app project, copy these files/folders:

---

## 🎬 YouTube Content (Copy Entire Folder)

**Copy**: `youtube-content/` folder (entire folder)

**Contains**:
- ✅ `01-tts-setup-slides.md` - Main TTS tutorial slides
- ✅ `01-tts-setup-script.md` - Detailed script reference
- ✅ `02-google-cloud-setup-slides.md` - Google Cloud setup slides
- ✅ `PRODUCTION_WORKFLOW.md` - Production workflow guide
- ✅ `README.md` - YouTube content overview
- ✅ All other YouTube content files

**Why**: These are your tutorial materials and will be used for the YouTube videos.

---

## 📚 Documentation (Selective Copy)

### Must Copy:
- ✅ `docs/STANDALONE_TTS_APP_PLAN.md` - The complete plan (this is your roadmap)
- ✅ `docs/TTS_SETUP.md` - Google Cloud setup guide
- ✅ `docs/TTS_EDUCATION.md` - Voice types, sample rates, languages
- ✅ `docs/TTS_TROUBLESHOOTING.md` - Common issues and solutions
- ✅ `docs/VERCEL_SETUP.md` - Deployment guide (if deploying to Vercel)

### Optional (Reference Only):
- `docs/FIREBASE_AUTH_FLOW.md` - Not needed (no auth in standalone app)
- `docs/INSTALLATION_GUIDE.md` - Not needed (no Firebase/Stripe)
- `docs/FIREBASE_CONFIG_VERIFICATION.md` - Not needed (no Firebase)

---

## 💻 Code Reference (Don't Copy, Use as Reference)

**Reference Only** (look at these for structure, but don't copy):
- ❌ `components/TextToSpeech.tsx` - **DELETED** (but you can reference the logic)
- ❌ `app/api/tts/generate/route.ts` - **DELETED** (but you can reference the structure)
- ❌ `app/api/tts/voices/route.ts` - **DELETED** (but you can reference the structure)

**Note**: These files were deleted from the portfolio, but you can:
1. Check git history if needed
2. Use the plan document to rebuild them
3. Reference the YouTube slides for implementation details

---

## 🔑 Credentials (Don't Copy)

**Don't Copy**:
- ❌ `.env.local` - Create new one with NEW Google account credentials
- ❌ `myportfoliowebsite.json` - Will create new credentials file
- ❌ `firebase-service-account.json` - Not needed (no Firebase)

**Instead**:
- Create NEW Google account
- Set up NEW Google Cloud project
- Generate NEW service account credentials
- Save as `tts-service-account.json` (or similar name)

---

## 📁 Recommended Folder Structure in New App

```
tts-standalone-app/
├── app/                        # Next.js app directory
├── components/                 # React components
├── lib/                        # Utilities
├── public/                     # Static assets
├── youtube-content/            # ← COPY ENTIRE FOLDER
│   ├── 01-tts-setup-slides.md
│   ├── 02-google-cloud-setup-slides.md
│   └── ... (all YouTube content)
├── docs/                       # ← COPY SELECTED FILES
│   ├── STANDALONE_TTS_APP_PLAN.md
│   ├── TTS_SETUP.md
│   ├── TTS_EDUCATION.md
│   ├── TTS_TROUBLESHOOTING.md
│   └── VERCEL_SETUP.md
├── .env.local                  # ← CREATE NEW (with new credentials)
├── tts-service-account.json    # ← CREATE NEW (from new Google account)
└── ... (other Next.js files)
```

---

## ✅ Copy Checklist

### Phase 1: YouTube Content
- [ ] Copy entire `youtube-content/` folder
- [ ] Verify all `.md` files are present
- [ ] Check that `01-tts-setup-slides.md` has all slides
- [ ] Check that `02-google-cloud-setup-slides.md` is there

### Phase 2: Documentation
- [ ] Copy `docs/STANDALONE_TTS_APP_PLAN.md`
- [ ] Copy `docs/TTS_SETUP.md`
- [ ] Copy `docs/TTS_EDUCATION.md`
- [ ] Copy `docs/TTS_TROUBLESHOOTING.md`
- [ ] Copy `docs/VERCEL_SETUP.md` (if using Vercel)

### Phase 3: Setup New Project
- [ ] Create new Next.js project
- [ ] Create new Google account
- [ ] Set up new Google Cloud project
- [ ] Generate new service account credentials
- [ ] Create `.env.local` with new credentials
- [ ] Start building following the plan

---

## 🚀 Quick Copy Commands

If you want to copy files quickly:

```bash
# From portfolio project root
# Copy YouTube content folder
cp -r youtube-content /path/to/new/tts-standalone-app/

# Copy selected docs
mkdir -p /path/to/new/tts-standalone-app/docs
cp docs/STANDALONE_TTS_APP_PLAN.md /path/to/new/tts-standalone-app/docs/
cp docs/TTS_SETUP.md /path/to/new/tts-standalone-app/docs/
cp docs/TTS_EDUCATION.md /path/to/new/tts-standalone-app/docs/
cp docs/TTS_TROUBLESHOOTING.md /path/to/new/tts-standalone-app/docs/
cp docs/VERCEL_SETUP.md /path/to/new/tts-standalone-app/docs/
```

---

## 📝 Notes

- **YouTube Content**: Essential - you'll need this for creating tutorial videos
- **Documentation**: Very helpful - guides you through setup and troubleshooting
- **Code**: Don't copy - rebuild fresh following the plan (cleaner approach)
- **Credentials**: Create new - use new Google account for tutorial demonstration

---

Ready to transfer! 🎬

