'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function TTSPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            TTS Workspace
          </h1>
          <Link 
            href="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Back to Home
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="py-12">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Phase 3: Google Cloud Integration
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              You are officially logged in! This is where the Text-to-Speech magic will happen. 
              Our next step is to connect this page to the Google Cloud TTS API.
            </p>
            <div className="flex justify-center space-x-4 text-sm font-bold text-indigo-600 dark:text-indigo-400">
              <span className="bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                ✅ Authentication
              </span>
              <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-400">
                ⏳ Google Cloud TTS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

