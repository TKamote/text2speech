'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { Play, Download, Volume2, Loader2, DollarSign } from 'lucide-react'

// Define the Voice interface based on Google's response
interface Voice {
  name: string;
  ssmlGender: string;
  languageCodes: string[];
}

export default function TTSPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  const [text, setText] = useState('')
  const [voice, setVoice] = useState('en-US-Journey-F') 
  const [voiceOptions, setVoiceOptions] = useState<Voice[]>([])
  const [isLoadingVoices, setIsLoadingVoices] = useState(true)
  const [isGenerating, setIsGenerating] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  // Fetch available voices on mount
  useEffect(() => {
    async function fetchVoices() {
      try {
        const response = await fetch('/api/tts/voices')
        if (response.ok) {
          const data = await response.json()
          
          // SUPER STRICT FILTER: 
          // 1. Must satisfy the API language code check (en-US)
          // 2. AND the voice name MUST start with "en-US-" 
          //    (This eliminates Gemini voices like "Leda", "Puck", etc.)
          const filteredVoices = (data.voices || []).filter((v: Voice) => 
            v.languageCodes[0] === 'en-US' && v.name.startsWith('en-US-')
          )
          setVoiceOptions(filteredVoices)
        }
      } catch (error) {
        console.error('Failed to load voices:', error)
      } finally {
        setIsLoadingVoices(false)
      }
    }
    fetchVoices()
  }, [])

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert('Please enter some text')
      return
    }

    setIsGenerating(true)
    setAudioUrl(null)

    // Find the full voice object to get its correct language code
    const selectedVoice = voiceOptions.find(v => v.name === voice)
    const languageCode = selectedVoice ? selectedVoice.languageCodes[0] : 'en-US'

    try {
      const response = await fetch('/api/tts/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text, 
          voice,
          languageCode
        }),
      })

      if (!response.ok) throw new Error('Failed to generate audio')

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setAudioUrl(url)
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to generate audio. Please check your connection.')
    } finally {
      setIsGenerating(false)
    }
  }

  // Updated Pricing Labels
  const getVoiceLabel = (name: string) => {
    if (name.includes('Studio') || name.includes('Journey') || name.includes('Polyglot')) 
      return '💎 Tier 1 (Best Quality - $$$)'
    
    if (name.includes('Neural2') || name.includes('Wavenet')) 
      return '✨ Tier 2 (Premium - $$)'
    
    return '🤖 Tier 3 (Standard - $)'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Text to Speech Service
            </h1>
          </div>
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
            Back to Home
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Convert your text into natural-sounding speech using AI-powered technology.
          </p>

          <div className="space-y-6">
            {/* Text input area */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Enter your text
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                placeholder="Type your English text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="mt-2 text-xs text-gray-400 text-right">
                {text.length} characters
              </div>
            </div>

            {/* Voice selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Select Voice {isLoadingVoices && '(Loading...)'}
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
                disabled={isLoadingVoices}
              >
                {/* Default options as fallback or header */}
                <option value="en-US-Journey-F">Default (US Female Journey)</option>
                
                {voiceOptions.map((v) => (
                  <option key={v.name} value={v.name}>
                    {v.name} ({getVoiceLabel(v.name)}) - {v.ssmlGender}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-xs text-gray-500">
                <span className="font-bold">Pricing Guide:</span> Tier 1 (Studio) is 10x more expensive than Tier 2/3.
              </p>
            </div>

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !text.trim()}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center space-x-2 transition-all ${
                isGenerating || !text.trim()
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'
              }`}
            >
              {isGenerating ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
              <span>{isGenerating ? 'Generating Audio...' : 'Generate Audio'}</span>
            </button>

            {/* Audio playback and download */}
            {audioUrl && (
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700 mt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center justify-between p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl">
                  <audio ref={audioRef} src={audioUrl} controls className="w-full h-10" />
                  <a
                    href={audioUrl}
                    download="speech.mp3"
                    className="ml-4 p-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                    title="Download MP3"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
          Powered by Google Cloud Text-to-Speech
        </p>
      </div>
    </div>
  )
}
