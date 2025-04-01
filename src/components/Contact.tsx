import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree URL endpoint
    const formspreeEndpoint = 'https://formspree.io/f/xdkelrdo';

    try {
      // Sending form data to Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon.",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting your message. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-gray-50 reveal"
    >
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-aurum-navy">Get in </span>
            <span className="text-aurum-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-aurum-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a question or ready to start your digital transformation journey? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            {[
              { icon: <MapPin className="text-aurum-gold" size={24} />, title: 'Our Location', details: '8825 Preakness Dr Florence KY 41042' },
              { icon: <Phone className="text-aurum-gold" size={24} />, title: 'Phone Number', details: '+1 (248) 989-9922' },
            ].map((item, index) => (
              <div 
                key={item.title} 
                className={cn(
                  "bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 reveal",
                  `reveal-stagger-${index + 1}`
                )}
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-aurum-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm reveal reveal-stagger-3">
            <h3 className="text-2xl font-bold text-aurum-navy mb-6">Send us a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aurum-gold/50 focus:border-aurum-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aurum-gold/50 focus:border-aurum-gold"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aurum-gold/50 focus:border-aurum-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aurum-gold/50 focus:border-aurum-gold"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-aurum-navy hover:bg-aurum-lightnavy text-white py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 hover-scale"
              >
                {isSubmitting ? "Processing..." : <>Send Message <Send size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
