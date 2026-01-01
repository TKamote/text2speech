import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLVzh1_l_r5V13uaglH6NgL1tAT1ZdNac",
  authDomain: "text-to-speech-app-2026-8f083.firebaseapp.com",
  projectId: "text-to-speech-app-2026-8f083",
  storageBucket: "text-to-speech-app-2026-8f083.firebasestorage.app",
  messagingSenderId: "596509392612",
  appId: "1:596509392612:web:7249232b800a812c12f6f1",
  measurementId: "G-NDFT06RF35"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

// Initialize Analytics (Safe for SSR)
if (typeof window !== 'undefined') {
  isSupported().then((yes) => yes && getAnalytics(app));
}

export { auth, db }
export default app
