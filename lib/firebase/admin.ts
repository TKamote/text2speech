import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'
import { getAuth, Auth } from 'firebase-admin/auth'

let adminApp: App
let adminDb: Firestore
let adminAuth: Auth

/**
 * Initialize Firebase Admin SDK
 */
export function getAdminApp(): App {
  if (!getApps().length) {
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')
    
    if (!process.env.FIREBASE_ADMIN_PROJECT_ID || !process.env.FIREBASE_ADMIN_CLIENT_EMAIL || !privateKey) {
      throw new Error('Firebase Admin SDK credentials are not set in environment variables')
    }

    adminApp = initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    })
  } else {
    adminApp = getApps()[0]
  }

  return adminApp
}

/**
 * Get Firestore Admin instance
 */
export function getAdminDb(): Firestore {
  if (!adminDb) {
    getAdminApp()
    adminDb = getFirestore()
  }
  return adminDb
}

/**
 * Get Auth Admin instance
 */
export function getAdminAuth(): Auth {
  if (!adminAuth) {
    getAdminApp()
    adminAuth = getAuth()
  }
  return adminAuth
}

