import Navbar from '../component/Navbar'
import { motion } from 'framer-motion';

export default function Contact(){
    return(
        <>
        <Navbar />
        <div className='flex-1 md:pt-10 pt-15 ml-0 md:ml-52 justify-center items-center px-6 md:px-20'>
            {/* Header Section */}
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
                    <p className="text-5xl font-bold text-center text-slate-800 tracking-wide">CONTACT</p>
                </motion.div>
            </motion.div>

            {/* FORM */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
                
            </motion.div>
        </div>
        </>
    );
}