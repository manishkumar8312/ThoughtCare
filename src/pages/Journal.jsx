import { motion } from 'framer-motion'
import JournalEditor from '../components/JournalEditor.jsx'
import { BookOpen, PenTool, Lock, Sparkles } from 'lucide-react'

const Journal = () => {
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
          <BookOpen className="w-8 h-8 text-pastel-blue" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pastel-blue to-pastel-green bg-clip-text text-transparent">
            Digital Journal
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Express your thoughts and feelings in a private, secure space. 
          Journaling helps you process emotions and gain clarity.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-blue to-pastel-green flex items-center justify-center mx-auto mb-4">
            <PenTool className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Rich Text Editor</h3>
          <p className="text-sm text-gray-600">Format your entries with text styling, lists, and more</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-green to-pastel-yellow flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Private & Secure</h3>
          <p className="text-sm text-gray-600">Your entries are stored locally and completely private</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-yellow to-pastel-pink flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Track Progress</h3>
          <p className="text-sm text-gray-600">Review your entries to understand your emotional journey</p>
        </div>
      </motion.div>

      {/* Journal Editor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <JournalEditor />
      </motion.div>

      {/* Journal Prompts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-card p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Journal Prompts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/30 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">Gratitude</p>
            <p className="text-sm text-gray-600">What are three things you're grateful for today?</p>
          </div>
          <div className="p-4 bg-white/30 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">Reflection</p>
            <p className="text-sm text-gray-600">What was the highlight of your day and why?</p>
          </div>
          <div className="p-4 bg-white/30 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">Goals</p>
            <p className="text-sm text-gray-600">What's one small step you can take towards your goals?</p>
          </div>
          <div className="p-4 bg-white/30 rounded-lg">
            <p className="font-medium text-gray-800 mb-2">Self-Care</p>
            <p className="text-sm text-gray-600">How did you take care of yourself today?</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Journal
