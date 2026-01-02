import { TextToSpeechClient } from '@google-cloud/text-to-speech';

// Helper to initialize the client safely
export const getTTSClient = () => {
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
  return new TextToSpeechClient();
};

export const synthesizeSpeech = async (
  text: string, 
  voiceName: string = 'en-US-Journey-F',
  languageCode: string = 'en-US'
) => {
  const client = getTTSClient();

  const request = {
    input: { text },
    voice: { 
      languageCode: languageCode, 
      name: voiceName 
    },
    audioConfig: { audioEncoding: 'MP3' as const },
  };

  const [response] = await client.synthesizeSpeech(request);
  return response.audioContent;
};
