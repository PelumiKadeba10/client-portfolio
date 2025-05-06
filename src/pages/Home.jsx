'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import NavHome from '../component/NavHome';
import Hero from '../component/Hero';
import Icon from '../component/AboutIcon';

const AnimatedCard = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [showTopper, setShowTopper] = useState(false);
  const pageTop = useRef(null);
  const iconRef = useRef(null); // <-- reference for Icon
  const iconInView = useInView(iconRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600;
      setShowTopper(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="">
      <NavHome />
      <div ref={pageTop}></div>
      <Hero />

      <div className="bg-gradient-to-r from-amber-100 to-amber-300 pt-10 pb-19">
        <motion.div
            className="flex md:justify-left justify-center align-center mt-10"
            ref={iconRef}
            initial={{ opacity: 0, x: 50 }}
            animate={iconInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 3.0 }}
          >
          <Icon />
        </motion.div>
      </div>
      
      {/* About Section */}
      <div className=" pt-10">
        

        <motion.div
          className="flex justify-center align-center mt-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="px-4 md:px-8 lg:px-24">
            <p className="text-4xl font-bold pl-10">What I Do ?</p>

            <div className="grid grid-cols-1 mt-2">
              {/* CARD: Brand Design */}
              <AnimatedCard index={0}>
                <>
                  <img src="Pen.png" alt="Brand Design" className="w-30 h-30" />
                  <div className="text-center md:text-left">
                    <p className="font-bold text-2xl mb-2">Brand Design</p>
                    <p className="font-semibold text-l leading-relaxed">
                      Crafting strong visual identities that communicate your brand’s personality and values, from logos and color schemes to full brand guidelines.
                    </p>
                  </div>
                </>
              </AnimatedCard>

              {/* CARD: Social Media Design */}
              <AnimatedCard index={1}>
                <>
                  <img src="Palette.png" alt="Social Media Design" className="w-30 h-30 object-contain" />
                  <div className="text-center md:text-left">
                    <p className="font-bold text-2xl mb-2">Social Media Design</p>
                    <p className="font-semibold text-l leading-relaxed">
                      Eye-catching and purpose-driven poster designs for events, products, or promotions that instantly grab attention and leave a lasting impression.
                    </p>
                  </div>
                </>
              </AnimatedCard>

              {/* CARD: Web UI Design */}
              <AnimatedCard index={2}>
                <>
                  <img src="WebUI.png" alt="Web UI Design" className="w-30 h-30 object-contain" />
                  <div className="text-center md:text-left">
                    <p className="font-bold text-2xl mb-2">Web UI Design</p>
                    <p className="font-semibold text-l leading-relaxed">
                      Designing clean, user-friendly, and modern web interfaces that enhance user experience and bring your website vision to life.
                    </p>
                  </div>
                </>
              </AnimatedCard>

              {/* CARD: UI Design (Mobile & Web Apps) */}
              <AnimatedCard index={3}>
                <>
                  <img src="Mobile.png" alt="UI Design (Mobile & Web Apps)" className="w-30 h-30 object-contain" />
                  <div className="text-center md:text-left">
                    <p className="font-bold text-2xl mb-2">UI Design (Mobile & Web Apps)</p>
                    <p className="font-semibold text-l leading-relaxed">
                      Creating intuitive, aesthetically pleasing, and functional user interfaces for mobile and web applications that keep users engaged and satisfied.
                    </p>
                  </div>
                </>
              </AnimatedCard>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showTopper && (
        <motion.button
          onClick={() => scrollTo(pageTop)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="duration-300 hover:text-black text-white" />
        </motion.button>
      )}
    </div>
  );
}
