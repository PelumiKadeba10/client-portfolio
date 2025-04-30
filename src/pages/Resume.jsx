import { useEffect, useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import { motion } from 'framer-motion';
import { FileText, ArrowUp } from 'lucide-react';


export default function Resume() {
  const pageTop = useRef(null);
  const [showTopper, setShowTopper] = useState(false);
  
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
    <>
      <Navbar />
      <div className='flex-1 md:pt-10 pt-25 ml-0 md:ml-52 justify-center items-center px-6 md:px-20'>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mt-5 border-2 border-slate-600 py-3 rounded-md"
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-5xl font-bold text-center text-slate-800 tracking-wide">RESUME</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 mt-10 text-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {/* ===== Education Section ===== */}
          <motion.div
            className="mb-"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold border-b border-slate-400 pb-2 mb-4">Education</h2>
            <div>
              <p className="text-xl font-bold">Redeemer College</p>
              <p className="text-md text-slate-600">Diploma in Business Administration</p>
            </div>
          </motion.div>

          {/* ===== Experience Section ===== */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold border-b border-slate-400 pb-2 mb-4">Experience</h2>

            {/* Freelance Graphic Designer - Apt-Style Designs */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <p className="text-xl font-bold">Freelance Graphic Designer</p>
              <p className="text-md text-slate-800 italic">Apt-Style Designs</p>
              <ul className="list-disc ml-5 mt-2 text-slate-700">
                <li>Developed marketing materials that increased audience reach by 45%.</li>
                <li>Boosted social media engagement by 35% through strategic content creation.</li>
              </ul>
            </motion.div>

            {/* Freelance Graphic Designer - Flourish Heaven Homes */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <p className="text-xl font-bold">Freelance Graphic Designer</p>
              <p className="text-md text-slate-800 italic">Flourish Heaven Homes</p>
              <ul className="list-disc ml-5 mt-2 text-slate-700">
                <li>Filmed and edited engaging video content promoting over 50 distinct land listings.</li>
                <li>Increased sales conversions by attracting more qualified leads through targeted marketing strategies.</li>
              </ul>
            </motion.div>

            {/* Lead Graphic Designer - RCCG National Secretariat */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <p className="text-xl font-bold">Lead Graphic Designer</p>
              <p className="text-md text-slate-800 italic">RCCG National Secretariat</p>
              <ul className="list-disc ml-5 mt-2 text-slate-700">
                <li>Led the design and development of a magazine, overseeing layout, typography, and visuals.</li>
                <li>Managed and mentored junior designers, enhancing team productivity and creativity.</li>
                <li>Developed and implemented design strategies aligned with the brand’s goals.</li>
              </ul>
            </motion.div>

            {/* Creative Designer - Sunday Shed Entertainment */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <p className="text-xl font-bold">Creative Designer</p>
              <p className="text-md text-slate-800 italic">Sunday Shed Entertainment</p>
              <ul className="list-disc ml-5 mt-2 text-slate-700">
                <li>Designed weekly game and party visuals to captivate audiences and promote events.</li>
                <li>Crafted compelling social media content to boost artist visibility and brand reach.</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ===== Resume Download ===== */} 
        <motion.div
          className="flex justify-end mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a href="/Ashaolu_Timothy_Resume.pdf"
           download className="bg-amber-300 flex text-slate-800 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-amber-400 transition duration-200">
            Download Resume (PDF)
            <FileText className="ml-2 text-slate-800" size={20} />
          </a>
        </motion.div>
        
      </div>

      {showTopper && (
      <motion.button
      onClick={() => scrollTo(pageTop)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-10 left-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-50"
      aria-label="Scroll to top"
      >
        <ArrowUp className="duration-300 hover:text-black text-white" />
      </motion.button>
        )}
    </>
  );
}
