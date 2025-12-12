import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const { userId, isLoaded } = useAuth()
  const [darkMode, setDarkMode] = useState(false)
  
  // TODO: Replace with MongoDB data fetching when database is set up
  
  // Create user-specific storage keys
  const userPrefix = isLoaded && userId ? `user_${userId}_` : ''
  
  const [moodData, setMoodData] = useLocalStorage(`${userPrefix}moodData`, [])
  const [journalEntries, setJournalEntries] = useLocalStorage(`${userPrefix}journalEntries`, [])
  const [meditationSessions, setMeditationSessions] = useLocalStorage(`${userPrefix}meditationSessions`, [])

  const addMoodEntry = (mood, note) => {
    if (!isLoaded || !userId) return // Don't allow adding entries if not authenticated
    
    const newEntry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toISOString(),
      timestamp: new Date().getTime(),
      userId // Store userId for additional verification
    }
    setMoodData([...moodData, newEntry])
  }

  const addJournalEntry = (entry) => {
    if (!isLoaded || !userId) return // Don't allow adding entries if not authenticated
    
    const newEntry = {
      id: Date.now(),
      content: entry,
      date: new Date().toISOString(),
      timestamp: new Date().getTime(),
      userId // Store userId for additional verification
    }
    setJournalEntries([...journalEntries, newEntry])
  }

  const addMeditationSession = (duration) => {
    if (!isLoaded || !userId) return // Don't allow adding entries if not authenticated
    
    const newSession = {
      id: Date.now(),
      duration,
      date: new Date().toISOString(),
      timestamp: new Date().getTime(),
      userId // Store userId for additional verification
    }
    setMeditationSessions([...meditationSessions, newSession])
  }

  const deleteJournalEntry = (id) => {
    setJournalEntries(journalEntries.filter(entry => entry.id !== id))
  }

  const getMoodStats = () => {
    if (moodData.length === 0) return {}
    
    const moodCounts = moodData.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1
      return acc
    }, {})
    
    return moodCounts
  }

  const getRecentMoods = (days = 7) => {
    const cutoff = new Date().getTime() - (days * 24 * 60 * 60 * 1000)
    return moodData.filter(entry => entry.timestamp > cutoff)
  }

  const value = {
    darkMode,
    setDarkMode,
    moodData,
    addMoodEntry,
    getMoodStats,
    getRecentMoods,
    journalEntries,
    addJournalEntry,
    deleteJournalEntry,
    meditationSessions,
    addMeditationSession,
    isLoaded,
    userId
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
