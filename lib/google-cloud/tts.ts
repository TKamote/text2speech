import { TextToSpeechClient } from '@google-cloud/text-to-speech';

// Helper to initialize the client safely
export const getTTSClient = () => {
  // 1. Try to read from the JSON string environment variable (Vercel Production)
  if (process.env.GOOGLE_CLOUD_CREDENTIALS_JSON) {
    try {
      const credentials = JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS_JSON);
      return new TextToSpeechClient({
        credentials,
        projectId: credentials.project_id,
      });
    } catch (error) {
      console.error('Failed to parse GOOGLE_CLOUD_CREDENTIALS_JSON:', error);
    }
  }

  // 2. Fallback to standard file path (Local Development)
  // This expects GOOGLE_APPLICATION_CREDENTIALS to be set in .env or system
  return new TextToSpeechClient();
};

export const synthesizeSpeech = async (text: string, voiceName: string = 'en-US-Journey-F') => {
  const client = getTTSClient();

  const request = {
    input: { text },
    voice: { languageCode: 'en-US', name: voiceName },
    audioConfig: { audioEncoding: 'MP3' as const },
  };

  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
};

