import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ChatBubble from '../components/ChatBubble.jsx'
import ChatInput from '../components/ChatInput.jsx'
import { useAppContext } from '../context/AppContext.jsx'
import { MessageCircle, Bot, User, Trash2, Sparkles } from 'lucide-react'

const aiResponses = [
  "I understand how you're feeling. It's completely normal to experience these emotions. Would you like to talk more about what's been on your mind?",
  "Thank you for sharing that with me. Remember that it's okay to not be okay sometimes. What do you think might help you feel better right now?",
  "That sounds really challenging. I'm here to listen. Sometimes just expressing these feelings can help. Is there anything specific that's been bothering you?",
  "I hear you. It takes courage to open up about your feelings. Have you tried any relaxation techniques like deep breathing or meditation?",
  "That's a lot to carry. Remember to be kind to yourself during difficult times. Would you like to explore some coping strategies together?",
  "I appreciate you trusting me with this. Your feelings are valid. What's one small thing you could do for yourself today?",
  "It sounds like you're going through a lot right now. I'm here to support you. Let's take this one step at a time.",
  "Thank you for being so open with me. It's important to acknowledge these feelings. What would feel most helpful for you right now?"
]

const Chat = () => {
  const { chatMessages, addChatMessage, clearChatMessages } = useAppContext()
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  const handleSendMessage = async (message) => {
    addChatMessage(message, true)
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
    addChatMessage(randomResponse, false)
    setIsTyping(false)
  }

  const handleClearChat = () => {
    clearChatMessages()
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
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
            AI Support Chat
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Chat with our AI companion for emotional support and guidance. 
          I'm here to listen and help you navigate your feelings.
        </p>
      </motion.div>

      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card h-[500px] flex flex-col"
      >
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Mindful Assistant</h3>
              <p className="text-xs text-gray-600">Always here to listen</p>
            </div>
          </div>
          
          <button
            onClick={handleClearChat}
            className="p-2 rounded-lg text-gray-600 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome to your chat</h3>
                <p className="text-sm text-gray-600">
                  I'm here to support you. Share what's on your mind, and I'll listen without judgment.
                </p>
              </div>
            </div>
          ) : (
            <>
              {chatMessages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message}
                  isUser={message.isUser}
                />
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-white/20">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
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
          <p className="text-sm text-gray-600">Express yourself freely without fear of judgment</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-purple to-pastel-blue flex items-center justify-center mx-auto mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Available</h3>
          <p className="text-sm text-gray-600">Get support whenever you need it, day or night</p>
        </div>

        <div className="glass-card p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pastel-blue to-pastel-green flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Private & Secure</h3>
          <p className="text-sm text-gray-600">Your conversations are completely confidential</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Chat
