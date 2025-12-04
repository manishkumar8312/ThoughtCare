import { useAuth, useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { User, LogOut, Heart } from 'lucide-react'

const AuthButton = () => {
  const { isSignedIn, signOut } = useAuth()
  const { user } = useUser()

  if (!isSignedIn) {
    return (
      <div className="flex items-center space-x-3">
        <motion.a
          href="/sign-in"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full border border-pastel-purple text-pastel-purple hover:bg-pastel-purple hover:text-white transition-colors duration-300 font-medium"
        >
          Sign In
        </motion.a>
        <motion.a
          href="/sign-up"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple text-white font-medium"
        >
          Sign Up
        </motion.a>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2 px-3 py-2 bg-white/20 rounded-full backdrop-blur-sm">
        <User className="w-4 h-4 text-pastel-purple" />
        <span className="text-sm text-gray-700">
          {user?.firstName || user?.username || 'User'}
        </span>
      </div>
      <motion.button
        onClick={() => signOut()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-4 py-2 rounded-full border border-pastel-pink text-pastel-pink hover:bg-pastel-pink hover:text-white transition-colors duration-300 font-medium"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign Out</span>
      </motion.button>
    </div>
  )
}

export default AuthButton
