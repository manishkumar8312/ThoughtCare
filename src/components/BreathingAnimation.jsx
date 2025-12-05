import { motion } from "framer-motion";

const BreathingAnimation = ({ isActive, phase }) => {

  const getScale = () => {
    if (!isActive) return 1;

    switch (phase) {
      case "inhale":
        return 1.5;
      case "hold":
        return 1.5;
      case "exhale":
        return 1;
      default:
        return 1;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">

        {/* Outer Glow Animation */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.7, 0.3] : 0.3
          }}
          transition={{
            duration: 4,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-64 h-64 rounded-full blur-3xl 
          bg-gradient-to-r from-pastel-purple to-pastel-blue"
        />

        {/* Main Circle */}
        <motion.div
          animate={{ scale: getScale() }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-64 h-64 rounded-full shadow-2xl
          bg-gradient-to-r from-pastel-purple to-pastel-blue 
          flex items-center justify-center"
        >
          {/* Inner white circle */}
          <div className="w-48 h-48 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-2xl font-light mb-2">
                {phase === "inhale"
                  ? "Breathe In"
                  : phase === "hold"
                  ? "Hold"
                  : "Breathe Out"}
              </p>

              <p className="text-lg opacity-80">4 seconds</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        {isActive &&
          [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
                y: [-20, -120, -20],
                x: [0, Math.cos(i * 60) * 60, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              className="absolute w-4 h-4 bg-pastel-yellow rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default BreathingAnimation;
