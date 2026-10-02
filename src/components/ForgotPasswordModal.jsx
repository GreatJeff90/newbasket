import React, { useState } from 'react';

export default function ForgotPasswordModal({ isOpen, onClose, onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    if (onBackToLogin) onBackToLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
      {/* Mobile-Style Container */}
      <div className="relative w-full max-w-[390px] overflow-hidden rounded-[2.5rem] bg-white p-7 shadow-2xl ring-1 ring-slate-900/5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Dynamic Island / Top notch simulation */}
        <div className="mx-auto mb-4 h-4 w-24 rounded-full bg-slate-900" />

        {!submitted ? (
          /* ================= REQUEST LINK VIEW ================= */
          <div className="flex flex-col items-center text-center">
            {/* Lock / Key Minimalist Icon */}
            <div className="my-3 flex h-28 w-28 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              No worries! Enter the email address linked to your account and we’ll send you a recovery link.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
              {/* Email Input */}
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
                  placeholder="Enter your registered email"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to Login link */}
            <button
              type="button"
              onClick={onBackToLogin}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-500 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to login</span>
            </button>
          </div>
        ) : (
          /* ================= SUCCESS CONFIRMATION VIEW ================= */
          <div className="flex flex-col items-center text-center py-4">
            <div className="my-3 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Check Your Inbox
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[260px]">
              We have sent a password reset link to: <br />
              <strong className="text-slate-800">{email}</strong>
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-8 w-full rounded-full bg-slate-900 hover:bg-slate-800 py-3 text-xs font-semibold text-white transition-colors"
            >
              Return to Login
            </button>

            <p className="mt-4 text-[11px] text-slate-400">
              Didn't receive the email?{' '}
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-semibold text-orange-500 hover:underline"
              >
                Click to resend
              </button>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}