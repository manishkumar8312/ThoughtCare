import { Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-white/60 backdrop-blur-xl border-t border-gray-300/40 px-6 md:px-16 lg:px-24 xl:px-32 py-12 text-gray-600">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-10 border-b border-gray-400/30">

        {/* LOGO + ABOUT */}
        <div className="max-w-sm">
          <div className="flex items-center space-x-3">
            <img src="/src/assets/logo.png" className="w-10 h-10 rounded-full" />
            <span className="text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              ThoughtCare
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed">
            Your compassionate mental wellness companion—helping you track emotions,
            journal your thoughts, practice mindfulness, and care for your emotional wellbeing.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a className="hover:text-purple-600"><Facebook size={20} /></a>
            <a className="hover:text-purple-600"><Twitter size={20} /></a>
            <a className="hover:text-purple-600"><Instagram size={20} /></a>
            <a className="hover:text-purple-600"><Youtube size={20} /></a>
          </div>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-purple-600">Home</a></li>
            <li><a className="hover:text-purple-600">About Us</a></li>
            <li><a className="hover:text-purple-600">Contact Us</a></li>
            <li><a className="hover:text-purple-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>+91 123456789</li>
            <li>support@thoughtcare.com</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs md:text-sm pt-6 text-gray-500">
        © 2025 ThoughtCare — All Rights Reserved.
      </p>

    </footer>
  );
}
