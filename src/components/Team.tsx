
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Team = () => {
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

  const teamMembers = [
    {
      name: 'Alex Mitchell',
      role: 'CEO & Founder',
      image: `https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80`,
      bio: 'With over 15 years of experience in the tech industry, Alex leads our company with vision and expertise.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80`,
      bio: 'Sarah oversees our technical strategy and ensures we stay at the forefront of technological innovation.',
    },
    {
      name: 'David Kumar',
      role: 'Head of Development',
      image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80`,
      bio: 'David leads our development team, bringing extensive experience in software architecture and engineering.',
    },
    {
      name: 'Emily Chen',
      role: 'Head of Design',
      image: `https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80`,
      bio: 'Emily ensures our products are not only functional but also deliver exceptional user experiences.',
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 reveal"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-aurum-navy">Our </span>
            <span className="text-aurum-gold">Team</span>
          </h2>
          <div className="w-24 h-1 bg-aurum-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind Aurum Infotech who are dedicated to delivering excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => (elementsRef.current[index] = el)}
              className={cn(
                "bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 reveal",
                `reveal-stagger-${(index % 4) + 1}`
              )}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-aurum-navy">{member.name}</h3>
                <p className="text-aurum-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-aurum-navy transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-aurum-navy transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-aurum-navy transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
