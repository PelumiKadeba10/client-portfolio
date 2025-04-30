import { useState, useEffect, useRef} from 'react';
import Navbar from '../component/Navbar'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Icon from '../component/AboutIcon';
import { ArrowUp } from 'lucide-react';


export default function About() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showTopper, setShowTopper] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600; 
      setShowTopper(window.scrollY > threshold);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageTop = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
    <Navbar />
    <div className="flex min-h-screen">
        <div className='flex-1 md:pt-10 pt-25 ml-0 md:ml-52 justify-center items-center px-20'>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                className="mt-5 border-2 border-slate-600 py-3 rounded-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <p className="text-5xl font-bold text-center" ref={pageTop}>ABOUT ME</p>
                </motion.div>

            <motion.div
            className="grid grid-cols-1 gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            >
                <motion.p
                    className="text-2xl font-bold mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <span className="text-black">
                        <Typewriter
                            words={["I'm Ashaolu Timothy,"]}
                            cursor={false}
                            typeSpeed={70}
                            delaySpeed={1000}
                            onType={() => setShowSecond(true)}
                        />
                    </span>
                    {showSecond && (
                        <span className="text-[#8D8D8D]">
                            &nbsp;
                            <Typewriter
                                words={["Experienced Graphics and UI/UX designer."]}
                                cursorStyle="_"
                                typeSpeed={70}
                                delaySpeed={1000}
                                onType={() => setShowParagraph(true)}
                            />
                        </span>
                    )}
                </motion.p>

                <motion.p
                    className="text-l font-medium text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showParagraph ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    I'm a passionate freelance Graphics and UI/UX designer.
                    I specialize in brand visuals, marketing graphics, and motion-enhanced designs. 
                    My mission is to elevate your online presence through high-quality visuals and strategy.
                </motion.p>
                </motion.div>
            </motion.div>

            {/* Custom Icon */}
            <motion.div
            className='flex justify-center align-center mt-10'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            >
                <Icon />
            </motion.div>

            <motion.div
            className='flex justify-center align-center mt-20'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0 }}
            >
               <div className="px-4 md:px-8 lg:px-24">
                <p className="text-4xl font-bold pl-10">What I Do ?</p>

                <div className="grid grid-cols-1 mt-2">
                    {/* CARD */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg">
                    <img src="Pen.png" alt="Brand Design" className="w-30 h-30" />
                    <div className="text-center md:text-left">
                        <p className="font-bold text-2xl mb-2">Brand Design</p>
                        <p className="font-semibold text-l leading-relaxed">
                        Crafting strong visual identities that communicate your brand’s personality and values,
                        from logos and color schemes to full brand guidelines.
                        </p>
                    </div>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6  p-6 rounded-lg">
                    <img src="Palette.png" alt="Social Media Design" className="w-30 h-30 object-contain" />
                    <div className="text-center md:text-left">
                        <p className="font-bold text-2xl mb-2">Social Media Design</p>
                        <p className="font-semibold text-l leading-relaxed">
                        Eye-catching and purpose-driven poster designs for events, products, or promotions that instantly grab attention and leave a lasting impression.
                        </p>
                    </div>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 p-6 rounded-lg ">
                    <img src="WebUI.png" alt="Web UI Design" className="w-30 h-30 object-contain" />
                    <div className="text-center md:text-left">
                        <p className="font-bold text-2xl mb-2">Web UI Design</p>
                        <p className="font-semibold text-l leading-relaxed">
                        Designing clean, user-friendly, and modern web interfaces that enhance user experience and bring your website vision to life.
                        </p>
                    </div>
                    </div>

                    {/* CARD */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 rounded-lg">
                    <img src="Mobile.png" alt="UI Design (Mobile & Web Apps)" className="w-30 h-30 object-contain" />
                    <div className="text-center md:text-left">
                        <p className="font-bold text-2xl mb-2">UI Design (Mobile & Web Apps)</p>
                        <p className="font-semibold text-l leading-relaxed">
                        Creating intuitive, aesthetically pleasing, and functional user interfaces for mobile and web applications that keep users engaged and satisfied.
                        </p>
                    </div>
                    </div>
                </div>
                </div>

            </motion.div>
        </div>
    </div>

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

    </>
  );
}