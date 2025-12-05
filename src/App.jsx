import { motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Add padding so content doesn't hide behind transparent navbar */}
      <main className="flex-1 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto px-4 py-6 md:py-8 lg:py-12"
        >
          <Outlet />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default App
