import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [session, setSession] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('signup'); // 'signup' | 'login' | 'forgot'

  useEffect(() => {
    // 1. Fetch current active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. Subscribe to auth state updates (sign in, sign out, token refresh)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleOpenAuth = (mode = 'signup') => {
    setAuthView(mode);
    setAuthOpen(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar
        onOpenAuth={handleOpenAuth}
        user={session?.user}
        onLogout={handleLogout}
      />
      <Hero onOpenAuth={handleOpenAuth} />
      <Brands />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />

      {/* Authentication Modal with Supabase Integration */}
      <AuthModal
        isOpen={authOpen}
        initialView={authView}
        onClose={() => setAuthOpen(false)}
      />
    </div>
  );
}

export default App;