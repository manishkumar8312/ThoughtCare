import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { useAppContext } from '../context/AppContext.jsx'
import { Calendar, TrendingUp } from 'lucide-react'

const moodValues = {
  'Happy': 5,
  'Excited': 5,
  'Calm': 4,
  'Neutral': 3,
  'Tired': 2,
  'Sad': 2,
  'Anxious': 1,
  'Angry': 1
}

const moodColors = {
  'Happy': '#FFB3C1',
  'Excited': '#FFB3C1',
  'Calm': '#B6D9FF',
  'Neutral': '#B6FFC8',
  'Tired': '#C8B6FF',
  'Sad': '#B6D9FF',
  'Anxious': '#C8B6FF',
  'Angry': '#FFB3C1'
}

const MoodHistoryChart = () => {
  const { moodData, getRecentMoods, getMoodStats } = useAppContext()
  const recentMoods = getRecentMoods(7)
  
  // Prepare data for line chart (last 7 days)
  const chartData = recentMoods.map(entry => ({
    date: new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short' }),
    moodValue: moodValues[entry.mood] || 3,
    mood: entry.mood,
    fullDate: new Date(entry.date).toLocaleDateString()
  })).reverse()

  // Prepare data for bar chart (mood frequency)
  const moodStats = getMoodStats()
  const barChartData = Object.entries(moodStats).map(([mood, count]) => ({
    mood,
    count,
    fill: moodColors[mood] || '#FFB3C1'
  }))

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-gray-600">
            {payload[0].payload.mood}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Line Chart - Mood Trends */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-pastel-purple" />
            <h3 className="text-xl font-bold text-gray-800">Weekly Mood Trends</h3>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>Last 7 days</span>
          </div>
        </div>
        
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="date" 
                stroke="#666"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                stroke="#666"
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="moodValue" 
                stroke="#C8B6FF" 
                strokeWidth={3}
                dot={{ fill: '#FFB3C1', r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-64 flex items-center justify-center text-gray-500">
            <p>No mood data available. Start tracking your mood to see trends!</p>
          </div>
        )}
      </div>

      {/* Bar Chart - Mood Frequency */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-5 h-5 text-pastel-blue" />
          <h3 className="text-xl font-bold text-gray-800">Mood Distribution</h3>
        </div>
        
        {barChartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="mood" 
                stroke="#666"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#666"
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-48 flex items-center justify-center text-gray-500">
            <p>No mood data available yet.</p>
          </div>
        )}
      </div>

      {/* Recent Entries */}
      {recentMoods.length > 0 && (
        <div className="glass-card p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Mood Entries</h3>
          <div className="space-y-3">
            {recentMoods.slice(-5).reverse().map((entry) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between p-3 bg-white/30 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {moods.find(m => m.label === entry.mood)?.emoji || '😊'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{entry.mood}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(entry.date).toLocaleDateString()} at {new Date(entry.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                {entry.note && (
                  <p className="text-sm text-gray-600 max-w-xs truncate">
                    {entry.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

// Import moods array for emoji lookup
const moods = [
  { emoji: '😊', label: 'Happy', color: 'bg-yellow-200' },
  { emoji: '😌', label: 'Calm', color: 'bg-blue-200' },
  { emoji: '😔', label: 'Sad', color: 'bg-gray-200' },
  { emoji: '😰', label: 'Anxious', color: 'bg-purple-200' },
  { emoji: '😡', label: 'Angry', color: 'bg-red-200' },
  { emoji: '😴', label: 'Tired', color: 'bg-indigo-200' },
  { emoji: '🤗', label: 'Excited', color: 'bg-pink-200' },
  { emoji: '😐', label: 'Neutral', color: 'bg-green-200' }
]

export default MoodHistoryChart
