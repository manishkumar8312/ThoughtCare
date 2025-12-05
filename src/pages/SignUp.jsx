import { motion } from 'framer-motion'
import { SignUp as ClerkSignUp } from '@clerk/clerk-react'
import { User, Users, Sparkles, Shield } from 'lucide-react'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-green via-pastel-blue to-pastel-purple flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pastel-green to-pastel-blue flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pastel-green to-pastel-blue bg-clip-text text-transparent">
              Join MindfulMe
            </h1>
          </div>
          <p className="text-gray-700">
            Start your mental wellness journey today
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-3 mb-8"
        >
          <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-pastel-purple flex-shrink-0" />
            <p className="text-sm text-gray-700">Track your mood and emotions</p>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Shield className="w-5 h-5 text-pastel-pink flex-shrink-0" />
            <p className="text-sm text-gray-700">Private journaling space</p>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
            <Users className="w-5 h-5 text-pastel-blue flex-shrink-0" />
            <p className="text-sm text-gray-700">AI-powered support</p>
          </div>
        </motion.div>

        {/* Clerk SignUp Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-6"
        >
          <ClerkSignUp 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/dashboard"
          />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a 
              href="/sign-in" 
              className="text-pastel-purple hover:text-pastel-pink transition-colors duration-300 font-medium"
            >
              Sign in
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SignUp
