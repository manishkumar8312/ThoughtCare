import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, Clock, Volume2 } from 'lucide-react'
import { useAppContext } from '../context/AppContext.jsx'

const MeditationTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes default
  const [isRunning, setIsRunning] = useState(false)
  const [duration, setDuration] = useState(300)
  const [phase, setPhase] = useState('idle') // idle, inhale, hold, exhale
  const intervalRef = useRef(null)
  const breathingRef = useRef(null)
  const { addMeditationSession } = useAppContext()

  const presetDurations = [
    { label: '3 min', value: 180 },
    { label: '5 min', value: 300 },
    { label: '10 min', value: 600 },
    { label: '15 min', value: 900 },
    { label: '20 min', value: 1200 }
  ]

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleComplete()
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning, timeLeft])

  useEffect(() => {
    if (isRunning) {
      startBreathingCycle()
    } else {
      setPhase('idle')
    }

    return () => {
      if (breathingRef.current) {
        clearInterval(breathingRef.current)
      }
    }
  }, [isRunning])

  const startBreathingCycle = () => {
    let currentPhase = 0
    const phases = ['inhale', 'hold', 'exhale', 'hold']
    
    const cycle = () => {
      setPhase(phases[currentPhase])
      currentPhase = (currentPhase + 1) % phases.length
    }
    
    cycle() // Start immediately
    breathingRef.current = setInterval(cycle, 4000) // Change every 4 seconds
  }

  const handleComplete = () => {
    setIsRunning(false)
    setPhase('idle')
    const sessionDuration = duration - timeLeft
    if (sessionDuration > 0) {
      addMeditationSession(sessionDuration)
    }
    // Show completion message or play sound
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(duration)
    setPhase('idle')
  }

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration)
    setTimeLeft(newDuration)
    setIsRunning(false)
    setPhase('idle')
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 space-y-6"
    >
      {/* Timer Display */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Clock className="w-5 h-5" />
          <span className="text-sm">Meditation Timer</span>
        </div>
        
        <motion.div
          animate={{
            scale: isRunning ? [1, 1.05, 1] : 1
          }}
          transition={{
            duration: 1,
            repeat: isRunning ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="text-6xl font-bold text-gray-800"
        >
          {formatTime(timeLeft)}
        </motion.div>

        <div className="text-sm text-gray-600">
          {phase === 'inhale' && 'Breathe in slowly'}
          {phase === 'hold' && 'Hold your breath'}
          {phase === 'exhale' && 'Breathe out slowly'}
          {phase === 'idle' && 'Press start to begin'}
        </div>
      </div>

      {/* Duration Presets */}
      <div className="flex justify-center space-x-2">
        {presetDurations.map((preset) => (
          <button
            key={preset.value}
            onClick={() => handleDurationChange(preset.value)}
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
              duration === preset.value
                ? 'bg-gradient-to-r from-pastel-purple to-pastel-blue text-white'
                : 'bg-white/30 text-gray-700 hover:bg-white/50'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4">
        {!isRunning ? (
          <button
            onClick={handleStart}
            className="pastel-button inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Start</span>
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pastel-yellow to-pastel-pink text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
          >
            <Pause className="w-5 h-5" />
            <span>Pause</span>
          </button>
        )}
        
        <button
          onClick={handleReset}
          className="px-6 py-3 rounded-xl bg-white/30 text-gray-700 font-medium hover:bg-white/50 transition-all duration-300 inline-flex items-center space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Sound Toggle */}
      <div className="flex justify-center">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-pastel-purple transition-colors duration-300">
          <Volume2 className="w-5 h-5" />
          <span className="text-sm">Enable Sound</span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
        <motion.div
          animate={{
            width: `${((duration - timeLeft) / duration) * 100}%`
          }}
          transition={{ duration: 1, ease: "linear" }}
          className="h-full bg-gradient-to-r from-pastel-purple to-pastel-blue"
        />
      </div>
    </motion.div>
  )
}

export default MeditationTimer
