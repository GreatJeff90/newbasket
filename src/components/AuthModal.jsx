import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ isOpen, onClose, initialView = 'signup' }) {
  const [authView, setAuthView] = useState(initialView);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  if (!isOpen) return null;

  // 1. Email & Password Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('Verification email sent! Please check your inbox.');
      onClose();
    }
  };

  // 2. Email & Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      onClose();
    }
  };

  // 3. OAuth Provider Sign In (Google / Apple)
  const handleOAuthSignIn = async (provider) => {
    setErrorMessage('');
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) setErrorMessage(error.message);
  };

  // 4. Anonymous / Guest Sign In
  const handleAnonymousSignIn = async () => {
    setLoading(true);
    setErrorMessage('');
    const { error } = await supabase.auth.signInAnonymously();
    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      onClose();
    }
  };

  // 5. Password Reset
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMessage('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);
    if (error) {
      setErrorMessage(error.message);
    } else {
      setForgotSent(true);
    }
  };

  const handleSwitchToLogin = () => {
    setForgotSent(false);
    setErrorMessage('');
    setAuthView('login');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
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

        {/* Global Error Banner */}
        {errorMessage && (
          <div className="mb-4 rounded-xl bg-red-50 p-2.5 text-center text-xs font-medium text-red-600 border border-red-200">
            {errorMessage}
          </div>
        )}

        {/* ================= 1. SIGN UP VIEW ================= */}
        {authView === 'signup' && (
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Start Your Shop Hub
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[270px]">
              Build your customer community, sell products, and accept direct in-chat payments effortlessly.
            </p>

            {/* Email/Password Form */}
            <form onSubmit={handleSignUp} className="mt-5 w-full space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business email"
                className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Creating account...' : 'Create Merchant Account'}
              </button>
            </form>

            <div className="my-4 flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-[10px] uppercase text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            {/* OAuth Buttons */}
            <div className="w-full space-y-2">
              <button
                type="button"
                onClick={() => handleOAuthSignIn('google')}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                Continue with Google
              </button>
              <button
                type="button"
                onClick={() => handleOAuthSignIn('apple')}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-black cursor-pointer"
              >
                Continue with Apple
              </button>
              <button
                type="button"
                onClick={handleAnonymousSignIn}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                Continue As Guest
              </button>
            </div>

            <p className="mt-5 text-[11px] text-slate-500">
              Already have a merchant account?{' '}
              <button
                type="button"
                onClick={() => { setErrorMessage(''); setAuthView('login'); }}
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
              Merchant Login
            </h2>
            <p className="mt-1 text-xs text-slate-500 text-center">
              Welcome back to your New Basket workspace
            </p>

            <form onSubmit={handleLogin} className="mt-6 w-full space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business email"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none"
              />

              <div className="text-right">
                <button
                  type="button"
                  onClick={() => { setErrorMessage(''); setAuthView('forgot'); }}
                  className="text-[11px] font-semibold text-slate-500 hover:text-orange-500 cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {loading ? 'Logging in...' : 'Access Dashboard'}
              </button>
            </form>

            <div className="my-4 flex w-full items-center gap-3">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-[10px] uppercase text-slate-400">or</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="w-full space-y-2">
              <button
                type="button"
                onClick={() => handleOAuthSignIn('google')}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-slate-50 border border-slate-200/80 py-2.5 text-xs font-semibold text-slate-700 transition hover:bg-orange-50 hover:border-orange-200 cursor-pointer"
              >
                Continue with Google
              </button>
            </div>

            <p className="mt-5 text-[11px] text-slate-500">
              New to New Basket?{' '}
              <button
                type="button"
                onClick={() => { setErrorMessage(''); setAuthView('signup'); }}
                className="font-bold text-orange-500 hover:text-orange-600 cursor-pointer"
              >
                Create your hub
              </button>
            </p>
          </div>
        )}

        {/* ================= 3. FORGOT PASSWORD VIEW ================= */}
        {authView === 'forgot' && (
          <div className="flex flex-col items-center text-center">
            {!forgotSent ? (
              <>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Forgot Password?
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 max-w-[260px]">
                  Enter your email and we’ll send instructions to recover your dashboard.
                </p>

                <form onSubmit={handleForgotSubmit} className="mt-6 w-full space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter registered email"
                    className="w-full rounded-2xl border border-slate-200 bg-white py-3 px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white shadow-sm shadow-orange-500/30 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'Sending...' : 'Send Recovery Link'}
                  </button>
                </form>

                <button
                  type="button"
                  onClick={handleSwitchToLogin}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  ← Back to login
                </button>
              </>
            ) : (
              <div className="py-4">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Check Your Inbox
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Password reset link sent to: <br />
                  <strong className="text-slate-800 break-all">{email}</strong>
                </p>
                <button
                  type="button"
                  onClick={handleSwitchToLogin}
                  className="mt-6 w-full rounded-full bg-orange-500 hover:bg-orange-600 py-3 text-xs font-semibold text-white cursor-pointer"
                >
                  Return to Login
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}