import { Toaster } from '@/components/ui/sonner';
import Header from './sections/Header';
import Hero from './sections/Hero';
import WhatThisIs from './sections/WhatThisIs';
import Plans from './sections/Plans';
import Different from './sections/Different';
import Work from './sections/Work';
import Brands from './sections/Brands';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <WhatThisIs />
      <Plans />
      <Different />
      <Work />
      <Brands />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
