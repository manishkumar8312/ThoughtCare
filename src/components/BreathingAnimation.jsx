import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BreathingAnimation = ({ isActive, phase }) => {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!isActive) {
      setScale(1)
      return
    }

    const interval = setInterval(() => {
      setScale(prev => {
        if (phase === 'inhale') {
          return prev < 1.5 ? prev + 0.02 : 1.5
        } else if (phase === 'hold') {
          return 1.5
        } else {
          return prev > 1 ? prev - 0.02 : 1
        }
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isActive, phase])

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Outer glow */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.3
          }}
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-full blur-3xl"
        />
        
        {/* Main breathing circle */}
        <motion.div
          animate={{
            scale: scale
          }}
          transition={{
            duration: 0.1,
            ease: "easeInOut"
          }}
          className="relative w-64 h-64 bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-full flex items-center justify-center shadow-2xl"
        >
          {/* Inner circle */}
          <div className="w-48 h-48 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
            <div className="text-center text-white">
              <p className="text-2xl font-light mb-2">
                {phase === 'inhale' ? 'Breathe In' : phase === 'hold' ? 'Hold' : 'Breathe Out'}
              </p>
              <p className="text-lg opacity-80">
                {phase === 'inhale' ? '4 seconds' : phase === 'hold' ? '4 seconds' : '4 seconds'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating particles */}
        {isActive && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                  y: [-20, -100, -20],
                  x: [0, Math.cos(i * 60) * 50, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut"
                }}
                className="absolute w-4 h-4 bg-pastel-yellow rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default BreathingAnimation
