# YouTube Video Production Workflow

## Overview
This document establishes our standard workflow for creating YouTube content using slides + TTS narration.

## Video Format
- **Style**: Slide-based presentation with TTS narration
- **Structure**: Quick overview format (5-10 minutes)
- **Target Audience**: Both beginners and intermediate developers
- **Narration**: Generated using portfolio's TTS feature

---

## Step-by-Step Production Process

### Phase 1: Content Preparation

#### 1.1 Create Slide Script
- [ ] Create markdown file: `##-topic-slides.md`
- [ ] Define 10-15 slides with:
  - Slide title/text (what appears on screen)
  - TTS narration text (what will be spoken)
- [ ] Include video metadata (title, description, tags)
- [ ] Add production notes

#### 1.2 Review & Refine
- [ ] Read through script for clarity
- [ ] Ensure flow is logical
- [ ] Check timing estimates
- [ ] Verify technical accuracy

---

### Phase 2: Slide Creation

#### 2.1 Design Slides
**Tools Options**:
- Canva (recommended - easy, professional)
- PowerPoint/Keynote
- Figma
- Google Slides

**Design Guidelines**:
- Use portfolio color scheme (purple/indigo theme)
- Keep text minimal (3-5 bullet points max per slide)
- Use consistent fonts (sans-serif, readable)
- Include code snippets with syntax highlighting
- Add icons/visual elements for interest
- Ensure dark mode compatibility

#### 2.2 Slide Checklist
- [ ] Title slide with topic
- [ ] Introduction/overview slide
- [ ] Architecture/diagram slide
- [ ] Step-by-step slides (numbered)
- [ ] Code highlight slides
- [ ] Demo/example slides
- [ ] Summary/conclusion slide
- [ ] Call-to-action slide

#### 2.3 Export Slides
- [ ] Export as high-resolution images (1920x1080 minimum)
- [ ] Or export as video (if using animations)
- [ ] Name files: `slide-01.png`, `slide-02.png`, etc.

---

### Phase 3: TTS Audio Generation

#### 3.1 Generate Narration
**Using Portfolio TTS Feature**:
1. Navigate to `/creator` page on portfolio
2. Expand Text-to-Speech card
3. For each slide:
   - Copy narration text from script
   - Select appropriate voice (recommend: `en-US-Neural2-F` or `en-US-Neural2-D`)
   - Generate audio
   - Download as MP3
   - Name file: `narration-01.mp3`, `narration-02.mp3`, etc.

#### 3.2 Audio Quality Check
- [ ] Listen to each audio file
- [ ] Check for pronunciation issues
- [ ] Verify pacing (not too fast/slow)
- [ ] Ensure consistent volume
- [ ] Re-generate if needed

#### 3.3 Audio Organization
- [ ] Create folder: `youtube-content/01-tts-setup/audio/`
- [ ] Store all narration files
- [ ] Keep naming consistent with slides

---

### Phase 4: Screen Recordings (If Needed)

#### 4.1 Plan Recordings
- [ ] Identify which slides need live demos
- [ ] Prepare demo environment
- [ ] Clear browser history/bookmarks
- [ ] Close unnecessary applications

#### 4.2 Record Demos
**Tools**:
- macOS: QuickTime Player, ScreenFlow, OBS Studio
- Windows: OBS Studio, Camtasia

**Recording Tips**:
- Use 1920x1080 resolution
- Record at 30fps minimum
- Show cursor movements clearly
- Speak clearly if doing voiceover (or use TTS)
- Keep recordings focused and concise

#### 4.3 Edit Recordings
- [ ] Trim unnecessary parts
- [ ] Add zoom-ins for code/details
- [ ] Add annotations if needed
- [ ] Export as MP4

---

### Phase 5: Video Assembly

#### 5.1 Import Assets
**Video Editor Options**:
- Free: DaVinci Resolve, OpenShot, Shotcut
- Paid: Final Cut Pro, Adobe Premiere, Camtasia

**Import**:
- [ ] All slide images/videos
- [ ] All TTS narration audio files
- [ ] Screen recordings (if any)
- [ ] Background music (optional)

#### 5.2 Timeline Assembly
1. **Place Slides**:
   - [ ] Add slides to video track
   - [ ] Set duration to match audio length
   - [ ] Add transitions between slides (0.5-1 second)

2. **Sync Audio**:
   - [ ] Place narration audio on audio track
   - [ ] Align with corresponding slide
   - [ ] Add 1-2 second pause between slides

3. **Add Screen Recordings**:
   - [ ] Insert demo recordings at appropriate points
   - [ ] Ensure smooth transitions

4. **Background Music** (Optional):
   - [ ] Add subtle background music
   - [ ] Lower volume (10-20% of narration)
   - [ ] Fade in/out at start/end

#### 5.3 Polish
- [ ] Add captions/subtitles (important for accessibility)
- [ ] Add chapter markers (for YouTube)
- [ ] Color correction (if needed)
- [ ] Audio leveling (ensure consistent volume)
- [ ] Final review

---

### Phase 6: Export & Upload

#### 6.1 Export Settings
**Recommended Settings**:
- Resolution: 1920x1080 (Full HD)
- Frame Rate: 30fps
- Format: MP4
- Codec: H.264
- Audio: AAC, 192kbps
- Bitrate: 8-12 Mbps

#### 6.2 Pre-Upload Checklist
- [ ] Video plays correctly
- [ ] Audio is clear and synced
- [ ] No technical glitches
- [ ] Captions are accurate
- [ ] Thumbnail created (1280x720)

#### 6.3 YouTube Upload
- [ ] Upload video
- [ ] Add title (from script)
- [ ] Add description (from script)
- [ ] Add tags (from script)
- [ ] Set thumbnail
- [ ] Add chapters (if applicable)
- [ ] Set visibility (Unlisted first, then Public after review)
- [ ] Add end screen/cards

---

## File Organization Structure

```
youtube-content/
├── README.md
├── PRODUCTION_WORKFLOW.md (this file)
├── 01-tts-setup-slides.md
├── 01-tts-setup/
│   ├── slides/
│   │   ├── slide-01.png
│   │   ├── slide-02.png
│   │   └── ...
│   ├── audio/
│   │   ├── narration-01.mp3
│   │   ├── narration-02.mp3
│   │   └── ...
│   ├── recordings/
│   │   └── demo-recording.mp4
│   └── final/
│       └── final-video.mp4
└── 02-next-topic-slides.md
```

---

## Quick Reference Checklist

### Before Starting
- [ ] Topic selected
- [ ] Script written
- [ ] Script reviewed

### During Production
- [ ] Slides created
- [ ] TTS audio generated
- [ ] Screen recordings done (if needed)
- [ ] Video assembled
- [ ] Captions added

### Before Upload
- [ ] Video exported
- [ ] Thumbnail created
- [ ] Description written
- [ ] Tags prepared
- [ ] Final review completed

---

## Tips for Success

1. **Consistency**: Use same voice, style, and format across videos
2. **Quality**: Don't rush - better to take time for quality
3. **Testing**: Test TTS audio before final assembly
4. **Backup**: Keep all source files organized
5. **Iteration**: First video might take longer - it gets faster
6. **Feedback**: Review first video before publishing more

---

## Time Estimates

- **Script Writing**: 1-2 hours
- **Slide Creation**: 2-3 hours
- **TTS Generation**: 30-60 minutes
- **Screen Recording**: 30-60 minutes (if needed)
- **Video Assembly**: 2-4 hours
- **Polish & Export**: 1 hour
- **Total**: 7-12 hours per video (first one may take longer)

---

## Future Improvements

- Create slide templates for faster production
- Build TTS batch generation tool
- Automate some video assembly steps
- Create thumbnail templates
- Build description/tag templates

---

## Notes

- This workflow is designed to be efficient and repeatable
- Adjust timings and steps based on experience
- Keep improving the process with each video
- Document any workflow improvements

