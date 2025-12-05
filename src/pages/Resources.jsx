import { motion } from 'framer-motion'
import { BookOpen, Video, Lightbulb, Heart, Brain, Coffee } from 'lucide-react'
import { SAMPLE_RESOURCES } from '../utils/constants.js'

const Resources = () => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return <BookOpen className="w-5 h-5" />
      case 'video':
        return <Video className="w-5 h-5" />
      case 'technique':
        return <Lightbulb className="w-5 h-5" />
      default:
        return <BookOpen className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Anxiety':
        return 'from-pastel-purple to-pastel-pink'
      case 'Meditation':
        return 'from-pastel-blue to-pastel-green'
      case 'Stress Relief':
        return 'from-pastel-green to-pastel-yellow'
      case 'Habits':
        return 'from-pastel-yellow to-pastel-orange'
      case 'Sleep':
        return 'from-pastel-pink to-pastel-purple'
      case 'Burnout':
        return 'from-pastel-orange to-pastel-red'
      default:
        return 'from-pastel-blue to-pastel-purple'
    }
  }

  return (
    /* PAGE WRAPPER → forces true centering */
    <div className="w-full flex justify-center pt-20">

      {/* CENTERED CONTENT CONTAINER */}
      <div className="max-w-6xl w-full px-4 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-3">
          <BookOpen className="w-8 h-8 text-pastel-purple" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
            Mental Health Resources
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore articles, videos, and techniques to support your mental wellness journey.
        </p>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <div className="glass-card p-4 text-center">
          <Brain className="w-8 h-8 text-pastel-purple mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">Anxiety</h3>
        </div>
        <div className="glass-card p-4 text-center">
          <Heart className="w-8 h-8 text-pastel-pink mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">Meditation</h3>
        </div>
        <div className="glass-card p-4 text-center">
          <Coffee className="w-8 h-8 text-pastel-yellow mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">Stress Relief</h3>
        </div>
      </motion.div>

      {/* Resources Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SAMPLE_RESOURCES.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            className="glass-card p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(resource.category)}`}>
                {getTypeIcon(resource.type)}
              </div>
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                {resource.type}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {resource.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {resource.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(resource.category)} text-white`}>
                {resource.category}
              </span>
              <button className="text-sm text-pastel-purple hover:text-pastel-pink transition-colors duration-300 font-medium">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Emergency Resources */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="glass-card p-6 border-2 border-red-200"
      >
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-full bg-red-100">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Crisis Support</h3>
        </div>
        
        <p className="text-gray-700 mb-4">
          If you're in immediate distress or having thoughts of self-harm, please reach out for help right away.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Crisis Hotline</h4>
            <p className="text-red-700 font-bold">988</p>
            <p className="text-sm text-red-600">24/7 Suicide & Crisis Lifeline</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Text Support</h4>
            <p className="text-red-700 font-bold">HOME to 741741</p>
            <p className="text-sm text-red-600">Crisis Text Line</p>
          </div>
        </div>
      </motion.div>

      </div>
    </div>
  )
}

export default Resources
