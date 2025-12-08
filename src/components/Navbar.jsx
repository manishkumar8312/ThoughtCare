import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  Activity,
  BookOpen,
  Headphones,
  MessageCircle,
  Library,
  Search,
  Menu,
  X
} from 'lucide-react'
import AuthButton from './AuthButton.jsx'

const Navbar = () => {
  const location = useLocation()

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Mood', path: '/mood-tracker', icon: Activity },
    { name: 'Journal', path: '/journal', icon: BookOpen },
    { name: 'Meditate', path: '/meditation', icon: Headphones },
    { name: 'Chat', path: '/chat', icon: MessageCircle },
    { name: 'About', path: '/resources', icon: Library }
  ]

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        backdrop-blur-xl border-b border-white/10 flex items-center justify-between
        px-6 md:px-16 lg:px-24 xl:px-32
        ${isScrolled ? "bg-white/40 shadow-lg py-3" : "bg-transparent py-5"}
      `}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/src/assets/logo.png"
          alt="ThoughtCare Logo"
          className={`transition-all duration-500 rounded-full ${isScrolled ? "w-7 h-7" : "w-9 h-9"}`}
        />
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          ThoughtCare
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link, i) => {
          const Icon = link.icon
          const isActive = location.pathname === link.path

          return (
            <Link
              key={i}
              to={link.path}
              className={`
                group flex items-center gap-2 text-sm font-medium transition-all duration-300
                ${isScrolled ? "text-gray-700" : "text-white"}
                ${isActive ? "text-purple-600 font-semibold" : ""}
              `}
            >
              <Icon className="w-4 h-4" />
              {link.name}

              <span
                className={`
                  block h-0.5 bg-purple-600 transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </Link>
          )
        })}

        <button
          className={`
            border px-4 py-1 rounded-full text-sm transition-all
            ${isScrolled
              ? "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              : "border-white text-white hover:bg-white/70 hover:text-purple-600"
            }
          `}
        >
          New Features
        </button>
      </div>

      {/* Right Side Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Search
          className={`h-5 w-6 cursor-pointer transition-all duration-300
            ${isScrolled ? "text-gray-700" : "text-white"}
          `}
        />
        <AuthButton isMobile={false} />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <Search
          className={`h-5 w-6 transition-all duration-300
            ${isScrolled ? "text-gray-700" : "text-white"}
          `}
        />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-all duration-300
            ${isScrolled ? "text-gray-700" : "text-white"}
          `}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center
          justify-center gap-7 text-gray-800 text-lg transition-all duration-500 md:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button className="absolute top-5 right-5" onClick={() => setIsMenuOpen(false)}>
          <X className="h-7 w-7 text-gray-700" />
        </button>

        {/* Mobile Logo */}
        <Link
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          <img src="/src/assets/logo.png" className="w-9 h-9 rounded-full" />
          ThoughtCare
        </Link>

        {/* Mobile Nav Links */}
        {navLinks.map((link, i) => {
          const Icon = link.icon
          const isActive = location.pathname === link.path

          return (
            <Link
              key={i}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 text-lg transition-all
                ${isActive ? "text-purple-600 font-semibold" : "text-gray-700"}
              `}
            >
              <Icon className="w-5 h-5" />
              {link.name}
            </Link>
          )
        })}

        <button className="mt-4 border border-purple-600 px-5 py-1 rounded-full text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
          New Features
        </button>

        <div className="flex flex-col gap-4 items-center mt-4">
          <Search className="h-5 w-6 text-gray-700" />
          <AuthButton isMobile={true} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
