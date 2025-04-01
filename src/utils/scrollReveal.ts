
export const initScrollReveal = () => {
  console.log('Initializing scroll reveal animations');
  
  // Basic reveal animation (fade up)
  const revealElements = document.querySelectorAll('.reveal:not(.reveal-left):not(.reveal-right):not(.reveal-scale)');
  
  // Direction-specific animations
  const revealLeftElements = document.querySelectorAll('.reveal-left');
  const revealRightElements = document.querySelectorAll('.reveal-right');
  const revealScaleElements = document.querySelectorAll('.reveal-scale');
  
  // Basic reveal animation (fade up)
  const standardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        // Optional: Remove the class when element is out of view
        // Uncomment the line below if you want elements to animate again when scrolling back up
        // entry.target.classList.remove('active');
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px' // Triggers animation slightly before element enters viewport
  });
  
  // Reveal from left animation
  const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  // Reveal from right animation
  const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  // Scale animation
  const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  
  // Observe all elements
  revealElements.forEach((element) => {
    standardObserver.observe(element);
  });
  
  revealLeftElements.forEach((element) => {
    leftObserver.observe(element);
  });
  
  revealRightElements.forEach((element) => {
    rightObserver.observe(element);
  });
  
  revealScaleElements.forEach((element) => {
    scaleObserver.observe(element);
  });
};
