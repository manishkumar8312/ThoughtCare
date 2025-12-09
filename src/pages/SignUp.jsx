import { motion } from 'framer-motion'
import { SignUp as ClerkSignUp } from '@clerk/clerk-react'
import { User, Users, Sparkles, Shield } from 'lucide-react'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-green via-pastel-blue to-pastel-purple flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-pastel-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-pastel-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl relative z-10 grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Branding & Benefits */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Meditation GIF */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple to-pastel-pink rounded-full blur-xl opacity-50"></div>
                <img 
                  src="/src/assets/meditation.gif" 
                  alt="Meditation" 
                  className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white/50"
                />
              </motion.div>
            </div>

            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pastel-green to-pastel-blue flex items-center justify-center shadow-lg">
                  <User className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
                  MindfulMe
                </h1>
              </div>
              <p className="text-gray-700 text-lg font-medium">
                Your journey to inner peace starts here
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl backdrop-blur-md hover:bg-white/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pastel-purple to-pastel-pink flex items-center justify-center flex-shrink-0 shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Mood Tracking</h3>
                  <p className="text-sm text-gray-600">Monitor your emotional wellness daily</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl backdrop-blur-md hover:bg-white/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pastel-pink to-pastel-orange flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Private & Secure</h3>
                  <p className="text-sm text-gray-600">Your thoughts are safe with us</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-4 p-4 bg-white/30 rounded-xl backdrop-blur-md hover:bg-white/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pastel-blue to-pastel-green flex items-center justify-center flex-shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">AI Companion</h3>
                  <p className="text-sm text-gray-600">24/7 support when you need it</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="space-y-6">
          {/* Mobile Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-6 md:hidden"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pastel-green to-pastel-blue flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
                MindfulMe
              </h1>
            </div>
            <p className="text-gray-700">
              Start your mental wellness journey today
            </p>
          </motion.div>

          {/* Clerk SignUp Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 shadow-2xl"
          >
            <ClerkSignUp 
              path="/sign-up"
              routing="path"
              signInUrl="/sign-in"
              fallbackRedirectUrl="/dashboard"
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg",
                  card: "shadow-none bg-transparent border-0",
                  rootBox: "shadow-none bg-transparent",
                  cardBox: "shadow-none bg-transparent border-0",
                },
              }}
            />
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default SignUp