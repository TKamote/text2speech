# Actual Production Workflow - TTS Video

**Documenting the real workflow used to create the first YouTube video**

## 🎯 Project Goal
Create a YouTube video about building the TTS feature for the portfolio website.

---

## 🛠️ Tools & Services Used (All Free!)

### Primary Tools
- **Canva (Free Tier)**: For slide creation and design
- **Google Drawings (Free)**: For text-to-image conversion and code snippets
- **Portfolio TTS Feature**: For generating narration audio
- **Video Editor**: TBD (likely free option like DaVinci Resolve)

### Why This Stack?
- ✅ **100% Free** - No subscriptions needed
- ✅ **Accessible** - Web-based, no installation
- ✅ **Effective** - Professional results without cost
- ✅ **Google Drawings = Secret Sauce** - Solves text customization limitations in free Canva

---

## 📋 Workflow Decisions & Process

### Phase 1: Slide Creation

#### Tool Strategy
- **Canva (Free)**: Main slide design and layout
  - Limitation: Free tier restricts text customization
  - Solution: Use Google Drawings for text-heavy elements
  
- **Google Drawings**: Text-to-image conversion
  - Background color: `#1F2937` (matches website dark theme)
  - Use for: Code snippets, terminal commands, text blocks
  - Export as PNG, then import to Canva

#### Slide Template Strategy
- **Slide 1**: Title slide (custom design)
- **Slide 2**: Feature showcase (screenshot + list layout)
- **Slide 3**: Architecture diagram (dark box container)
- **Slides 4-13**: Use Slide 3 as template (dark box for code/commands)

#### Design Decisions
- **Background**: Gradient (purple theme matching portfolio)
- **Text Color**: White/light for readability
- **Container**: Dark gray box (`#1F2937`) for code/diagrams
- **Title Size**: 54pt (tested and approved)
- **Consistency**: Same color scheme throughout

---

## 📝 Slide-by-Slide Progress

### ✅ Slide 1: Title Slide
**Status**: Complete
**Design**: 
- Title: "How I Built Text-to-Speech for My Portfolio"
- Subtitle: "Quick Overview"
- Tech tags: Next.js, Google Cloud TTS, React
- Background: Purple gradient
- **Versions**: Landscape (main video) + Portrait (Shorts/Reels)

**Decisions Made**:
- Removed "PROJECT SHOWCASE" label
- Added "Quick Overview" subtitle
- Created both landscape and portrait versions

---

### ✅ Slide 2: What We're Building
**Status**: Complete
**Design**:
- Left: Screenshot of TTS feature
- Right: Feature list with checkmarks
- Sample text: "Hello! This text-to-speech feature uses Google Cloud's neural voices to generate high-quality audio from any text input. You can convert written words into natural-sounding speech with multiple language options."

**Decisions Made**:
- Split layout (screenshot + list)
- White text for readability
- Title size: 54pt
- Improved spacing between feature items
- Screenshot with rounded frame

---

### ✅ Slide 3: Architecture Overview
**Status**: Complete
**Design**:
- Dark gray box (`#1F2937`) containing flowchart
- Flow: Frontend (React) → Next.js API Route → Google Cloud TTS → MP3 Audio Response
- White text on dark background

**Decisions Made**:
- Contained diagram in rounded dark box
- Simple vertical flow with arrows
- Used as template for code/command slides

---

### ✅ Slide 4: Step 1 - Install Package
**Status**: Complete
**Template**: Slide 3 (dark box container)
**Visual**: Real VS Code terminal screenshot
**Content**: Terminal command `npm install @google-cloud/text-to-speech`

**Final Decision**: Use real terminal screenshot from VS Code
**Rationale**: Authentic, matches dark theme, shows real command

---

### 🔄 Slide 5: Step 2 - Google Cloud Setup Overview
**Status**: In Progress
**Template**: Slide 3 (dark box container)
**Visual**: Google Cloud Console logo/icon
**Content**: Overview of 4 steps needed

**Note**: This slide was split from original Slide 5 for better clarity

---

### ⏳ Slide 6: Step 2a - Create Project & Enable API
**Status**: Pending
**Template**: Slide 3 (dark box container)
**Visual**: Google Cloud Console screenshots
**Content**: Steps 1-3 of Google Cloud setup

---

### ⏳ Slide 7: Step 2b - Create Service Account
**Status**: Pending
**Template**: Slide 3 (dark box container)
**Visual**: Google Cloud Console - Service Accounts page
**Content**: Service account creation steps

---

### ⏳ Slide 8: Step 2c - Download Credentials
**Status**: Pending
**Template**: Slide 3 (dark box container)
**Visual**: Google Cloud Console - Download key
**Content**: Credential download steps

---

### ⏳ Slide 9: Step 3 - API Route Overview
**Status**: Pending
**Template**: Slide 3 (dark box container)
**Visual**: File structure diagram
**Content**: API route overview and responsibilities

**Note**: This slide was split from original Slide 6 for better clarity

---

### ⏳ Slide 10: Step 3a - API Route Code Structure
**Status**: Pending
**Template**: Slide 3 (dark box container)
**Visual**: Code snippet showing key parts
**Content**: Key code components breakdown

---

### ⏳ Remaining Slides (11-17)
**Status**: Pending
**Template**: Slide 3 (dark box for code/commands)
**Strategy**: Duplicate and modify template for each slide

**Updated Total**: 17 slides (was 13, split complex slides for clarity)

---

## 🎨 Design System

### Colors
- **Background Gradient**: Purple (light to dark)
- **Container Background**: `#1F2937` (dark gray)
- **Text Color**: White (#FFFFFF)
- **Accent**: Purple (#9333EA or similar)

### Typography
- **Title**: 54pt, Bold, Light purple/white
- **Body**: 28-32pt, Regular, White
- **Code**: Monospace, White

### Layout Patterns
- **Title Slide**: Centered, large title
- **Feature Slides**: Split layout or centered content
- **Code/Command Slides**: Dark box container
- **Consistent**: Same gradient background throughout

---

## 🔑 Key Learnings & Workarounds

### Canva Free Tier Limitations
- **Problem**: Text customization restricted
- **Solution**: Google Drawings for text-to-image
- **Workflow**: Create text in Google Drawings → Export PNG → Import to Canva

### Google Drawings Workflow
1. Set background: `#1F2937`
2. Add text (white, appropriate font)
3. Export as PNG (high resolution)
4. Import to Canva slide
5. Position and resize

### Slide Organization
- **Method**: Add pages in Canva (not separate files)
- **Benefit**: All slides in one file, easy to maintain consistency
- **Process**: Duplicate template slide, modify content

---

## 📊 Progress Tracking

### Slides Status
- [x] Slide 1: Title Slide
- [x] Slide 2: What We're Building
- [x] Slide 3: Architecture Overview
- [x] Slide 4: Step 1 - Install Package
- [ ] Slide 5: Step 2 - Google Cloud Setup Overview
- [ ] Slide 6: Step 2a - Create Project & Enable API
- [ ] Slide 7: Step 2b - Create Service Account
- [ ] Slide 8: Step 2c - Download Credentials
- [ ] Slide 9: Step 3 - API Route Overview
- [ ] Slide 10: Step 3a - API Route Code Structure
- [ ] Slide 11: Step 4 - React Component
- [ ] Slide 12: Key Features
- [ ] Slide 13: Live Demo
- [ ] Slide 14: Cost & Considerations
- [ ] Slide 15: Best Practices
- [ ] Slide 16: What You Learned
- [ ] Slide 17: Call to Action

**Total Slides**: 17 (split from original 13 for better clarity)

### Next Steps
1. Complete Slide 4 (decide on visual)
2. Continue with remaining slides
3. Generate TTS audio for all slides
4. Assemble video
5. Upload to YouTube

---

## 💡 Secret Sauce: Google Drawings

### Why It Works
- ✅ **100% Free** - No limitations
- ✅ **Full Text Control** - Customize fonts, sizes, colors freely
- ✅ **Easy Export** - PNG at any resolution
- ✅ **Simple Workflow** - Quick text-to-image conversion
- ✅ **Consistent Background** - Use `#1F2937` for all code/command images

### Use Cases
- Code snippets
- Terminal commands
- Text blocks that need custom styling
- Any text that Canva free tier restricts

### Workflow
1. Open Google Drawings
2. Set page size: 1920x1080 (or custom)
3. Set background: `#1F2937`
4. Add text (white, monospace for code)
5. Export: File → Download → PNG
6. Import to Canva

---

## 📝 Notes & Decisions Log

### 2024-12-28
- **Decision**: Use Slide 3 as template for code/command slides
- **Reason**: Dark box container works well for code/terminal content
- **Background Color**: `#1F2937` for consistency with website

### Slide 4 Visual Decision
- **Options**: Terminal screenshot OR Google Drawings code image
- **Final Decision**: Real VS Code terminal screenshot
- **Rationale**: Authentic, matches dark theme, shows real command

### Slide 5 & 6 Split Decision
- **Problem**: Original Slide 5 (Google Cloud Setup) had 4 steps - too complex
- **Problem**: Original Slide 6 (API Route) needed more detail
- **Solution**: Split into multiple slides for clarity
- **Result**: 
  - Slide 5: Overview
  - Slide 6: Create Project & Enable API
  - Slide 7: Create Service Account
  - Slide 8: Download Credentials
  - Slide 9: API Route Overview
  - Slide 10: API Route Code Structure
- **Total Slides**: Increased from 13 to 17
- **Benefit**: Each step is clearer and easier to follow

### 🎯 Content Strategy Decision: Standalone Google Cloud Setup Video
- **Decision**: Google Cloud Setup (Slides 5-8) will be a **standalone video**
- **Reason**: More detailed, comprehensive tutorial that's really useful
- **Strategy**: 
  - Create detailed Google Cloud setup video first
  - Upload it before the main TTS video
  - Main TTS video can reference it: "If you need help with Google Cloud setup, check out my detailed tutorial"
- **Benefit**: 
  - More focused content
  - Better for SEO (specific topic)
  - Can be longer and more detailed
  - Useful standalone resource
- **Status**: Will create separate slide script for Google Cloud setup video

---

## 🎯 Final Workflow Summary

1. **Design Slides**: Canva (free tier)
2. **Text-to-Image**: Google Drawings (free)
3. **Generate Audio**: Portfolio TTS feature (free)
4. **Edit Video**: Free video editor (TBD)
5. **Upload**: YouTube (free)

**Total Cost**: $0.00 💰

---

## 📚 Future Content Ideas

This workflow itself could be content:
- "How to Create Professional Videos for FREE"
- "Google Drawings: The Secret to Free Video Production"
- "Building YouTube Content Without Subscriptions"
- "Free Tools for Content Creators"

---

*This document will be updated as decisions are made and progress continues.*

