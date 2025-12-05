# ThoughtCare – Mental Wellness Web Application

ThoughtCare is a comprehensive mental health tracking and wellness application built using React, Vite, and modern web technologies. It enables users to monitor their emotional well-being, practice guided meditation, journal their thoughts, and access mental health resources in a private and secure environment.

---

## Features

* **Mood Tracking**: Daily emotion tracking with an intuitive mood selection interface
* **Journaling**: Rich-text journal editor powered by React Quill
* **Meditation Module**: Guided meditation sessions with breathing animations, timers, and configurable modes
* **AI Support Chat**: Interactive chat system designed to assist users with mental health support
* **Resource Library**: Curated articles, videos, and self-help techniques
* **Data Visualization**: Mood history trends and insights using Recharts
* **Local Storage**: All user data stored locally for maximum privacy

---

## Technology Stack

* **Frontend**: React 18 with Vite
* **Styling**: TailwindCSS (custom pastel theme)
* **Animations**: Framer Motion
* **Charts**: Recharts
* **Text Editing**: React Quill
* **Routing**: React Router DOM
* **State Management**: Context API with LocalStorage
* **Icons**: Lucide React

---

## Installation

### Prerequisites

* Node.js (version 16 or above)
* npm or yarn
* Clerk account for authentication

### Clerk Setup

1. Create a Clerk account at the Clerk Dashboard
2. Add a new application
3. Retrieve your **Publishable Key** (starts with `pk_test_`)
4. Add it to your environment variables

Example `.env` configuration:

```bash
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

---

## Application Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd thoughtcare
```

2. Install dependencies:

```bash
npm install
```

3. Add your Clerk Publishable Key in the `.env` file

4. Start the development server:

```bash
npm run dev
```

Access the app at `http://localhost:5173`.

---

## Authentication Flow

* Unauthenticated users are redirected to the sign-in page
* New users may register via the sign-up page
* Authenticated users gain full access to all features
* Sign-out option is available in the navigation bar

---

## Project Structure

```
thoughtcare/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── MoodHistoryChart.jsx
│   │   ├── JournalEditor.jsx
│   │   ├── MeditationTimer.jsx
│   │   ├── BreathingAnimation.jsx
│   │   ├── ChatBubble.jsx
│   │   └── ChatInput.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MoodTracker.jsx
│   │   ├── Journal.jsx
│   │   ├── Meditation.jsx
│   │   ├── Chat.jsx
│   │   └── Resources.jsx
│   ├── context/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   ├── router/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Design Principles

* Soft, neutral pastel color palette for a calming user experience
* Fully responsive UI, optimized for mobile and desktop
* Smooth, meaningful animations with Framer Motion
* Glass-morphism elements for a modern interface
* Accessibility-oriented semantics and ARIA support

---

## Data Storage and Privacy

* All data is stored in the user's browser via LocalStorage
* No external storage or tracking systems are used
* No analytics, ensuring full privacy for sensitive mental health information
* Mood entries, journals, chat history, and meditation data remain fully local

---

## Available Scripts

* `npm run dev` – Start the development server
* `npm run build` – Create a production build
* `npm run preview` – Preview the production build
* `npm run lint` – Run code linting

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Submit a pull request

---

## License

Licensed under the MIT License. Refer to the LICENSE file for details.

---

## Support Disclaimer

ThoughtCare is a wellness tool and not a substitute for professional medical treatment. In case of any emergency, users are encouraged to contact appropriate local support services.

