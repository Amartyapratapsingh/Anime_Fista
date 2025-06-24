import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleNavClick = (section: string) => {
    // Scroll to section or handle navigation
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // For sections that don't exist yet, show a coming soon message
      alert(`${section.charAt(0).toUpperCase() + section.slice(1)} section coming soon!`);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Anime', href: '#anime', action: () => handleNavClick('browse-section') },
    { label: 'Manga', href: '#manga', action: () => handleNavClick('browse-section') },
    { label: 'Characters', href: '#characters', action: () => handleNavClick('characters') },
    { label: 'People', href: '#people', action: () => handleNavClick('people') },
    { label: 'Community', href: '#community', action: () => handleNavClick('community') },
    { label: 'News', href: '#news', action: () => handleNavClick('news') },
  ];

  const notifications = [
    { id: 1, text: 'New episode of Attack on Titan is available!', time: '2 hours ago' },
    { id: 2, text: 'Your friend added Demon Slayer to their list', time: '5 hours ago' },
    { id: 3, text: 'Weekly anime recommendations are ready', time: '1 day ago' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/ChatGPT Image Jun 16, 2025, 10_45_10 AM-Photoroom.png" 
                  alt="Anime Fista Logo" 
                  className="h-14 w-14 rounded-full object-cover shadow-lg border-2 border-orange-300"
                  onError={(e) => {
                    // Fallback to original AF design if image fails to load
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement!;
                    parent.innerHTML = '<div class="h-14 w-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-black font-bold text-lg shadow-lg border-2 border-orange-300">AF</div>';
                  }}
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-red-300 transition-all duration-300">
                Anime Fista
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#browse" className="text-dark-300 hover:text-white transition-colors">
                Browse
              </a>
              <a href="#popular" className="text-dark-300 hover:text-white transition-colors">
                Popular
              </a>
              <a href="#recommendations" className="text-dark-300 hover:text-white transition-colors">
                Recommendations
              </a>
              <a href="#search" className="text-dark-300 hover:text-white transition-colors">
                Search
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-dark-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-white hover:text-primary-400 transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anime, manga, characters..."
                className="w-full bg-dark-800 text-white placeholder-dark-400 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-white hover:text-primary-400 transition-colors"
              >
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-primary-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  3
                </span>
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-dark-800 border border-dark-700 rounded-lg shadow-xl z-50 animate-fade-in">
                  <div className="p-4 border-b border-dark-700">
                    <h3 className="font-semibold text-white">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 hover:bg-dark-700 border-b border-dark-700 last:border-b-0 transition-colors">
                        <p className="text-white text-sm">{notification.text}</p>
                        <p className="text-dark-400 text-xs mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-dark-700">
                    <button className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="hidden md:flex items-center space-x-3">
              <button 
                onClick={() => setShowSignInModal(true)}
                className="bg-primary-400 hover:bg-primary-500 text-black px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Sign In
              </button>
              <button 
                onClick={() => setShowSignUpModal(true)}
                className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anime, manga, characters..."
              className="w-full bg-dark-800 text-white placeholder-dark-400 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-200"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-400 hover:text-primary-400 transition-colors"
            >
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-dark-800 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-white hover:text-primary-400 transition-colors duration-200 font-medium text-left px-2 py-1 rounded hover:bg-dark-800"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-dark-800 flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    setShowSignInModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-primary-400 hover:bg-primary-500 text-black px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    setShowSignUpModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-black px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Notification backdrop */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        />
      )}

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sign In</h2>
              <button 
                onClick={() => setShowSignInModal(false)}
                className="text-dark-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Enter your password"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary-400 hover:bg-primary-500 text-black py-2 rounded-lg font-medium transition-colors"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <button 
                onClick={() => {
                  setShowSignInModal(false);
                  setShowSignUpModal(true);
                }}
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                Don't have an account? Sign up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Sign Up</h2>
              <button 
                onClick={() => setShowSignUpModal(false)}
                className="text-dark-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Username</label>
                <input 
                  type="text" 
                  className="w-full bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Choose a username"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-dark-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  placeholder="Create a password"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary-400 hover:bg-primary-500 text-black py-2 rounded-lg font-medium transition-colors"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-4 text-center">
              <button 
                onClick={() => {
                  setShowSignUpModal(false);
                  setShowSignInModal(true);
                }}
                className="text-primary-400 hover:text-primary-300 text-sm"
              >
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;