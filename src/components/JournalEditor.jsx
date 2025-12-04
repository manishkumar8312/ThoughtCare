import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useAppContext } from '../context/AppContext.jsx'
import { Save, Trash2, Calendar, Heart } from 'lucide-react'

const JournalEditor = () => {
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const { journalEntries, addJournalEntry, deleteJournalEntry } = useAppContext()

  const handleSave = () => {
    if (content.trim()) {
      const fullContent = title ? `<h2>${title}</h2><br/>${content}` : content
      addJournalEntry(fullContent)
      setContent('')
      setTitle('')
    }
  }

  const handleDelete = (id) => {
    deleteJournalEntry(id)
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'blockquote', 'code-block',
    'list', 'bullet',
    'color', 'background',
    'link', 'image'
  ]

  return (
    <div className="space-y-6">
      {/* Editor Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800">Write Your Thoughts</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Heart className="w-4 h-4" />
              <span>Private & Secure</span>
            </div>
          </div>

          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entry title (optional)"
              className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pastel-purple mb-4"
            />
            
            <div className="bg-white rounded-xl overflow-hidden">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="What's on your mind today? Share your thoughts, feelings, and experiences..."
                className="min-h-[300px]"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => { setContent(''); setTitle('') }}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
            >
              Clear
            </button>
            <button
              onClick={handleSave}
              disabled={!content.trim()}
              className="pastel-button inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-4 h-4" />
              <span>Save Entry</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Previous Entries */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-bold text-gray-800">Previous Entries</h3>
        
        {journalEntries.length > 0 ? (
          <div className="space-y-4">
            {journalEntries.slice().reverse().map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-card p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(entry.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(entry.date).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div 
                  className="prose prose-sm max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: entry.content }}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 text-center">
            <Heart className="w-12 h-12 text-pastel-pink mx-auto mb-4" />
            <p className="text-gray-600">No journal entries yet. Start writing to document your journey!</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default JournalEditor
