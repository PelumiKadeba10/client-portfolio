import { useState, useEffect } from 'react';
import Navbar from '../component/Navbar'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Icon from '../component/AboutIcon';

export default function About() {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div className="flex min-h-screen">
        <Navbar />
        <div className='flex-1 p-6 ml-0 md:ml-52'>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                className="mt-5 border border-slate-300 py-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                <p className="text-5xl font-bold text-center">ABOUT ME</p>
                </motion.div>

                <motion.div
                className="grid grid-cols-1 gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                >
                <motion.p
                    className="text-2xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <Typewriter
                    key="typewriter"  
                    words={['I\'m Ashaolu Timothy, Experienced Graphic Designer and Social media Manager.']}
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={0}
                    delaySpeed={1000}
                    onType={() => setShowParagraph(true)}
                    />
                </motion.p>

                <motion.p
                    className="text-lg text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showParagraph ? 1 : 0 }}
                    transition={{ duration: 1 }}
                >
                    I'm a passionate freelance graphic designer and social media manager. 
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
        </div>
    </div>
  );
}