import { motion } from 'framer-motion'
import MoodSelector from '../components/MoodSelector.jsx'
import MoodHistoryChart from '../components/MoodHistoryChart.jsx'
import { Brain, TrendingUp, Calendar, Heart } from 'lucide-react'

const MoodTracker = () => {
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
          <Brain className="w-8 h-8 text-pastel-purple" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-blue bg-clip-text text-transparent">
            Mood Tracker
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Track your emotional patterns and gain insights into your mental wellbeing. 
          Regular mood tracking helps you identify triggers and patterns.
        </p>
      </motion.div>

      {/* Mood Selector */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <MoodSelector />
      </motion.div>

      {/* Mood History Charts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <MoodHistoryChart />
      </motion.div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-6 h-6 text-pastel-green" />
          <h3 className="text-xl font-bold text-gray-800">Tips for Better Mood Tracking</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-purple flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Be Consistent</h4>
              <p className="text-sm text-gray-600">Try to track your mood at the same time each day for better patterns.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center flex-shrink-0">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Add Context</h4>
              <p className="text-sm text-gray-600">Include notes about what influenced your mood for deeper insights.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Review Regularly</h4>
              <p className="text-sm text-gray-600">Check your weekly trends to understand your emotional patterns better.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-pastel-pink flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Be Honest</h4>
              <p className="text-sm text-gray-600">Record your true feelings - this data is for your personal growth.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MoodTracker
