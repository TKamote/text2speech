import { NextResponse } from 'next/server';
import { getTTSClient } from '@/lib/google-cloud/tts';

export async function GET() {
  try {
    const client = getTTSClient();
    // Removed the languageCode filter to fetch ALL available languages (including fil-PH)
    const [result] = await client.listVoices({}); 
    
    // Sort voices by language first, then name
    const voices = result.voices?.sort((a, b) => {
      // Primary sort: Language (e.g., en-US, fil-PH)
      const langA = (a.languageCodes?.[0] || '');
      const langB = (b.languageCodes?.[0] || '');
      if (langA !== langB) return langA.localeCompare(langB);
      
      // Secondary sort: Name
      return (a.name || '').localeCompare(b.name || '');
    }) || [];

    return NextResponse.json({ voices });
  } catch (error: any) {
    console.error('Error fetching voices:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
