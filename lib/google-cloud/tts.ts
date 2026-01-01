import { TextToSpeechClient } from '@google-cloud/text-to-speech'

let client: TextToSpeechClient | null = null

/**
 * Initialize Google Cloud TTS client safely for Vercel
 */
export function getTTSClient(): TextToSpeechClient | null {
  if (client) return client

  try {
    // Check if we have the credentials as a JSON string (for Vercel)
    const credentialsJson = process.env.GOOGLE_CLOUD_CREDENTIALS_JSON
    
    if (credentialsJson) {
      const credentials = JSON.parse(credentialsJson)
      client = new TextToSpeechClient({ credentials })
      return client
    }

    // Fallback to file path (for local if it ever starts working)
    const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    if (credentialsPath) {
      client = new TextToSpeechClient()
      return client
    }

    console.warn('Google Cloud credentials not found in environment variables.')
    return null
  } catch (error) {
    console.error('TTS Client Init Error:', error)
    return null
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
    voice: { name: voiceName, languageCode },
    audioConfig: { audioEncoding: 'MP3' as const },
  }

  try {
    const [response] = await ttsClient.synthesizeSpeech(request)
    return response.audioContent ? Buffer.from(response.audioContent) : null
  } catch (error) {
    console.error('Synthesis Error:', error)
    return null
  }
}
