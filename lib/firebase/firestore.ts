import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from './config'

export interface UserData {
  uid: string
  email: string
  emailVerified: boolean
  displayName?: string
  subscriptionTier: 'free' | 'basic' | 'pro'
  wordsUsed: number
  wordsLimit: number
  usageResetDate: Timestamp
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  subscriptionStatus?: 'active' | 'canceled' | 'past_due'
  createdAt: Timestamp
  updatedAt: Timestamp
}

/**
 * Create user document in Firestore on signup
 */
export async function createUserDocument(
  uid: string,
  email: string,
  emailVerified: boolean
): Promise<void> {
  const nextMonth = new Date()
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  nextMonth.setDate(1) // First day of next month
  nextMonth.setHours(0, 0, 0, 0)

  const userData: Omit<UserData, 'uid'> = {
    email,
    emailVerified,
    subscriptionTier: 'free',
    wordsUsed: 0,
    wordsLimit: 1000,
    usageResetDate: Timestamp.fromDate(nextMonth),
    createdAt: serverTimestamp() as Timestamp,
    updatedAt: serverTimestamp() as Timestamp,
  }

  await setDoc(doc(db, 'users', uid), userData)
}

/**
 * Get user document from Firestore
 */
export async function getUserData(uid: string): Promise<UserData | null> {
  const userDoc = await getDoc(doc(db, 'users', uid))
  
  if (!userDoc.exists()) {
    return null
  }

  return {
    uid: userDoc.id,
    ...userDoc.data(),
  } as UserData
}

/**
 * Update user document
 */
export async function updateUserData(
  uid: string,
  data: Partial<UserData>
): Promise<void> {
  await updateDoc(doc(db, 'users', uid), {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

/**
 * Update user's email verification status
 */
export async function updateEmailVerificationStatus(
  uid: string,
  emailVerified: boolean
): Promise<void> {
  await updateUserData(uid, { emailVerified })
}

/**
 * Update usage count
 */
export async function updateUsage(uid: string, wordsUsed: number): Promise<void> {
  await updateUserData(uid, { wordsUsed })
}

/**
 * Reset usage for new month
 */
export async function resetUsage(uid: string): Promise<void> {
  const nextMonth = new Date()
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  nextMonth.setDate(1)
  nextMonth.setHours(0, 0, 0, 0)

  await updateUserData(uid, {
    wordsUsed: 0,
    usageResetDate: Timestamp.fromDate(nextMonth),
  })
}

/**
 * Add usage history entry (optional - for analytics)
 */
export async function addUsageHistory(
  userId: string,
  wordsCount: number,
  textLength: number,
  voiceUsed?: string
): Promise<void> {
  await addDoc(collection(db, 'usage_history'), {
    userId,
    wordsCount,
    textLength,
    voiceUsed,
    timestamp: serverTimestamp(),
  })
}

