import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  scale?: number;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  className,
  direction = 'up',
  distance = 60,
  duration = 0.8,
  delay = 0,
  scale = 1,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const getFromVars = () => {
      const base = {
        opacity: 0,
        scale,
        duration,
        delay,
        ease: 'power3.out',
      };

      switch (direction) {
        case 'up':
          return { ...base, y: distance };
        case 'down':
          return { ...base, y: -distance };
        case 'left':
          return { ...base, x: distance };
        case 'right':
          return { ...base, x: -distance };
        default:
          return { ...base, y: distance };
      }
    };

    const tween = gsap.from(el, {
      ...getFromVars(),
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, distance, duration, delay, scale, once]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

// Stagger container for child elements
export const StaggerContainer = ({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.children;
    if (children.length === 0) return;

    const tween = gsap.from(children, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.6,
      stagger: staggerDelay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
    };
  }, [staggerDelay]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

// Parallax wrapper
export const ParallaxWrapper = ({
  children,
  className,
  speed = 0.5,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export default ScrollReveal;
