import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BreathingAnimation = ({ duration = 4 }) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("inhale");
  const [timeLeft, setTimeLeft] = useState(duration);

  // Toggle breathing on circle click
  const toggleBreathing = () => {
    setIsActive((prev) => !prev);
    if (!isActive) {
      setPhase("inhale");
      setTimeLeft(duration);
    }
  };

  // Timer logic
  useEffect(() => {
    if (!isActive) {
      setTimeLeft(duration);
      return;
    }

    setTimeLeft(duration);

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isActive, duration]);

  // Phase switching
  useEffect(() => {
    if (!isActive) return;

    const phases = ["inhale", "hold", "exhale"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setPhase(phases[index]);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [isActive, duration]);

  const getScale = () => {
    if (!isActive) return 1;
    return phase === "exhale" ? 1 : 1.4; // smaller scale
  };

  const getLabel = () => {
    if (!isActive) return "Tap to Breathe";
    if (phase === "inhale") return "Breathe In";
    if (phase === "hold") return "Hold";
    return "Breathe Out";
  };

  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="relative cursor-pointer" onClick={toggleBreathing}>

        {/* Outer Glow */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.2, 1] : 1,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.2
          }}
          transition={{
            duration,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-48 h-48 rounded-full blur-2xl
          bg-gradient-to-r from-purple-300 to-blue-300"
        />

        {/* Main Circle */}
        <motion.div
          animate={{ scale: getScale() }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-48 h-48 rounded-full shadow-xl
          bg-gradient-to-br from-purple-400 to-blue-300 
          flex items-center justify-center"
        >
          {/* Inner Glass */}
          <div className="w-36 h-36 bg-white/20 backdrop-blur-sm rounded-full flex flex-col items-center justify-center text-white">
            <p className="text-lg font-light">{getLabel()}</p>

            {isActive && (
              <motion.p
                key={timeLeft}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold"
              >
                {timeLeft}s
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BreathingAnimation;
