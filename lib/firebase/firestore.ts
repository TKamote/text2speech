import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { db } from './config'

/**
 * Create or update a user document in Firestore
 */
export async function createUserDocument(uid: string, email: string) {
  if (!db) return // Guard for build time
  
  const userData = {
    uid,
    email,
    subscriptionTier: 'free',
    wordsUsed: 0,
    wordsLimit: 1000,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }

  await setDoc(doc(db, 'users', uid), userData)
}

/**
 * Get user data from Firestore
 */
export async function getUserData(uid: string) {
  if (!db) return null
  const userDoc = await getDoc(doc(db, 'users', uid))
  return userDoc.exists() ? userDoc.data() : null
}
