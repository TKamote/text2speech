import { NextRequest, NextResponse } from 'next/server'
import { synthesizeSpeech } from '@/lib/google-cloud/tts'

/**
 * API Endpoint: /api/tts/generate
 * Matches your Slide 4: API Endpoint Code Structure
 */
export async function POST(req: NextRequest) {
  try {
    // 1. Validate input (text, voice)
    const { text, voice } = await req.json()

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    // 2. Call Google TTS API
    const audioBuffer = await synthesizeSpeech(text, voice)

    if (!audioBuffer) {
      return NextResponse.json({ error: 'Failed to generate audio' }, { status: 500 })
    }

    // 3. Return MP3 audio file
    return new NextResponse(new Uint8Array(audioBuffer), {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="speech.mp3"',
      },
    })
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

