import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext.jsx'

const moods = [
  { label: 'Happy', color: 'bg-yellow-200', icon: '😊' },
  { label: 'Calm', color: 'bg-blue-200', icon: '😌' },
  { label: 'Sad', color: 'bg-gray-200', icon: '😢' },
  { label: 'Anxious', color: 'bg-purple-200', icon: '😟' },
  { label: 'Angry', color: 'bg-red-200', icon: '😡' },
  { label: 'Tired', color: 'bg-indigo-200', icon: '😴' },
  { label: 'Excited', color: 'bg-pink-200', icon: '🤩' },
  { label: 'Neutral', color: 'bg-green-200', icon: '🙂' }
]

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null)
  const [note, setNote] = useState('')
  const { addMoodEntry } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedMood) {
      addMoodEntry(selectedMood, note)
      setSelectedMood(null)
      setNote('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 space-y-6"
    >
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-800">How are you feeling?</h3>
        <p className="text-gray-600">Select the mood that best represents your current emotional state</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-4 gap-4">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMood(mood.label)}
              className={`cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 ${
                selectedMood === mood.label
                  ? `${mood.color} ring-4 ring-pastel-purple shadow-lg`
                  : `${mood.color} hover:shadow-md`
              }`}
            >
              <div className="text-3xl mb-1 font-bold text-gray-700">{mood.icon}</div>
              <div className="text-xs font-medium text-gray-700">{mood.label}</div>
            </motion.div>
          ))}
        </div>

        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add a note (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple resize-none"
                rows={3}
              />
            </div>
            
            <button
              type="submit"
              className="pastel-button align-center justify-center text-black"
            >
              Save Mood Entry
            </button>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default MoodSelector
