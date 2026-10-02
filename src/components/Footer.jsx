import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const navColumns = [
    {
      title: 'Platform',
      links: [
        { label: 'Plans & Pricing', href: '#pricing' },
        { label: 'Personal AI Manager', href: '#ai-manager' },
        { label: 'AI Business Writer', href: '#ai-writer' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
        { label: 'News', href: '#news' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#documentation' },
        { label: 'Papers', href: '#papers' },
        { label: 'Press Conferences', href: '#press' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Newsletter Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              Join our newsletter to <br className="hidden sm:inline" />
              keep up to date with us!
            </h3>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[280px] sm:min-w-[320px]">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 shadow-xs"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-orange-500 text-white hover:bg-[#000] text-slate-900 font-medium px-6 py-2.5 text-sm transition-colors duration-150 shadow-xs text-center"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Middle Section: Brand & Link Columns */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-xs">
                <svg className="w-5 h-5 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2.5 12h19" strokeLinecap="round" />
                  <path d="M12 2.5v19" strokeLinecap="round" />
                  <path d="M4.5 4.5c4.5 3.5 4.5 11.5 0 15" strokeLinecap="round" />
                  <path d="M19.5 4.5c-4.5 3.5-4.5 11.5 0 15" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-extrabold text-lg tracking-tight text-slate-900">
                NEW<span className="text-orange-500">BASKET</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              We growing up your business with personal AI manager.
            </p>
          </div>

          {/* Navigation Links Columns */}
          {navColumns.map((col) => (
            <div key={col.title} className="space-y-3.5">
              <h4 className="text-xs font-semibold text-slate-900 tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 New Basket Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:text-slate-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}