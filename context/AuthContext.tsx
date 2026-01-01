'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/lib/firebase/config'

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  refreshUser: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const refreshUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.reload()
      setUser({ ...auth.currentUser })
    }
  }

  useEffect(() => {
    if (!auth) {
      setError("Firebase Auth not initialized. Please check your .env.local configuration.")
      setLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(
      auth, 
      (user) => {
        setUser(user)
        setLoading(false)
      },
      (err) => {
        console.error("Auth state change error:", err)
        setError(err.message)
        setLoading(false)
      }
    )

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, error, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}
