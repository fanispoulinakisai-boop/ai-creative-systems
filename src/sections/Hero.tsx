import { useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      
      const shapes = containerRef.current.querySelectorAll('.glass-shape');
      shapes.forEach((shape, i) => {
        const factor = (i + 1) * 0.4;
        (shape as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById('what-this-is')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Background gradient blobs - softer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-orange/25 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-cyan/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[50%] right-[30%] w-[350px] h-[350px] bg-purple/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '-1s' }} />
        <div className="absolute bottom-[30%] left-[25%] w-[300px] h-[300px] bg-yellow/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Floating glass shapes - thick, glossy, jelly-like */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large vertical orange pill */}
        <div 
          className="glass-shape absolute top-[10%] left-[8%] w-36 h-72 glass-jelly glass-orange animate-float transition-transform duration-300 ease-out"
          style={{ animationDelay: '0s', borderRadius: '4rem' }}
        />
        
        {/* Large horizontal cyan pill */}
        <div 
          className="glass-shape absolute top-[15%] right-[12%] w-56 h-40 glass-jelly glass-cyan animate-float-slow transition-transform duration-300 ease-out"
          style={{ animationDelay: '-1s', borderRadius: '3rem' }}
        />
        
        {/* Medium yellow pill */}
        <div 
          className="glass-shape absolute bottom-[20%] left-[15%] w-44 h-52 glass-jelly glass-yellow animate-float transition-transform duration-300 ease-out"
          style={{ animationDelay: '-2s', borderRadius: '3.5rem' }}
        />
        
        {/* Large purple pill */}
        <div 
          className="glass-shape absolute bottom-[15%] right-[8%] w-48 h-64 glass-jelly glass-purple animate-float-slow transition-transform duration-300 ease-out"
          style={{ animationDelay: '-3s', borderRadius: '4rem' }}
        />
        
        {/* Small pink circle */}
        <div 
          className="glass-shape absolute top-[55%] left-[5%] w-28 h-28 glass-jelly glass-pink animate-float transition-transform duration-300 ease-out"
          style={{ animationDelay: '-1.5s', borderRadius: '50%' }}
        />
        
        {/* Small cyan vertical pill */}
        <div 
          className="glass-shape absolute top-[8%] right-[35%] w-20 h-36 glass-jelly glass-cyan animate-float-slow transition-transform duration-300 ease-out"
          style={{ animationDelay: '-2.5s', borderRadius: '2rem' }}
        />
        
        {/* Medium orange horizontal pill - middle right */}
        <div 
          className="glass-shape absolute top-[45%] right-[25%] w-40 h-28 glass-jelly glass-orange animate-float transition-transform duration-300 ease-out"
          style={{ animationDelay: '-0.5s', borderRadius: '2.5rem' }}
        />
        
        {/* Small purple pill - middle left */}
        <div 
          className="glass-shape absolute top-[35%] left-[22%] w-24 h-32 glass-jelly glass-purple animate-float-slow transition-transform duration-300 ease-out"
          style={{ animationDelay: '-1.8s', borderRadius: '2rem' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-jelly mb-8">
          <Sparkles className="w-4 h-4 text-orange" />
          <span className="text-sm font-medium text-foreground/80">Learn from a director who's actually used AI in production</span>
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6">
          AI Creative<br />
          <span className="text-gradient">Systems</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          One-on-one sessions with a creative director who spent 15 years behind the camera. 
          Now helping teams learn how to direct AI for real campaigns, not experiments.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#plans"
            className="px-8 py-4 rounded-2xl bg-orange text-white font-semibold text-lg hover:bg-orange/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange/25"
          >
            Book a Session
          </a>
          <a 
            href="#work"
            className="px-8 py-4 rounded-2xl glass-jelly font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            See the Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-sm">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
