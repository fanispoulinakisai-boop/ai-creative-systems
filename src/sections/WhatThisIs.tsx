import { Video, Image, Wand2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer } from '@/components/ScrollReveal';
import TiltCard from '@/components/TiltCard';

const WhatThisIs = () => {
  const features = [
    {
      icon: Video,
      title: 'AI Video Production',
      description: 'Create commercials, product demos, explainers, and social ads using AI - without losing production quality.',
      color: 'orange',
    },
    {
      icon: Image,
      title: 'AI Image & Campaign Visuals',
      description: 'Build product shots, campaign concepts, brand visuals, and pitch-ready assets in minutes.',
      color: 'cyan',
    },
    {
      icon: Wand2,
      title: 'The Workflow',
      description: 'Learn the tools, prompting structure, and production process that actually works inside agencies and marketing teams.',
      color: 'purple',
    },
  ];

  const getGlassClass = (color: string) => {
    const classes: Record<string, string> = {
      orange: 'glass-jelly glass-orange',
      cyan: 'glass-jelly glass-cyan',
      purple: 'glass-jelly glass-purple',
    };
    return classes[color] || 'glass-jelly';
  };

  return (
    <section id="what-this-is" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main statement card */}
        <ScrollReveal direction="up" distance={40}>
          <TiltCard className="rounded-3xl" tiltAmount={4}>
            <div className="glass-jelly p-8 sm:p-12 lg:p-16 mb-6">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed text-center">
                "I spent 15 years directing for{' '}
                <span className="text-orange">Amazon</span>,{' '}
                <span className="text-cyan">Citi</span>,{' '}
                <span className="text-purple">Cisco</span>. 
                Now I help teams direct AI the same way - by doing it."
              </p>
            </div>
          </TiltCard>
        </ScrollReveal>

        {/* Tagline */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-foreground/60 text-lg mb-16">
            Real workflows. Real production standards. Real results.
          </p>
        </ScrollReveal>

        {/* Feature cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <TiltCard key={index} className="rounded-3xl" tiltAmount={8}>
              <div className={`${getGlassClass(feature.color)} p-8 hover:scale-[1.02] transition-all duration-300 group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 glass-jelly glass-${feature.color} group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>

        {/* Audience tags */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-4">
              {['Agencies', 'Marketing Teams', 'Founders', 'Creative Leads', 'SaaS & Tech Companies'].map((item, i) => (
                <span 
                  key={i}
                  className="px-5 py-2.5 rounded-full glass-jelly text-sm font-medium text-foreground/80 hover:bg-white/30 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatThisIs;
