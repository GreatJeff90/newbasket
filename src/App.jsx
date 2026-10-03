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
import Dashboard from './components/Dashboard';

function App() {
  const [session, setSession] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('signup');

  useEffect(() => {
    // 1. Fetch current active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. Subscribe to auth state changes
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
    setSession(null);
  };

  // If user is authenticated, show the merchant dashboard
  if (session?.user) {
    return <Dashboard user={session.user} onLogout={handleLogout} />;
  }

  // Otherwise, show the public landing page
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar
        onOpenAuth={handleOpenAuth}
        user={session?.user}
        onLogout={handleLogout}
      />
      <Hero onOpenAuth={handleOpenAuth} />
      <Brands />
      <Services onOpenAuth={handleOpenAuth} />
      <HowItWorks />
      <Testimonials />
      <Footer />

      <AuthModal
        isOpen={authOpen}
        initialView={authView}
        onClose={() => setAuthOpen(false)}
      />
    </div>
  );
}

export default App;