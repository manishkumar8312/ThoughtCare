# Mental Wellness Web App 🧘‍♀️

A comprehensive mental health tracking and wellness application built with React, Vite, and modern web technologies.

## 🌟 Features

- **Mood Tracking**: Track your daily emotions with emoji-based mood selector
- **Journaling**: Rich text journal editor with React Quill for expressive writing
- **Meditation**: Guided meditation sessions with breathing animations and timers
- **AI Support Chat**: Interactive chat interface for mental health support
- **Resources**: Curated articles, videos, and techniques for mental wellness
- **Data Visualization**: Mood history charts and trends using Recharts
- **Local Storage**: All data stored locally for privacy and security

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS with custom pastel theme
- **Animations**: Framer Motion
- **Charts**: Recharts for mood visualization
- **Rich Text**: React Quill for journaling
- **Routing**: React Router DOM
- **State Management**: Context API + LocalStorage
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Clerk account (for authentication)

### Clerk Setup

1. **Create a Clerk Account**:
   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Sign up for a free account

2. **Create a New Application**:
   - Click "Add application" 
   - Give it a name (e.g., "MindfulMe")
   - Choose your authentication methods (email, social providers, etc.)

3. **Get Your Keys**:
   - Navigate to your application dashboard
   - Copy the **Publishable Key** (starts with `pk_test_` for development)
   - Keep the **Secret Key** for server-side use if needed

4. **Configure Environment Variables**:
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your Clerk Publishable Key
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   ```

### App Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd mental-wellness-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your Clerk Publishable Key from the dashboard

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Authentication Flow

- **Unauthenticated users** are redirected to `/sign-in`
- **New users** can sign up at `/sign-up`
- **Authenticated users** can access all app features
- **Sign out** option available in the navigation bar

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
mental-wellness-app/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── MoodHistoryChart.jsx
│   │   ├── JournalEditor.jsx
│   │   ├── MeditationTimer.jsx
│   │   ├── BreathingAnimation.jsx
│   │   ├── ChatBubble.jsx
│   │   └── ChatInput.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── MoodTracker.jsx
│   │   ├── Journal.jsx
│   │   ├── Meditation.jsx
│   │   ├── Chat.jsx
│   │   └── Resources.jsx
│   ├── context/            # Global state management
│   │   └── AppContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useLocalStorage.js
│   │   └── useMeditation.js
│   ├── services/           # API and business logic
│   │   ├── aiService.js
│   │   └── moodService.js
│   ├── utils/              # Utility functions
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── router/             # React Router configuration
│   │   └── AppRouter.jsx
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Soft Pastel Color Theme**: Calming colors designed for mental wellness
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Glass Morphism**: Modern UI with frosted glass effects
- **Accessibility**: Semantic HTML and ARIA labels for screen readers

## 💾 Data Storage

All user data is stored locally in the browser using localStorage:
- Mood entries with timestamps and notes
- Journal entries with rich text content
- Chat history with AI support
- Meditation session records
- App preferences and settings

## 🔒 Privacy & Security

- No external API calls for data storage
- All data remains on user's device
- No tracking or analytics
- Complete privacy for sensitive mental health data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you or someone you know is in crisis, please reach out to:
- **Crisis Hotline**: 988 (US)
- **Crisis Text Line**: Text HOME to 741741
- **Emergency Services**: 911

---

Made with ❤️ for your mental wellness journey
