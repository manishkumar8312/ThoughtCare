import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Bot, User, Trash2, Sparkles, Clock, Lock } from 'lucide-react'

const Chat = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear this conversation?")) {
      try {
        // Remove Botpress data from storage
        const removeKeys = (storage) => {
          const keys = []
          for (let i = 0; i < storage.length; i++) {
            const key = storage.key(i)
            if (key && (key.includes("bp-") || key.includes("botpress") || key.includes("webchat"))) {
              keys.push(key)
            }
          }
          keys.forEach((key) => storage.removeItem(key))
        }

        removeKeys(localStorage)
        removeKeys(sessionStorage)

        // Reload iframe cleanly
        const iframe = document.getElementById("botpress-iframe")
        if (iframe) {
          const url =
            "https://cdn.botpress.cloud/webchat/v3.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/07/16/20251207163304-B20VLPAU.json"

          iframe.src = `${url}&t=${Date.now()}`
        }

        setIsLoaded(false)
        setTimeout(() => setIsLoaded(true), 800)
      } catch (err) {
        console.error(err)
        alert("Error while clearing chat. Please refresh the page.")
      }
    }
  }

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-3">
          <MessageCircle className="w-8 h-8 text-pastel-pink" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            AI Support Chat
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Chat with our AI companion for emotional support and guidance.
          I'm here to listen and help you navigate your feelings.
        </p>
      </motion.div>

      {/* Chat Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card h-[600px] flex flex-col"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">AI Assistant</h3>
              <p className="text-xs text-gray-600">{isLoaded ? "Connected" : "Connecting..."}</p>
            </div>
          </div>

          <button
            onClick={handleClearChat}
            className="p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
            title="Clear conversation"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Iframe */}
        <div className="flex-1 relative">
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-white/80 backdrop-blur-sm z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Connecting to AI Assistant…</h3>
              <div className="inline-flex items-center space-x-2 text-sm text-pastel-purple">
                <div className="w-2 h-2 bg-pastel-purple rounded-full animate-pulse" />
                <span>Loading...</span>
              </div>
            </div>
          )}

          <iframe
            id="botpress-iframe"
            src="https://cdn.botpress.cloud/webchat/v3.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/07/16/20251207163304-B20VLPAU.json"
            className="w-full h-full border-0"
            title="AI Support Chat"
            onLoad={() => setIsLoaded(true)}
            allow="microphone; clipboard-read; clipboard-write"
          ></iframe>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Judgment-Free</h3>
          <p className="text-sm text-gray-600">Express yourself freely without fear of judgment.</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-purple to-pastel-blue flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Available</h3>
          <p className="text-sm text-gray-600">Get support anytime you need it.</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-blue to-pastel-green flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Private & Secure</h3>
          <p className="text-sm text-gray-600">Your conversations remain confidential.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Chat
