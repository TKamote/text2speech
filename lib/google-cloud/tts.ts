import { TextToSpeechClient } from '@google-cloud/text-to-speech'
import { promises as fs } from 'fs'

let client: TextToSpeechClient | null = null

/**
 * Initialize Google Cloud TTS client
 */
export function getTTSClient(): TextToSpeechClient {
  if (!client) {
    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    
    if (!credentialsPath) {
      throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set')
    }

    client = new TextToSpeechClient({
      keyFilename: credentialsPath,
    })
  }

  return client
}

/**
 * List available voices
 */
export async function listVoices(languageCode?: string) {
  const ttsClient = getTTSClient()
  
  const request = {
    languageCode: languageCode || 'en-US',
  }

  const [response] = await ttsClient.listVoices(request)
  return response.voices || []
}

/**
 * Generate speech from text
 */
export async function synthesizeSpeech(
  text: string,
  voiceName: string = 'en-US-Neural2-F',
  languageCode: string = 'en-US'
): Promise<Buffer> {
  const ttsClient = getTTSClient()

  const request = {
    input: { text },
    voice: {
      name: voiceName,
      languageCode,
    },
    audioConfig: {
      audioEncoding: 'MP3' as const,
      sampleRateHertz: 24000,
    },
  }

  const [response] = await ttsClient.synthesizeSpeech(request)
  
  if (!response.audioContent) {
    throw new Error('No audio content returned from TTS API')
  }

  return Buffer.from(response.audioContent)
}

