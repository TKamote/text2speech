# YouTube Content Folder

This folder contains all scripts, slides, and production materials for YouTube videos showcasing portfolio features and skills.

## 🎬 Production Workflow

**Quick Start**: Read `PRODUCTION_WORKFLOW.md` for the complete step-by-step process.

**Format**: Slide-based presentations with TTS narration (5-10 minute quick overviews)

## 📁 Current Content

### 1. Text-to-Speech Setup ✅
- **Slide Script**: `01-tts-setup-slides.md` - Ready for production
- **Detailed Script**: `01-tts-setup-script.md` - Reference material
- **Topic**: Integrating Google Cloud TTS into Next.js portfolio
- **Duration**: ~5-7 minutes
- **Status**: Ready to create slides and generate TTS

## 📋 File Structure

```
youtube-content/
├── README.md (this file)
├── PRODUCTION_WORKFLOW.md (complete workflow guide)
├── VIDEO_TEMPLATE.md (template for new videos)
├── 01-tts-setup-slides.md (slide script with TTS text)
├── 01-tts-setup-script.md (detailed reference script)
└── 01-tts-setup/ (production folder - create when ready)
    ├── slides/
    ├── audio/
    ├── recordings/
    └── final/
```

## 🚀 Quick Start Guide

### For Your First Video (TTS Setup):

1. **Review the Slide Script**
   - Open `01-tts-setup-slides.md`
   - Review all 13 slides and TTS narration text

2. **Create Slides**
   - Use Canva, PowerPoint, or Keynote
   - Follow design guidelines in slide script
   - Export as high-res images (1920x1080)

3. **Generate TTS Audio**
   - Go to your portfolio `/creator` page
   - Expand Text-to-Speech card
   - For each slide, copy narration text → generate → download
   - Name files: `narration-01.mp3`, `narration-02.mp3`, etc.

4. **Record Demo** (if needed)
   - Record screen showing TTS feature in action
   - Use QuickTime (Mac) or OBS Studio

5. **Assemble Video**
   - Import slides and audio into video editor
   - Sync audio with slides
   - Add transitions and polish
   - Export as MP4 (1920x1080, 30fps)

6. **Upload to YouTube**
   - Use title and description from script
   - Add thumbnail
   - Set to Unlisted first, then Public after review

## 📝 Content Structure

Each video uses this format:
- **Slide Script** (`##-topic-slides.md`): Slide text + TTS narration
- **Production Folder** (`##-topic/`): All assets (slides, audio, recordings, final video)

## 🎯 Future Video Ideas

1. **Portfolio Architecture Overview**
   - Next.js 14 App Router
   - Component structure
   - Styling with Tailwind CSS

2. **Project Deep Dives**
   - PDF Report Maker
   - TourTrack
   - Live Streaming Overlay

3. **Development Workflows**
   - Automated deployment (Vercel)
   - Mobile app deployment (EAS/App Store)
   - Firebase integration

4. **Skills & Technologies**
   - React Native development
   - Firebase backend setup
   - Design process

## 💡 Tips

- **Use the Template**: Copy `VIDEO_TEMPLATE.md` for new videos
- **Follow Workflow**: Stick to `PRODUCTION_WORKFLOW.md` for consistency
- **Keep It Quick**: Aim for 5-10 minute overviews
- **Be Consistent**: Use same voice, style, format
- **Quality First**: Take time for good slides and clear audio

## 📊 File Naming Convention

**Slide Scripts**: `##-topic-slides.md`
- `##` = Sequential number (01, 02, 03...)
- `topic` = Kebab-case topic name
- Always end with `-slides.md`

**Production Folders**: `##-topic/`
- Match the slide script number and name

Example: 
- `02-portfolio-architecture-slides.md`
- `02-portfolio-architecture/`

## ✅ Production Checklist

Before starting a new video:
- [ ] Script written (`##-topic-slides.md`)
- [ ] Script reviewed
- [ ] Production folder created
- [ ] Ready to create slides

During production:
- [ ] Slides created and exported
- [ ] TTS audio generated
- [ ] Screen recordings done (if needed)
- [ ] Video assembled
- [ ] Captions added

Before upload:
- [ ] Video exported
- [ ] Thumbnail created
- [ ] Description prepared
- [ ] Tags ready
- [ ] Final review done

