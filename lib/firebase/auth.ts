import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  User,
  UserCredential,
} from 'firebase/auth'
import { auth } from './config'

/**
 * Sign up a new user with email and password
 */
export async function signUp(email: string, password: string): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  
  // Send verification email
  if (userCredential.user) {
    await sendEmailVerification(userCredential.user)
  }
  
  return userCredential
}

/**
 * Sign in an existing user
 */
export async function signIn(email: string, password: string): Promise<UserCredential> {
  return await signInWithEmailAndPassword(auth, email, password)
}

/**
 * Sign out the current user
 */
export async function logOut(): Promise<void> {
  return await signOut(auth)
}

/**
 * Send email verification to the current user
 */
export async function resendVerificationEmail(user: User): Promise<void> {
  return await sendEmailVerification(user)
}

/**
 * Send password reset email
 */
export async function resetPassword(email: string): Promise<void> {
  return await sendPasswordResetEmail(auth, email)
}

/**
 * Check if user's email is verified
 */
export function isEmailVerified(user: User | null): boolean {
  return user?.emailVerified ?? false
}

