
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
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

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 reveal"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0"></div>
      
      {/* Enhanced geometric shapes for background decoration */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-aurum-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-aurum-navy/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-aurum-lightgold/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-aurum-lightnavy/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.03] z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(#0A2342 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-aurum-navy opacity-0 animate-fade-in-delay-1">Transforming Ideas</span>
              <span className="block text-aurum-gold mt-2 opacity-0 animate-fade-in-delay-2">Into Digital Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
              We deliver cutting-edge technology solutions that empower businesses to achieve digital excellence and sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-4">
              <a 
                href="#services" 
                className="bg-aurum-navy hover:bg-aurum-lightnavy text-white px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 btn-hover-shine hover-scale"
              >
                Our Services
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="bg-transparent border-2 border-aurum-gold hover:bg-aurum-gold/10 text-aurum-navy px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center hover-scale"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Logo animation container */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square opacity-0 animate-fade-in-delay-3">
              <div className="absolute inset-0 bg-white/80 rounded-full shadow-lg animate-subtle-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 flex flex-col items-center justify-center animate-scale-in">
                  <div className="text-5xl md:text-6xl font-bold mb-2 relative">
                    <span className="text-aurum-gold">Aurum</span> 
                    <span className="text-aurum-navy">Infotech</span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aurum-gold to-transparent"></div>
                  </div>
                  <p className="text-center text-gray-700 text-lg mt-4">
                    <span className="relative">
                      Empowering Innovation. Delivering Excellence.
                      
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-4">
        <span className="text-aurum-navy text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-aurum-navy rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-aurum-gold rounded-full mt-2 animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
