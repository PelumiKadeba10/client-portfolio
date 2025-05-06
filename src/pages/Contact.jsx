import Navbar from '../component/Navbar'
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useState, useRef} from 'react';
import { Mail, User, MessageSquareMoreIcon, MailIcon, Phone} from 'lucide-react';
import { FaFacebook, FaInstagram, FaPhone, FaLinkedin} from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

export default function Contact(){
    const [showName, setShowName] = useState("");
    const [showEmail, setShowEmail] = useState(""); 
    const [showMessage, setShowMessage] = useState("");
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const lastSubmit = localStorage.getItem("lastContactSubmit");
        const now = Date.now();
        const TWO_MINUTE = 60 * 2000;
      
        if (lastSubmit && now - parseInt(lastSubmit) < TWO_MINUTE) {
          toast.warning("Please wait a bit before sending another message.");
          return;
        }
      
        // Update timestamp
        localStorage.setItem("lastContactSubmit", now.toString());
      
        // Proceed with EmailJS sending...
        emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(
          (_) => {
            toast.success("Email Sent!");
            setShowName('');
            setShowEmail('');
            setShowMessage('');
          },
          (error) => {
            toast.error("Something went wrong!");
            console.error(error.text);
          }
        );
      };

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
                <form onSubmit={handleSubmit} ref={formRef} className="mt-8 pt-16 w-120 shadow-xl mx-auto p-8 rounded-lg space-y-10">
                    <div className='flex space-x-2'>
                        <User className="w-10 h-10 mt-2" />
                        <input
                        type="text"
                        id="name"
                        value={showName}
                        onChange={(e) => setShowName(e.target.value)}
                        name="name"
                        placeholder='Enter your Name'
                        required
                        className="mt-1 block w-full px-0 py-2 border-b-2 placeholder-slate-600 border-black bg-transparent focus:outline-none focus:border-amber-300 transition duration-300"
                        />
                    </div>

                    <div className='flex space-x-2'>
                        <Mail className="w-10 h-10 mt-2" />
                        <input
                        type="email"
                        id="email"
                        value={showEmail}
                        onChange={(e) => setShowEmail(e.target.value)}
                        name="email"
                        placeholder='Enter your Email'
                        required
                       className="mt-1 block w-full px-0 py-2 border-b-2 placeholder-slate-600 border-black bg-transparent focus:outline-none focus:border-amber-300 transition duration-300"
                        />
                    </div>

                    <div className='flex space-x-2'>
                        <MessageSquareMoreIcon className="w-10 h-10 mt-4" />
                        <textarea
                        id="message"
                        name="message"
                        value={showMessage}
                        onChange={(e) => setShowMessage(e.target.value)}
                        rows={4}
                        placeholder='Enter your Message'
                        required
                        className="mt-5 block w-full placeholder-gray-600 px-4 py-2 border bg-white border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-amber-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-700 text-white py-3 px-6 rounded-md hover:bg-amber-300 transition duration-300 font-semibold"
                    >
                        Send Message
                    </button>
                    </form>

            </motion.div>

            {/* SOCIAL MEDIA ICONS */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center mt-15 space-x-4 mb-10"
            >
                <div className="flex space-x-10">
                    <a href="mailto:timothyxart@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MailIcon className="w-10 h-10 text-black hover:text-red-500 transition duration-300" />
                    </a>
                    <a href="https://www.linkedin.com/in/ashaolutimothy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-10 h-10 text-black hover:text-blue-950 transition duration-300" />
                    </a>
                    <a href="https://www.facebook.com/share/1GAxa23Jom/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-10 h-10 text-black hover:text-blue-800 transition duration-300" />
                    </a>
                    <a href="https://www.instagram.com/soft.desig?igsh=bHU5dnhuM2MzZG1i&utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-10 h-10 text-black hover:text-red-400 transition duration-300" />
                    </a>
                    <div className='flex space-x-2'>
                        <a href="tel:+2347086707911" target="_blank" rel="noopener noreferrer">
                            <Phone className="w-10 h-10 text-black hover:text-green-600 transition duration-300" />
                        </a>
                        <p className='pt-3 font-bold text-black'>+234 708 670 7911</p>
                    </div>
                </div>
            </motion.div>
            
            {/* FOOTER */}
            <motion.div
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center mt-10 mb-5"
            >
                <p className="text-center text-slate-800 font-semibold">© 2025. All rights reserved.</p>

            </motion.div>
        </div>

        {/* Toast Container */}
        <ToastContainer />
        </>
    );
}