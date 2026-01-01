'use client'

import { useAuth } from '@/context/AuthContext'
import { logOut } from '@/lib/firebase/auth'
import Link from 'next/link'

export default function Home() {
  const { user, loading, error, refreshUser } = useAuth()

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleRefresh = async () => {
    try {
      await refreshUser()
    } catch (error) {
      console.error('Refresh error:', error)
    }
  }
// ... (rest of the code remains the same but using handleRefresh)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    )
  }

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

        {user ? (
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-indigo-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium italic">Welcome back,</p>
              <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{user.email}</p>
              
              {!user.emailVerified && (
                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg">
                  <p className="text-sm text-amber-700 dark:text-amber-400 font-medium mb-3">
                    ⚠️ Please verify your email to enable all features.
                  </p>
                  <button
                    onClick={handleRefresh}
                    className="text-xs bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700 text-amber-800 dark:text-amber-200 py-1 px-3 rounded transition-colors font-bold uppercase tracking-wider"
                  >
                    I've verified my email
                  </button>
                </div>
              )}

              <div className="space-y-3">
                <Link
                  href="/tts"
                  className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Start Creating
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-2 px-6 rounded-lg font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Link
              href="/login"
              className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block w-full bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 py-3 px-6 rounded-lg font-semibold border-2 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        )}
        
        <p className="mt-12 text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
          TTS App v1.0
        </p>
      </div>
    </div>
  )
}

