import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, initialView = 'signup' }) {
  const [authView, setAuthView] = useState(initialView); // 'signup' | 'login' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setForgotSent(true);
    }
  };

  const handleSwitchToLogin = () => {
    setForgotSent(false);
    setAuthView('login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      {/* Modal Card Frame */}
      <div className="relative w-full max-w-[390px] overflow-hidden rounded-[2.5rem] bg-white p-7 pt-9 shadow-2xl ring-1 ring-orange-500/10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ================= 1. SIGN UP VIEW ================= */}
        {authView === 'signup' && (
          <div className="flex flex-col items-center text-center">
            {/* Minimalist Line Illustration */}
            <div className="my-2 flex h-44 w-44 items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-full w-full stroke-slate-900 stroke-[2.2] fill-none">
                <circle cx="100" cy="55" r="16" />
                <path d="M84 55a16 16 0 0 1 32 0" />
                <rect x="80" y="47" width="5" height="15" rx="2" fill="currentColor" />
                <rect x="115" y="47" width="5" height="15" rx="2" fill="currentColor" />
                <circle cx="95" cy="56" r="3.5" />
                <circle cx="105" cy="56" r="3.5" />
                <path d="M98.5 56h3" />
                <path d="M82 82c5-10 31-10 36 0v22H82V82z" />
                <path d="M82 85l-18 12 6 8 12-10" />
                <path d="M118 85l18 12-6 8-12-10" />
                {/* Laptop & Logo Accent */}
                <path d="M72 135l10-28h36l10 28H72z" fill="#0f172a" />
                <circle cx="100" cy="120" r="3.5" fill="#f97316" stroke="none" />
                <path d="M55 137h90" strokeLinecap="round" />
              </svg>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Private Coaching
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[260px]">
              Add one-on-one, confidential sessions for only $35 per session.
            </p>

            {/* Step Segments */}
            <div className="mt-5 mb-6 flex w-full gap-2 px-6">
              <span className="h-1 flex-1 rounded-full bg-orange-500" />
              <span className="h-1 flex-1 rounded-full bg-orange-500" />
              <span className="h-1 flex-1 rounded-full bg-orange-100" />
            </div>

            {/* Auth Actions */}
            <div className="w-full space-y-2.5">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-3 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.35 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.17 0 9.99 0 12s.46 3.83 1.26 5.42l4.02-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.93 6.72-4.93z"/>
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/25 transition hover:bg-orange-600 cursor-pointer"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.99 1.69-.86 2.7.97.08 2-.45 2.56-1.2z" />
                </svg>
                Continue with Apple
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-3 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Continue As Guest
              </button>
            </div>

            {/* Switch to Login */}
            <p className="mt-5 text-[11px] text-slate-500">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setAuthView('login')}
                className="font-bold text-orange-500 hover:text-orange-600 cursor-pointer"
              >
                Log in
              </button>
            </p>
          </div>
        )}

        {/* ================= 2. LOGIN VIEW ================= */}
        {authView === 'login' && (
          <div className="flex flex-col items-center">
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 tracking-tight">
              Login
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 w-full space-y-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                />
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                />
              </div>

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setAuthView('forgot')}
                  className="text-[11px] font-semibold text-slate-500 hover:text-orange-500 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors cursor-pointer"
              >
                Login
              </button>
            </form>

            <div className="my-5 flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-[10px] uppercase text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="w-full space-y-2">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                Continue with Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-orange-500 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-orange-600 cursor-pointer"
              >
                Continue with Apple
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                Continue As Guest
              </button>
            </div>

            <p className="mt-5 text-[11px] text-slate-500">
              Need an account?{' '}
              <button
                type="button"
                onClick={() => setAuthView('signup')}
                className="font-bold text-orange-500 hover:text-orange-600 cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </div>
        )}

        {/* ================= 3. FORGOT PASSWORD VIEW ================= */}
        {authView === 'forgot' && (
          <div className="flex flex-col items-center text-center">
            {!forgotSent ? (
              <>
                <div className="my-3 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50 text-orange-500 ring-8 ring-orange-50/50">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Forgot Password?
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[260px]">
                  Enter the email linked to your account and we’ll send you instructions to reset your password.
                </p>

                <form onSubmit={handleForgotSubmit} className="mt-6 w-full space-y-4">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                </form>

                <button
                  type="button"
                  onClick={handleSwitchToLogin}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to login</span>
                </button>
              </>
            ) : (
              <div className="py-4">
                <div className="mx-auto my-3 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-orange-500 ring-8 ring-orange-50/50">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Check Your Inbox
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[260px] mx-auto">
                  We've sent a recovery link to: <br />
                  <strong className="text-slate-800 break-all">{email}</strong>
                </p>

                <button
                  type="button"
                  onClick={handleSwitchToLogin}
                  className="mt-8 w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors cursor-pointer"
                >
                  Return to Login
                </button>

                <p className="mt-4 text-[11px] text-slate-400">
                  Didn't receive the email?{' '}
                  <button
                    type="button"
                    onClick={() => setForgotSent(false)}
                    className="font-semibold text-orange-500 hover:underline cursor-pointer"
                  >
                    Resend
                  </button>
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}