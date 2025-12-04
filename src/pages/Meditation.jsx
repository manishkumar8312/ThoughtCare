import { motion } from 'framer-motion'
import MeditationTimer from '../components/MeditationTimer.jsx'
import BreathingAnimation from '../components/BreathingAnimation.jsx'
import { Headphones, Wind, Sparkles, Timer } from 'lucide-react'

const Meditation = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-3">
          <Headphones className="w-8 h-8 text-pastel-green" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pastel-green to-pastel-yellow bg-clip-text text-transparent">
            Meditation & Mindfulness
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Find your inner peace with guided meditation sessions and breathing exercises. 
          Take a moment to relax and recharge your mind.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Breathing Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass-card p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Wind className="w-6 h-6 text-pastel-blue" />
              <h3 className="text-xl font-bold text-gray-800">Breathing Exercise</h3>
            </div>
            
            <BreathingAnimation 
              isActive={false} // Will be connected to timer state
              phase="idle"
            />
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>Follow the circle's rhythm</p>
              <p className="mt-1">4-4-4-4 breathing pattern</p>
            </div>
          </div>
        </motion.div>

        {/* Meditation Timer */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MeditationTimer />
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-green to-pastel-yellow flex items-center justify-center mx-auto mb-4">
            <Timer className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Duration</h3>
          <p className="text-sm text-gray-600">Choose from 3 to 20 minute sessions</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-yellow to-pastel-pink flex items-center justify-center mx-auto mb-4">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Breathing Guide</h3>
          <p className="text-sm text-gray-600">Visual breathing exercises for relaxation</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Track Progress</h3>
          <p className="text-sm text-gray-600">Monitor your meditation practice over time</p>
        </div>
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Meditation Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Find a Quiet Space</h4>
              <p className="text-sm text-gray-600">Choose a comfortable, quiet place where you won't be disturbed.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Get Comfortable</h4>
              <p className="text-sm text-gray-600">Sit or lie down in a comfortable position with your back straight.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-yellow flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Focus on Breath</h4>
              <p className="text-sm text-gray-600">Pay attention to your breathing and let thoughts come and go.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-pink flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Be Consistent</h4>
              <p className="text-sm text-gray-600">Try to meditate at the same time each day for best results.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Meditation
