'use client'

import { useAuth } from '@/context/AuthContext'

export default function Home() {
  const { error } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {error && (
        <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-md text-center">
          <p className="font-bold">Configuration Warning</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <div className="max-w-md w-full mx-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Text to Speech
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Transform your text into natural-sounding speech
        </p>
        <div className="space-y-4">
          <a
            href="/login"
            className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Login
          </a>
          <a
            href="/signup"
            className="block w-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 py-3 px-6 rounded-lg font-semibold border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
          >
            Sign Up
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Authentication pages coming soon...
        </p>
      </div>
    </div>
  )
}

