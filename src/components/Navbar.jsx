import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  Activity,
  BookOpen,
  Headphones,
  MessageCircle,
  Library
} from 'lucide-react'
import AuthButton from './AuthButton.jsx'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/mood-tracker', label: 'Mood', icon: Activity },
    { path: '/journal', label: 'Journal', icon: BookOpen },
    { path: '/meditation', label: 'Meditate', icon: Headphones },
    { path: '/chat', label: 'AI Chat', icon: MessageCircle },
    { path: '/resources', label: 'Learn', icon: Library }
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-xl bg-white/40 shadow-md rounded-full mt-4 mx-4 px-6 py-4 sticky top-4 z-50 border border-white/60"
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img 
            src="/src/assets/logo.png" 
            alt="ThoughtCare Logo" 
            className="w-7 h-7 group-hover:scale-110 transition"
          />
          <span className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ThoughtCare
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                      : 'text-gray-700 hover:bg-white/70 hover:shadow-sm'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Mobile Compact Icons */}
        <div className="md:hidden flex items-center space-x-3">
          {navItems.slice(0, 3).map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`p-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white'
                    : 'text-gray-700 hover:bg-white/50'
                }`}
              >
                <Icon className="w-5 h-5" />
              </Link>
            )
          })}
        </div>

        {/* Authentication Button */}
        <AuthButton />
      </div>
    </motion.nav>
  )
}

export default Navbar
