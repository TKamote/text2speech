# Text-to-Speech App

A full-featured Text-to-Speech web application with Firebase Authentication, usage tracking, and Stripe subscription management.

## Features

- 🔐 Firebase Authentication (email/password with email verification)
- 🎙️ Google Cloud Text-to-Speech integration
- 📊 Usage tracking and limits
- 💳 Stripe subscription management
- 📱 Responsive design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **TTS**: Google Cloud Text-to-Speech API
- **Payments**: Stripe

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project
- Google Cloud project with TTS API enabled
- Stripe account

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
- Copy `.env.local.example` to `.env.local`
- Fill in your Firebase, Google Cloud, and Stripe credentials

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tts-app/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── api/               # API routes
│   └── page.tsx           # Main pages
├── components/            # React components
├── lib/                   # Utility libraries
│   ├── firebase/         # Firebase config and helpers
│   ├── google-cloud/     # Google Cloud TTS client
│   └── stripe/          # Stripe configuration
└── public/               # Static assets
```

## Development

See `FULL_TTS_APP_PLAN.md` for the complete development plan and implementation phases.

## License

Private project

