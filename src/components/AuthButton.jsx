import { useAuth } from '@clerk/clerk-react'
import { SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import { motion } from 'framer-motion'

const AuthButton = ({ isMobile = false }) => {
  const { isSignedIn } = useAuth()

  const buttonClasses = isMobile
    ? "px-6 py-3 rounded-full text-lg font-medium"
    : "px-4 py-2 rounded-full text-sm font-medium"

  const signInButtonClasses = `${buttonClasses} border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300`
  const signUpButtonClasses = `${buttonClasses} bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300`

  if (!isSignedIn) {
    return (
      <div className="flex items-center gap-2">
        <SignInButton mode="modal" redirectUrl="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={signInButtonClasses}
          >
            Login
          </motion.button>
        </SignInButton>
        <SignUpButton mode="modal" redirectUrl="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={signUpButtonClasses}
          >
            Sign Up
          </motion.button>
        </SignUpButton>
      </div>
    )
  }

  return (
    <UserButton 
      appearance={{
        elements: {
          avatarBox: "w-8 h-8",
          userButtonPopoverCard: "shadow-lg border border-gray-200",
          userButtonPopoverActions: "flex flex-col"
        }
      }}
    />
  )
}

export default AuthButton
