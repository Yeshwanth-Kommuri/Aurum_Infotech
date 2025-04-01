
import React, { useEffect, useRef } from 'react';
import { Code, Globe, Database, ShieldCheck, Lightbulb, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      icon: <Code size={40} className="text-aurum-gold" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to address your unique business challenges and requirements.',
    },
    {
      icon: <Globe size={40} className="text-aurum-gold" />,
      title: 'Web Application Development',
      description: 'Modern, responsive, and user-friendly web applications that enhance your online presence.',
    },
    {
      icon: <Database size={40} className="text-aurum-gold" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud services that optimize your infrastructure and reduce operational costs.',
    },
    {
      icon: <ShieldCheck size={40} className="text-aurum-gold" />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions to protect your data and systems from evolving threats.',
    },
    {
      icon: <Lightbulb size={40} className="text-aurum-gold" />,
      title: 'IT Consulting',
      description: 'Strategic guidance to help you leverage technology for business growth and competitive advantage.',
    },
    {
      icon: <BarChart size={40} className="text-aurum-gold" />,
      title: 'Data Analytics',
      description: 'Advanced analytics solutions to extract valuable insights from your data and drive informed decisions.',
    },
  ];

  return (
    <section 
      id="services" 
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)'
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#0A2342 1px, transparent 1px)', 
             backgroundSize: '20px 20px' 
           }}>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 reveal-scale"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-aurum-navy">Our </span>
            <span className="text-aurum-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aurum-gold/50 via-aurum-gold to-aurum-gold/50 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology solutions designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (elementsRef.current[index] = el)}
              className={cn(
                "bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 card-hover",
                index % 2 === 0 ? "reveal-left" : "reveal-right",
                `reveal-stagger-${(index % 3) + 1}`
              )}
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-aurum-gold/20 rounded-full blur-md animate-pulse"></div>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-aurum-navy mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center reveal reveal-stagger-6"
          ref={(el) => (elementsRef.current[6] = el)}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center bg-aurum-navy hover:bg-aurum-lightnavy text-white px-8 py-3 rounded-md transition-colors duration-300 hover-scale btn-hover-shine"
          >
            <span>Request a Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
