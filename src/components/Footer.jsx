import { Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-12 md:mt-16 lg:mt-24 bg-white/40 backdrop-blur-xl border-t border-white/50 rounded-t-2xl md:rounded-t-3xl shadow-inner py-8 md:py-12 text-gray-600">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 md:gap-12 lg:gap-16 pb-8 md:pb-10 border-b border-gray-300/40">

        {/* LOGO + ABOUT */}
        <div className="w-full lg:max-w-sm">
          <div className="flex items-center space-x-2 md:space-x-3">
            <img src="/src/assets/logo.png" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md" />
            <span className="text-xl md:text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              ThoughtCare
            </span>
          </div>

          <p className="mt-4 md:mt-5 text-sm leading-relaxed text-gray-600">
            Your trusted mental wellness companion — helping you track your emotions,
            journal freely, meditate mindfully, and find emotional balance each day.
          </p>

          {/* Social Icons (Clickable Links) */}
          <div className="flex gap-3 md:gap-4 mt-5 md:mt-6 text-gray-500">

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition p-1"
            >
              <Facebook size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/mindfull-thoughts/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition p-1"
            >
              <Linkedin size={18} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@AbundanceEnergy2104"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition p-1"
            >
              <Youtube size={18} />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">

          <div>
            <h2 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Company</h2>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li><a href="/" className="hover:text-purple-500">Home</a></li>
              <li><a href="/about" className="hover:text-purple-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-purple-500">Contact Us</a></li>
              <li><a href="/privacy" className="hover:text-purple-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-3 md:mb-4 text-sm md:text-base">Get in Touch</h2>
            <ul className="space-y-1.5 md:space-y-2 text-sm">
              <li className="break-all">+91 987654321</li>
              <li className="break-all">support@thoughtcare.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-500">
        © 2025 ThoughtCare — All Rights Reserved.
      </p>

    </div>
    </footer>
  );
}
