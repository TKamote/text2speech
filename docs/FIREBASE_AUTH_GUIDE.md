# Firebase Email Verification & Authentication Flow

This guide explains how to implement a secure "Email Verification Required" workflow in a Next.js + Firebase application.

## 1. The Strategy: "Lazy Lock"
Instead of preventing the user from creating an account, we allow them to sign up but **block specific features** (like the TTS generation) until their `emailVerified` flag is `true`.

## 2. Step-by-Step implementation

### Step A: The Signup Flow
When a user signs up, Firebase creates the account but sets `emailVerified: false`.
1.  Call `createUserWithEmailAndPassword`.
2.  Immediately call `sendEmailVerification`.
3.  Redirect the user to a "Check your email" message.

### Step B: The Global Auth Listener
In your `AuthContext.tsx`, you listen for the user. Firebase automatically updates the `user` object when they click the link in their email (though sometimes a page refresh is needed to see the update).

### Step C: UI Feedback (The Banner)
On your Home or Dashboard page, check the status:
```tsx
{user && !user.emailVerified && (
  <div className="warning-banner">
    Please verify your email to unlock all features.
  </div>
)}
```

### Step D: The "Hard Lock" (Protected Routes/Actions)
In the logic where you actually generate the speech, you add a server-side or client-side check:
```tsx
if (!user.emailVerified) {
  alert("You must verify your email before using the TTS service.");
  return;
}
```

## 3. Implementation Plan for this App

### Next Tasks:
1.  **[Current] Redirect Login/Logout**: Ensure the Login page sends users to `/` and the Logout button works perfectly.
2.  **Email Verification Page**: Create a dedicated route `/verify-email` that tells users exactly what to do.
3.  **Real-time Check**: Add a button to "Refresh Verification Status" because Firebase Auth state doesn't always update instantly after the user clicks the email link.

---
*Created for the Text-to-Speech YouTube Tutorial Project*

