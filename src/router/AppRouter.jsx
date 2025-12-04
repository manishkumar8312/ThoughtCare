import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from '../context/AppContext.jsx'
import ProtectedRoute from '../components/ProtectedRoute.jsx'
import App from '../App.jsx'
import Login from '../pages/Login.jsx'
import SignUp from '../pages/SignUp.jsx'
import Home from '../pages/Home.jsx'
import MoodTracker from '../pages/MoodTracker.jsx'
import Journal from '../pages/Journal.jsx'
import Meditation from '../pages/Meditation.jsx'
import Chat from '../pages/Chat.jsx'
import Resources from '../pages/Resources.jsx'

const AppRouter = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in/sso-callback" element={<Login />} />
          <Route path="/sign-up/sso-callback" element={<SignUp />} />
          <Route path="/sign-up/continue" element={<SignUp />} />
          <Route path="/sign-in/factor-one" element={<Login />} />
          <Route path="/sign-up/factor-one" element={<SignUp />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }>
            <Route index element={<Home />} />
            <Route path="mood-tracker" element={<MoodTracker />} />
            <Route path="journal" element={<Journal />} />
            <Route path="meditation" element={<Meditation />} />
            <Route path="chat" element={<Chat />} />
            <Route path="resources" element={<Resources />} />
            <Route path="dashboard" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default AppRouter
