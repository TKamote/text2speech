import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'
import { getAuth, Auth } from 'firebase-admin/auth'

let adminApp: App | undefined
let adminDb: Firestore | undefined
let adminAuth: Auth | undefined

/**
 * Initialize Firebase Admin SDK safely
 */
export function getAdminApp(): App | undefined {
  if (adminApp) return adminApp

  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    console.warn('Firebase Admin SDK credentials are not set. Some server-side features may not work.')
    return undefined
  }

  try {
    if (!getApps().length) {
      adminApp = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      })
    } else {
      adminApp = getApps()[0]
    }
    return adminApp
  } catch (error) {
    console.error('Firebase Admin initialization error:', error)
    return undefined
  }
}

/**
 * Get Firestore Admin instance
 */
export function getAdminDb(): Firestore | undefined {
  if (adminDb) return adminDb
  const app = getAdminApp()
  if (app) {
    adminDb = getFirestore(app)
  }
  return adminDb
}

/**
 * Get Auth Admin instance
 */
export function getAdminAuth(): Auth | undefined {
  if (adminAuth) return adminAuth
  const app = getAdminApp()
  if (app) {
    adminAuth = getAuth(app)
  }
  return adminAuth
}
