import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, BookOpen, Headphones, MessageCircle, Library, ArrowRight, Sparkles } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mood Tracking',
      description: 'Track your emotional patterns and gain insights into your mental wellbeing',
      link: '/mood-tracker',
      color: 'from-pastel-purple to-pastel-blue'
    },
    {
      icon: BookOpen,
      title: 'Digital Journal',
      description: 'Express your thoughts and feelings in a private, secure journal',
      link: '/journal',
      color: 'from-pastel-blue to-pastel-green'
    },
    {
      icon: Headphones,
      title: 'Meditation',
      description: 'Guided meditation sessions and breathing exercises for relaxation',
      link: '/meditation',
      color: 'from-pastel-green to-pastel-yellow'
    },
    {
      icon: MessageCircle,
      title: 'AI Support',
      description: 'Chat with our AI companion for emotional support and guidance',
      link: '/chat',
      color: 'from-pastel-yellow to-pastel-pink'
    },
    {
      icon: Library,
      title: 'Resources',
      description: 'Access curated articles, videos, and mental health techniques',
      link: '/resources',
      color: 'from-pastel-pink to-pastel-purple'
    }
  ]

  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 flex flex-col items-center"
      >
        <div className="relative flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 right-0"
          >
            <Sparkles className="w-8 h-8 text-pastel-yellow" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent">
            Welcome to MindfulMe
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
          Your personal mental wellness companion. Track your mood, journal your thoughts,
          practice mindfulness, and find support on your journey to emotional wellbeing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/mood-tracker" className="pastel-button inline-flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/resources"
            className="glass-card px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Everything You Need for Mental Wellness
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed to support your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link to={feature.link}>
                  <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>

                    <div className="flex items-center text-pastel-purple font-medium">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default Home
