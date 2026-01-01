# Quick Start: Create Your First YouTube Video

This is a condensed guide to get you started immediately. For detailed instructions, see `PRODUCTION_WORKFLOW.md`.

---

## 🎯 Your First Video: TTS Setup

You're ready to create your first video! Here's the fastest path:

### Step 1: Create Slides (2-3 hours)

1. **Open the script**: `01-tts-setup-slides.md`
2. **Choose a tool**: Canva (easiest), PowerPoint, or Keynote
3. **For each slide** (13 total):
   - Create slide with the "Slide Text" content
   - Keep it minimal and visual
   - Use your portfolio colors (purple/indigo theme)
   - Export as PNG (1920x1080 resolution)

**Pro Tip**: Create a template slide first with your branding, then duplicate it.

### Step 2: Generate TTS Audio (30-60 minutes)

1. **Go to your portfolio**: Navigate to `/creator` page
2. **Expand TTS card**: Click on Text-to-Speech card
3. **For each slide**:
   - Copy the "TTS Narration" text from script
   - Paste into TTS text area
   - Select voice: `en-US-Neural2-F` (or `en-US-Neural2-D`)
   - Click "Generate Audio"
   - Click "Download"
   - Save as: `narration-01.mp3`, `narration-02.mp3`, etc.

**Pro Tip**: Generate all audio in one session, then organize files.

### Step 3: Record Demo (30 minutes, optional)

If you want to show the feature in action:
1. Open your portfolio in browser
2. Start screen recording (QuickTime on Mac, OBS Studio)
3. Navigate to `/creator` page
4. Show TTS feature working (enter text, generate, play)
5. Stop recording
6. Trim unnecessary parts

### Step 4: Assemble Video (2-3 hours)

1. **Open video editor**: DaVinci Resolve (free) or your preferred tool
2. **Import assets**:
   - All slide images
   - All TTS audio files
   - Demo recording (if any)
3. **Build timeline**:
   - Place slide 1 on video track
   - Place narration-01.mp3 on audio track
   - Align them
   - Set slide duration to match audio length
   - Repeat for all slides
   - Add 1-2 second transitions between slides
4. **Add demo** (if recorded):
   - Insert at appropriate slide (probably Slide 9)
   - Replace or overlay on that slide
5. **Polish**:
   - Add captions (important!)
   - Check audio levels
   - Review entire video
6. **Export**: MP4, 1920x1080, 30fps, H.264

### Step 5: Upload to YouTube (15 minutes)

1. **Create thumbnail**: 1280x720 image (can use one of your slides)
2. **Upload video**:
   - Title: "How I Built Text-to-Speech for My Portfolio | Next.js + Google Cloud TTS"
   - Description: Copy from `01-tts-setup-slides.md`
   - Tags: Add from script
   - Thumbnail: Upload your thumbnail
   - Visibility: Start with "Unlisted" to review first
3. **After review**: Change to "Public"

---

## ⏱️ Time Estimate

- Slides: 2-3 hours
- TTS Audio: 30-60 minutes
- Demo Recording: 30 minutes (optional)
- Video Assembly: 2-3 hours
- Upload: 15 minutes
- **Total: 5-7 hours** (first video may take longer)

---

## 🎨 Slide Design Quick Tips

- **Keep it simple**: 3-5 bullet points max per slide
- **Use icons**: Visual elements help
- **Code snippets**: Use syntax highlighting
- **Consistent style**: Same fonts, colors, layout
- **Readable**: Large enough text (at least 24pt)

---

## 🎤 TTS Tips

- **Same voice**: Use the same voice for entire video
- **Test first**: Generate one, listen, adjust if needed
- **Pace**: Not too fast, not too slow
- **Volume**: Consistent across all files

---

## 🎬 Video Editor Tips

- **Transitions**: Simple fade or slide (0.5-1 second)
- **Captions**: YouTube can auto-generate, but review them
- **Audio**: Keep narration at 100%, background music at 10-20%
- **Export**: Don't compress too much - quality matters

---

## ✅ Final Checklist

Before uploading:
- [ ] Video plays correctly
- [ ] Audio is clear and synced
- [ ] Captions are accurate
- [ ] Thumbnail looks good
- [ ] Description is complete
- [ ] Tags are added

---

## 🆘 Need Help?

- **Detailed workflow**: See `PRODUCTION_WORKFLOW.md`
- **Template for next video**: Use `VIDEO_TEMPLATE.md`
- **Script reference**: Check `01-tts-setup-script.md` for more details

---

## 🚀 Ready to Start?

1. Open `01-tts-setup-slides.md`
2. Start creating slides
3. Generate TTS audio using your portfolio
4. Assemble and upload!

Good luck with your first video! 🎉

