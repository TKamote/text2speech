# Text-to-Speech Education Guide

## Understanding Audio Sample Rates (Hz)

### What is Hz (Hertz)?
**Hertz (Hz)** measures how many audio samples are captured per second. Think of it like frames per second in video - more samples = better quality.

### Common Sample Rates:

#### 🎯 **24,000 Hz (24 kHz)** - **Recommended for TTS**
- **Best for**: Text-to-Speech applications
- **Quality**: High quality, clear speech
- **File Size**: Balanced (not too large)
- **Why it's perfect**: Captures all frequencies needed for natural-sounding speech
- **Used by**: Google Cloud TTS, most modern TTS services

#### 🎵 **44,100 Hz (44.1 kHz)** - **CD Quality**
- **Best for**: Music, audio CDs
- **Quality**: Very high quality
- **File Size**: Larger files
- **Why**: Captures full range of human hearing (up to ~22 kHz)
- **Used by**: Audio CDs, music production

#### 🎬 **48,000 Hz (48 kHz)** - **Professional Audio**
- **Best for**: Video production, broadcasting, professional audio
- **Quality**: Highest quality
- **File Size**: Largest files
- **Why**: Standard for video and professional work
- **Used by**: Film, TV, professional recording studios

#### 📱 **16,000 Hz (16 kHz)** - **Standard Quality**
- **Best for**: Phone calls, basic audio
- **Quality**: Good enough for speech
- **File Size**: Smaller files
- **Why**: Covers most speech frequencies
- **Used by**: Phone systems, basic voice applications

### For Text-to-Speech:
**24,000 Hz is the sweet spot** because:
- ✅ Captures all speech frequencies clearly
- ✅ Natural-sounding voice
- ✅ Reasonable file size
- ✅ Perfect for web applications
- ✅ No noticeable quality loss compared to higher rates

**Higher isn't always better** for TTS:
- 48kHz would make files 2x larger with no audible improvement
- 24kHz is specifically optimized for speech synthesis

---

## Language and Country Support

### How Many Countries/Languages?
Google Cloud Text-to-Speech supports:
- **50+ languages** with regional variants
- **300+ voices** total
- **Multiple accents** per language (e.g., US English, UK English, Australian English)

### Language Code Format
Languages use **ISO 639-1** codes:
- Format: `language-COUNTRY` (e.g., `en-US`, `es-MX`)
- `en` = English language code
- `US` = United States country code
- Together = English (United States)

### Examples:
- `en-US` = English (United States)
- `en-GB` = English (United Kingdom) 
- `en-AU` = English (Australia)
- `es-ES` = Spanish (Spain)
- `es-MX` = Spanish (Mexico)
- `fr-FR` = French (France)
- `fr-CA` = French (Canada)

### Major Language Families Supported:
1. **European Languages**: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Polish, Turkish, Swedish, Danish, Norwegian, Finnish, Czech, Greek, and more
2. **Asian Languages**: Chinese (Simplified & Traditional), Japanese, Korean, Hindi, Thai, Vietnamese, Indonesian, Malay
3. **Middle Eastern**: Arabic, Hebrew
4. **Other**: And many more regional variants

### Voice Types Available:

#### 🎯 **Chirp3 HD** - **Premium High-Definition Voices**
- **What are they?**: Google's latest generation of ultra-high-quality voices
- **Quality**: Highest quality available, most natural-sounding
- **Named after**: Mythological figures and celestial bodies (Aoede, Charon, Fenrir, Kore, etc.)
- **Best for**: Professional applications, content creation, high-quality audio
- **Available in**: 20+ languages including English, Spanish, French, German, Japanese, Korean, Hindi, and more
- **Sample Rate**: Typically 24kHz+ (high quality)
- **Example names**: 
  - `en-US-Chirp3-HD-Aoede` = English (US) Chirp3 HD voice named "Aoede"
  - `es-ES-Chirp3-HD-Charon` = Spanish (Spain) Chirp3 HD voice named "Charon"

#### 🧠 **Neural2** - **Advanced Neural Voices**
- **Quality**: Very high quality, natural-sounding
- **Best for**: Most applications, great balance of quality and performance
- **Available in**: 50+ languages
- **Sample Rate**: 24kHz (high quality)

#### 🌊 **WaveNet** - **Neural Voices**
- **Quality**: High quality neural voices
- **Best for**: Natural-sounding speech
- **Available in**: Multiple languages
- **Sample Rate**: 24kHz (high quality)

#### 📻 **Standard** - **Traditional Voices**
- **Quality**: Good quality, smaller files
- **Best for**: Basic applications, smaller file sizes
- **Available in**: Many languages
- **Sample Rate**: Lower (16-22kHz)

#### 🎙️ **Studio** - **Professional Voices**
- **Quality**: Professional broadcast quality
- **Best for**: Professional content, broadcasting
- **Available in**: Select languages
- **Sample Rate**: High (24kHz+)

### Gender Options:
- **FEMALE**: Female voices
- **MALE**: Male voices  
- **NEUTRAL**: Gender-neutral voices (some languages)

---

## File Format: MP3

### Why MP3?
- ✅ **Universal compatibility** - works everywhere
- ✅ **Good compression** - smaller file sizes
- ✅ **Good quality** - perfect for speech
- ✅ **Web-friendly** - plays in all browsers
- ✅ **Standard format** - widely supported

### MP3 Specifications:
- **Format**: MPEG Audio Layer 3
- **Extension**: `.mp3`
- **Content-Type**: `audio/mpeg`
- **Quality**: Excellent for speech (24kHz sample rate)
- **File Size**: Efficient compression

---

## Summary

### For Your TTS Feature:
1. **Sample Rate**: 24,000 Hz is optimal (high quality, reasonable size)
2. **Format**: MP3 (universal, web-friendly)
3. **Languages**: 50+ languages with 300+ voices
4. **Display**: Now shows full country/language names instead of codes

### Quality Guide:
- **24,000Hz+** = High Quality ⭐⭐⭐
- **16,000-23,999Hz** = Standard ⭐⭐
- **Below 16,000Hz** = Basic ⭐

For text-to-speech, **24kHz is the industry standard** and provides the best balance of quality and file size!

