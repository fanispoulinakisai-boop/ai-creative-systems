import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Using FormSubmit.co - sends directly to email without verification
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      formDataObj.append('_subject', `New Proposal Request from ${formData.name}`);
      formDataObj.append('_template', 'table');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_next', 'false'); // Don't redirect

      const response = await fetch('https://formsubmit.co/ajax/fanis@futurevideo.media', {
        method: 'POST',
        body: formDataObj,
      });

      const data = await response.json();
      console.log('Form response:', data);

      if (response.ok && data.success === true) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Form submission failed. Please try again.');
        console.error('Form error:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <div>
            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Build Your System
            </h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
              Tell me about your project, team, or question. I'll recommend the right approach.
            </p>

            <button 
              onClick={scrollToPlans}
              className="flex items-center gap-4 p-4 rounded-2xl glass-jelly hover:bg-white/30 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl glass-jelly glass-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-white rotate-[-45deg]" />
              </div>
              <div>
                <p className="font-semibold">View Sessions</p>
                <p className="text-sm text-foreground/60">See pricing and options</p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto text-foreground/40 group-hover:text-foreground transition-colors" />
            </button>
          </div>

          {/* Right side - Form */}
          <div className="glass-jelly p-8">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Thank You
                </h3>
                <p className="text-foreground/70 max-w-sm">
                  Your request has been received. I will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-6 text-orange font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/30 border-white/40 focus:border-orange focus:ring-orange/20 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/30 border-white/40 focus:border-orange focus:ring-orange/20 rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell me about your project, team, or question.
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share details about what you're working on, your team size, or specific challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white/30 border-white/40 focus:border-orange focus:ring-orange/20 resize-none rounded-xl"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-start gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 rounded-xl bg-orange hover:bg-orange/90 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange/25"
                >
                  {isSubmitting ? 'Sending...' : 'Request Proposal'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
