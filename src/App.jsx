import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <Hero onOpenAuth={() => setAuthOpen(true)} />
      <Brands />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Footer />

      {/* Sign Up / Login Screen Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;