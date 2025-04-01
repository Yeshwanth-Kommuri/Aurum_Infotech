
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Target, Users, Award } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: <Lightbulb size={36} className="text-aurum-gold" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Target size={36} className="text-aurum-gold" />,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality products and services that exceed expectations.'
    },
    {
      icon: <Users size={36} className="text-aurum-gold" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: <Award size={36} className="text-aurum-gold" />,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and ethical conduct in all our dealings.'
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-aurum-gold/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-aurum-navy/5 to-transparent rounded-tr-full"></div>
      
      {/* Subtle dots pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: 'radial-gradient(#0A2342 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 reveal-scale"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-aurum-navy">About </span>
            <span className="text-aurum-gold">Aurum Infotech</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-aurum-gold/50 via-aurum-gold to-aurum-gold/50 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Aurum Infotech, we are dedicated to transforming businesses through innovative technology solutions. 
            With years of industry expertise, we empower organizations to achieve digital excellence and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          <div 
            ref={(el) => elementsRef.current[0] = el} 
            className="reveal-left reveal-stagger-1 bg-white p-8 rounded-lg shadow-sm hover-lift"
          >
            <h3 className="text-2xl font-bold text-aurum-navy mb-4">Our Mission</h3>
            <div className="w-16 h-1 bg-aurum-gold/70 mb-6"></div>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that drive digital transformation, 
              enhance operational efficiency, and create sustainable value. We strive to be the trusted 
              technology partner for organizations seeking excellence in the digital landscape.
            </p>
          </div>
          
          <div 
            ref={(el) => elementsRef.current[1] = el} 
            className="reveal-right reveal-stagger-2 bg-white p-8 rounded-lg shadow-sm hover-lift"
          >
            <h3 className="text-2xl font-bold text-aurum-navy mb-4">Our Vision</h3>
            <div className="w-16 h-1 bg-aurum-gold/70 mb-6"></div>
            <p className="text-gray-600">
              To be the global leader in providing cutting-edge technology solutions that reshape industries, 
              drive innovation, and contribute to a more connected and efficient world. We envision a future 
              where technology empowers every business to achieve its full potential.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center text-aurum-navy mb-10 reveal">Our Core Values</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              ref={(el) => elementsRef.current[index + 2] = el}
              className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover-lift reveal reveal-stagger-1"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-aurum-gold/10 rounded-full blur-md"></div>
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-aurum-navy mb-2">{value.title}</h4>
              <div className="w-10 h-0.5 bg-aurum-gold mb-3 mx-auto"></div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
