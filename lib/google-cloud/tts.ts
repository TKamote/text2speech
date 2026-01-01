import { TextToSpeechClient } from '@google-cloud/text-to-speech'

let client: TextToSpeechClient | null = null

/**
 * Initialize Google Cloud TTS client safely
 */
export function getTTSClient(): TextToSpeechClient | null {
  if (client) return client

  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  
  if (!credentialsPath) {
    console.warn('GOOGLE_APPLICATION_CREDENTIALS is not set. TTS features will not work.')
    return null
  }

  try {
    client = new TextToSpeechClient({
      keyFilename: credentialsPath,
    })
    return client
  } catch (error) {
    console.error('Google Cloud TTS client initialization error:', error)
    return null
  }
}

/**
 * List available voices
 */
export async function listVoices(languageCode?: string) {
  const ttsClient = getTTSClient()
  if (!ttsClient) return []
  
  const request = {
    languageCode: languageCode || 'en-US',
  }

  try {
    const [response] = await ttsClient.listVoices(request)
    return response.voices || []
  } catch (error) {
    console.error('Error listing voices:', error)
    return []
  }
}

/**
 * Generate speech from text
 */
export async function synthesizeSpeech(
  text: string,
  voiceName: string = 'en-US-Neural2-F',
  languageCode: string = 'en-US'
): Promise<Buffer | null> {
  const ttsClient = getTTSClient()
  if (!ttsClient) return null

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

  try {
    const [response] = await ttsClient.synthesizeSpeech(request)
    
    if (!response.audioContent) {
      throw new Error('No audio content returned from TTS API')
    }

    return Buffer.from(response.audioContent)
  } catch (error) {
    console.error('Error synthesizing speech:', error)
    return null
  }
}
