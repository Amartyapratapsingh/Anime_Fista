import React, { useState } from 'react';
import { Heart, Moon, Sun, Youtube, Facebook, Twitter, Instagram, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const socialLinks = [
    { 
      icon: Youtube, 
      label: 'YouTube', 
      href: 'https://www.youtube.com/@Anime_Fista_1',
      color: 'hover:text-red-500'
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      href: '#',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      href: '#',
      color: 'hover:text-sky-400'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      href: '#',
      color: 'hover:text-pink-500'
    },
    { 
      icon: MessageSquare, 
      label: 'Discord', 
      href: '#',
      color: 'hover:text-indigo-500'
    },
  ];

  const footerSections = [
    {
      title: 'Discover',
      links: [
        { label: 'Popular Anime', href: '#' },
        { label: 'Seasonal Anime', href: '#' },
        { label: 'Top Rated', href: '#' },
        { label: 'New Releases', href: '#' },
        { label: 'Recommendations', href: '#' },
      ],
    },
    {
      title: 'Browse',
      links: [
        { label: 'All Anime', href: '#' },
        { label: 'All Manga', href: '#' },
        { label: 'Characters', href: '#' },
        { label: 'People', href: '#' },
        { label: 'Studios', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Forums', href: '#' },
        { label: 'Reviews', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Events', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'API', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-dark-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center font-bold text-black">
                AF
              </div>
              <h3 className="text-xl font-bold">Anime Fista</h3>
            </div>
            <p className="text-dark-300 mb-6 leading-relaxed">
              Your ultimate destination for anime and manga discovery. Track your favorites, 
              get personalized recommendations, and connect with fellow anime enthusiasts.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-dark-400">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <Heart size={14} className="text-primary-400 fill-current" />
              <span>for the anime community</span>
            </div>
            <span className="hidden lg:block">•</span>
            <span>© 2024 Anime Fista. All rights reserved.</span>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-dark-400">Theme:</span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center space-x-2 bg-dark-800 hover:bg-dark-700 px-3 py-2 rounded-lg transition-colors"
            >
              {isDarkMode ? (
                <>
                  <Moon size={16} className="text-primary-400" />
                  <span className="text-sm">Dark</span>
                </>
              ) : (
                <>
                  <Sun size={16} className="text-yellow-400" />
                  <span className="text-sm">Light</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Partnership/Support Section */}
        <div className="mt-8 pt-8 border-t border-dark-800">
          <div className="text-center">
            <p className="text-dark-400 text-sm mb-4">
              Support Anime Fista and get exclusive perks
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://patreon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-400 hover:bg-primary-500 text-black px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Support on Patreon
              </a>
              <a
                href="https://www.youtube.com/@Anime_Fista_1"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;