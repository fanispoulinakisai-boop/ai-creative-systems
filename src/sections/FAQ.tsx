import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Who is this best suited for?',
      answer: "This is designed for agencies, marketing teams, founders, and creative leads who want to integrate AI into real campaign production — not just experiment with tools.\n\nBeginners are welcome, but the focus is always on building practical, production-ready systems.",
    },
    {
      question: 'What tools and platforms do you work with?',
      answer: "We work with best-in-class AI tools depending on your goals - including video, image, automation, and multi-tool workflows.\n\nThe focus isn't on one platform. It's on building a system that works for your specific output.",
    },
    {
      question: 'What does a session actually look like?',
      answer: "Sessions are live and hands-on.\n\nI build in real time while explaining the thinking behind each decision - from prompt structure to workflow design.\n\nYou see the full production process, not just the result.",
    },
    {
      question: 'Is everything recorded?',
      answer: 'Yes.\n\nEvery session is recorded so you can revisit the process and reuse the workflows.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes.\n\nFor teams building long-term AI production systems, ongoing advisory and custom engagements are available.',
    },
    {
      question: 'Can I book multiple sessions?',
      answer: 'Yes.\n\nMany clients start with a Director Session and then move into a Build Session or Intensive once goals are clearly defined.',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-peach">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">
            Questions
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            The Basics
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-jelly border-none px-6 data-[state=open]:bg-white/20"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
