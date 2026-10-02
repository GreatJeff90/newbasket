import React, { useState } from 'react';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const handleAuthClick = (mode) => {
    setMobileMenuOpen(false);
    if (onOpenAuth) {
      onOpenAuth(mode);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-orange-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo: Basketball Icon + Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/25 transition-transform duration-200 group-hover:scale-105">
              <svg 
                className="w-6 h-6 stroke-white stroke-[1.8] fill-none" 
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2.5 12h19" strokeLinecap="round" />
                <path d="M12 2.5v19" strokeLinecap="round" />
                <path d="M4.5 4.5c4.5 3.5 4.5 11.5 0 15" strokeLinecap="round" />
                <path d="M19.5 4.5c-4.5 3.5-4.5 11.5 0 15" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                NEW<span className="text-orange-500">BASKET</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Official
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action / Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="text-sm font-semibold text-slate-700 hover:text-orange-500 px-3 py-2 transition-colors duration-150 cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg shadow-sm shadow-orange-500/30 transition-all duration-150 hover:shadow-orange-500/40 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-600 hover:text-orange-500 hover:bg-orange-50 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-orange-100 bg-white px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleAuthClick('login')}
              className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors cursor-pointer"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => handleAuthClick('signup')}
              className="w-full text-center py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}