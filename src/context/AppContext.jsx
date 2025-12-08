import { createContext, useContext, useState, useEffect } from 'react'
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
  const [darkMode, setDarkMode] = useState(false)
  const [moodData, setMoodData] = useLocalStorage('moodData', [])
  const [journalEntries, setJournalEntries] = useLocalStorage('journalEntries', [])
  const [meditationSessions, setMeditationSessions] = useLocalStorage('meditationSessions', [])

  const addMoodEntry = (mood, note) => {
    const newEntry = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toISOString(),
      timestamp: new Date().getTime()
    }
    setMoodData([...moodData, newEntry])
  }

  const addJournalEntry = (entry) => {
    const newEntry = {
      id: Date.now(),
      content: entry,
      date: new Date().toISOString(),
      timestamp: new Date().getTime()
    }
    setJournalEntries([...journalEntries, newEntry])
  }

  const addMeditationSession = (duration) => {
    const newSession = {
      id: Date.now(),
      duration,
      date: new Date().toISOString(),
      timestamp: new Date().getTime()
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
    addMeditationSession
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
