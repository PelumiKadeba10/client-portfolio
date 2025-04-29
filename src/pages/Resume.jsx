import Navbar from '../component/Navbar'
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Resume(){
    return(
        <>
            <Navbar />
            <div className='flex-1 pt-10 ml-0 md:ml-52 justify-center items-center px-20'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                    className="mt-5 border-2 border-slate-600 py-5"
                    initial={{ opacity: 0, y: -20, x: -20 }}
                    animate={{ opacity: 1, y: 0 ,x: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <p className="text-5xl font-bold text-center">RESUME</p>
                    </motion.div>
                </motion.div>
            </ div>
        </>
    );
}