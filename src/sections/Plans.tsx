import { Clock, Zap, Layers, Briefcase } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Director Session',
      duration: '90 Minutes',
      price: '$225',
      description: 'per session',
      bestFor: [
        'AI stack & workflow review',
        'Intro to AI video & image production (for beginners or teams starting out)',
        'Reviewing campaign outputs',
        'Fixing a stuck workflow',
        'Strategic direction & tool selection',
      ],
      includes: [
        'Live screen demonstration',
        'Strategic feedback',
        'Recording',
        'Written follow-up notes',
      ],
      icon: Clock,
      color: 'yellow',
      popular: false,
    },
    {
      name: 'Build Session',
      duration: '3 Hours',
      price: '$450',
      description: 'per session',
      bestFor: [
        'Building a real campaign together',
        'Structuring prompts for repeatable output',
        'Implementing a practical multi-tool workflow',
        'Moving from experimentation to production',
      ],
      includes: [
        'Workflow mapping',
        'Prompt system setup',
        'Recording',
        'Written follow-up notes',
      ],
      icon: Zap,
      color: 'orange',
      popular: true,
    },
    {
      name: 'Intensive',
      duration: '5 Hours',
      price: '$750',
      description: 'per session',
      bestFor: [
        'Full campaign system build',
        'Production-ready workflow design',
        'Advanced multi-tool implementation',
        'AI production strategy',
      ],
      includes: [
        'Custom production workflow blueprint',
        'Advanced implementation',
        'Recording',
        'Detailed written follow-up documentation',
      ],
      icon: Layers,
      color: 'purple',
      popular: false,
    },
    {
      name: 'Team Workshop',
      duration: 'Custom',
      price: 'Contact',
      description: '',
      bestFor: [
        'Team training',
        'Campaign consulting',
        'AI integration strategy',
        'Ongoing advisory',
      ],
      includes: [],
      icon: Briefcase,
      color: 'cyan',
      popular: false,
    },
  ];

  const getGlassClass = (color: string) => {
    const classes: Record<string, string> = {
      yellow: 'glass-jelly glass-yellow',
      orange: 'glass-jelly glass-orange',
      purple: 'glass-jelly glass-purple',
      cyan: 'glass-jelly glass-cyan',
    };
    return classes[color] || 'glass-jelly';
  };

  const getIconBgClass = (color: string) => {
    const classes: Record<string, string> = {
      yellow: 'glass-jelly glass-yellow',
      orange: 'glass-jelly glass-orange',
      purple: 'glass-jelly glass-purple',
      cyan: 'glass-jelly glass-cyan',
    };
    return classes[color] || 'glass-jelly';
  };

  return (
    <section id="plans" className="relative py-24 sm:py-32 bg-lavender">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">
            Work With Me
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Live, Hands-On Sessions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I build in real time. You see the full process. Every session is recorded.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative ${getGlassClass(plan.color)} p-6 flex flex-col hover:scale-[1.02] transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-orange/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 rounded-full bg-orange text-white text-xs font-semibold shadow-lg shadow-orange/30 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl ${getIconBgClass(plan.color)} flex items-center justify-center mb-4`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-foreground/60 mb-4">{plan.duration}</p>

              <div className="mb-4">
                <span className="font-display text-3xl font-bold">{plan.price}</span>
                {plan.description && <span className="text-foreground/60"> {plan.description}</span>}
              </div>

              {plan.bestFor.length > 0 && (
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Best for:</p>
                  <ul className="space-y-1.5">
                    {plan.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1 h-1 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {plan.includes.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Includes:</p>
                  <ul className="space-y-1.5">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1 h-1 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {plan.price === 'Contact' && (
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-foreground/70 mb-4">For agencies and marketing teams.</p>
                  <ul className="space-y-1.5">
                    {plan.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1 h-1 rounded-full bg-foreground/40 mt-1.5 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {plan.name === 'Director Session' ? (
                <button
                  data-cal-link="machinepoem/director-session"
                  data-cal-namespace="director-session"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="w-full py-3 rounded-xl text-center font-semibold transition-all duration-300 mt-auto glass-jelly hover:bg-white/30 cursor-pointer"
                >
                  Book Now
                </button>
              ) : (
                <a
                  href="#contact"
                  className={`w-full py-3 rounded-xl text-center font-semibold transition-all duration-300 mt-auto ${
                    plan.popular
                      ? 'bg-orange text-white hover:bg-orange/90 shadow-lg shadow-orange/25'
                      : 'glass-jelly hover:bg-white/30'
                  }`}
                >
                  {plan.price === 'Contact' ? 'Request Proposal' : 'Book Now'}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
