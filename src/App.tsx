import { Toaster } from '@/components/ui/sonner';
import CustomCursor from './components/CustomCursor';
import Header from './sections/Header';
import Hero3D from './sections/Hero3D';
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
    <div className="min-h-screen bg-cream cursor-none md:cursor-none">
      <CustomCursor />
      <Header />
      <Hero3D />
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
