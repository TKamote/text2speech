import { NextRequest, NextResponse } from 'next/server';
import { synthesizeSpeech } from '@/lib/google-cloud/tts';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, voice, languageCode, speakingRate } = body;

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // Call Google Cloud TTS with all parameters
    const audioBuffer = await synthesizeSpeech(
      text, 
      voice, 
      languageCode,
      speakingRate || 1.0 // Default to 1.0 if not provided
    );

    if (!audioBuffer) {
      throw new Error('No audio content received');
    }

    // Return the audio as a response
    const audioData = new Uint8Array(audioBuffer as Buffer);

    return new NextResponse(audioData, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'attachment; filename="speech.mp3"',
      },
    });

  } catch (error: any) {
    console.error('TTS Generation Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
