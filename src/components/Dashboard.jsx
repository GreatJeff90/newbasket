import React, { useState } from 'react';

export default function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const stats = [
    {
      label: 'Total Revenue',
      value: selectedCurrency === 'USD' ? '$12,840.50' : '₦19,260,750',
      change: '+14.2%',
      isPositive: true,
    },
    {
      label: 'Active Customers',
      value: '1,429',
      change: '+8.1%',
      isPositive: true,
    },
    {
      label: 'In-Chat Orders',
      value: '384',
      change: '+22.5%',
      isPositive: true,
    },
    {
      label: 'Pending Dispatches',
      value: '18',
      change: '-3.4%',
      isPositive: false,
    },
  ];

  const recentTransactions = [
    {
      id: 'TXN-9021',
      customer: 'Amara Vance',
      product: 'Air Cushion Elite Low',
      amount: selectedCurrency === 'USD' ? '$140.00' : '₦210,000',
      channel: 'Community Chat #Sneakers',
      status: 'Completed',
      date: 'Today, 10:14 AM',
    },
    {
      id: 'TXN-9020',
      customer: 'Tariq Al-Mansoor',
      product: 'Pro Grip Basketball Size 7',
      amount: selectedCurrency === 'USD' ? '$65.00' : '₦97,500',
      channel: 'Direct Message',
      status: 'Processing',
      date: 'Today, 09:42 AM',
    },
    {
      id: 'TXN-9019',
      customer: 'Elena Rostova',
      product: 'Performance Jersey Set',
      amount: selectedCurrency === 'USD' ? '$85.00' : '₦127,500',
      channel: 'Storefront Link',
      status: 'Completed',
      date: 'Yesterday',
    },
    {
      id: 'TXN-9018',
      customer: 'Kelechi Okafor',
      product: 'Shooting Sleeve (Pair)',
      amount: selectedCurrency === 'USD' ? '$28.00' : '₦42,000',
      channel: 'Community Chat #Hoops',
      status: 'Completed',
      date: 'Yesterday',
    },
  ];

  const liveThreads = [
    {
      name: 'Lakers Fanatics Group',
      lastMessage: 'Invoice accepted. Sending shipping address now!',
      time: '2m ago',
      unread: 2,
    },
    {
      name: 'Marcus Bell',
      lastMessage: 'Can you bill this in NGN instead of USD?',
      time: '14m ago',
      unread: 1,
    },
    {
      name: 'Sunday Run Squad',
      lastMessage: 'Order confirmed for 10 training vests.',
      time: '1h ago',
      unread: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200/80 p-5 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2.5 pb-8 border-b border-slate-100">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/25">
              <svg className="w-6 h-6 stroke-white stroke-[1.8] fill-none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2.5 12h19" strokeLinecap="round" />
                <path d="M12 2.5v19" strokeLinecap="round" />
                <path d="M4.5 4.5c4.5 3.5 4.5 11.5 0 15" strokeLinecap="round" />
                <path d="M19.5 4.5c-4.5 3.5-4.5 11.5 0 15" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-none">
                NEW<span className="text-orange-500">BASKET</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                Merchant Hub
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="mt-6 space-y-1.5">
            {[
              { id: 'overview', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { id: 'chats', label: 'In-Chat Sales', badge: '3', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
              { id: 'products', label: 'Products & Drops', icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' },
              { id: 'payouts', label: 'Settlements & Wallet', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
              { id: 'settings', label: 'Store Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-xs shadow-orange-500/25'
                    : 'text-slate-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                  </svg>
                  <span>{tab.label}</span>
                </div>
                {tab.badge && (
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      activeTab === tab.id ? 'bg-white text-orange-600' : 'bg-orange-100 text-orange-600'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center shrink-0">
              {user?.email?.charAt(0).toUpperCase() || 'M'}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-slate-800 truncate">
                {user?.email || 'merchant@newbasket.com'}
              </p>
              <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" /> Live Store
              </span>
            </div>
          </div>
          <button
            onClick={onLogout}
            title="Log out"
            className="p-1.5 text-slate-400 hover:text-orange-500 rounded-lg hover:bg-orange-50 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Top Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Merchant Overview
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real-time monitoring of community channels, orders, and settlements.
            </p>
          </div>

          {/* Action Row & Currency Switcher */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Currency Pill */}
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurrency === 'USD' ? 'bg-orange-500 text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setSelectedCurrency('NGN')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCurrency === 'NGN' ? 'bg-orange-500 text-white' : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                NGN (₦)
              </button>
            </div>

            {/* Quick Create Invoice / Product CTA */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-xs shadow-orange-500/30 transition-colors cursor-pointer ml-auto sm:ml-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
              <span>New Drop</span>
            </button>
          </div>
        </header>

        {/* 4 Analytics Metric Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-500">{stat.label}</span>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</span>
                <span
                  className={`text-xs font-bold ${
                    stat.isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
                  } px-2 py-0.5 rounded-full`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Split Grid: In-Chat Interactions & Recent Settlements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Live Community Chats Column (1 Col) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Live Chat Checkout
                </h2>
                <a href="#chats" className="text-xs font-semibold text-orange-500 hover:text-orange-600">
                  View All
                </a>
              </div>

              <div className="mt-4 divide-y divide-slate-50 space-y-1">
                {liveThreads.map((thread) => (
                  <div
                    key={thread.name}
                    className="py-3 flex items-start justify-between gap-3 hover:bg-orange-50/50 p-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-800 truncate">{thread.name}</p>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">{thread.lastMessage}</p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[10px] text-slate-400">{thread.time}</span>
                      {thread.unread > 0 && (
                        <span className="w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center">
                          {thread.unread}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick in-chat payment link generator */}
            <div className="mt-6 rounded-xl bg-orange-50/70 border border-orange-100 p-3.5 text-center">
              <p className="text-xs font-bold text-slate-900">Direct In-Chat Billing</p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Drop instant payment cards inside customer threads.
              </p>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-xs font-semibold text-white hover:bg-black transition-colors cursor-pointer"
              >
                Create Payment Link
              </button>
            </div>
          </div>

          {/* Recent Orders / Transactions Table (2 Cols) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Recent Transactions</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Real-time payments received across your storefront</p>
                </div>
                <button
                  type="button"
                  className="text-xs font-semibold text-orange-500 hover:text-orange-600 cursor-pointer"
                >
                  Export CSV
                </button>
              </div>

              {/* Transactions Table */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Customer</th>
                      <th className="pb-3">Item</th>
                      <th className="pb-3">Channel</th>
                      <th className="pb-3">Amount</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {recentTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 font-semibold text-slate-800">{tx.customer}</td>
                        <td className="py-3 text-slate-600">{tx.product}</td>
                        <td className="py-3 text-slate-500 text-[11px]">{tx.channel}</td>
                        <td className="py-3 font-bold text-slate-900">{tx.amount}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              tx.status === 'Completed'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'bg-amber-50 text-amber-600'
                            }`}
                          >
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Showing 4 of 384 transactions</span>
              <div className="flex gap-2">
                <button type="button" className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                  Prev
                </button>
                <button type="button" className="px-2.5 py-1 rounded-md border border-slate-200 hover:bg-slate-50">
                  Next
                </button>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}