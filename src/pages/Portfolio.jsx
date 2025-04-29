import { motion } from 'framer-motion';
import Navbar from '../component/Navbar';
import ProjectsNav from '../component/ProjectsNav';
import { useRef } from 'react';

const flyerImages = [
  { src: '/Portfolio_images/anticipate.jpg', title: 'Anticipate' },
  { src: '/Portfolio_images/birthdaydesign.jpg', title: 'Birthday Design' },
  { src: '/Portfolio_images/FlourishHeaven.jpg', title: 'Flourish Heaven' },
  { src: '/Portfolio_images/Joel.jpg', title: 'Joel' },
  { src: '/Portfolio_images/leo.jpg', title: 'Leo' },
  { src: '/Portfolio_images/Prayer.jpg', title: 'Prayer' },
  { src: '/Portfolio_images/Shola.jpg', title: 'Shola' },
  { src: '/Portfolio_images/The hut.jpg', title: 'The Hut' },
];

const posterImages = [
  { src: '/Portfolio_images/Poster1.jpg' },
  { src: '/Portfolio_images/Poster2.jpg' },
  { src: '/Portfolio_images/Poster3.jpg' },
  { src: '/Portfolio_images/Poster4.jpg' },
];

const carouselImages = [
    { src: '/Portfolio_images/Carousel1.jpg', title: 'Carousel Design 1' },
    { src: '/Portfolio_images/Carousel2.jpg', title: 'Carousel Design 2' },
    { src: '/Portfolio_images/Carousel3.jpg', title: 'Carousel Design 3' },
    { src: '/Portfolio_images/Carousel4.jpg', title: 'Carousel Design 4' },
    { src: '/Portfolio_images/Carousel5.jpg', title: 'Carousel Design 5' },
    { src: '/Portfolio_images/Carousel6.jpg', title: 'Carousel Design 6' },
    { src: '/Portfolio_images/Carousel7.jpg', title: 'Carousel Design 7' },
    { src: '/Portfolio_images/Carousel8.jpg', title: 'Carousel Design 8' },
  ];
  

const webDesignImages = [
  { src: '/Portfolio_images/Web1.png', title: 'Web Design 1' },
  { src: '/Portfolio_images/Web2.png', title: 'Web Design 2' },
];

export default function Portfolio() {
  const flyersRef = useRef(null);
  const postersRef = useRef(null);
  const carouselsRef = useRef(null);
  const webDesignRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
    <Navbar />
        <ProjectsNav
            scrollTo={scrollTo}
            refs={{ flyersRef, postersRef, carouselsRef, webDesignRef }}
        />
    <div className="flex-1 md:pt-10 pt-15 ml-0 md:ml-52 justify-center items-center px-6 md:px-20">
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mt-5 border-2 border-slate-600 py-2 rounded-md"
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-5xl font-bold text-center text-slate-800 tracking-wide"></p>
          </motion.div>
        </motion.div> */}

        {/* Flyers Section */}\
        <div ref={flyersRef}>
        <motion.div  className="mb-12 mt-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Flyers</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {flyerImages.map((image, index) => (
              <motion.div key={index} className="relative rounded-md overflow-hidden" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.2, duration: 1 }}>
                <img src={image.src} alt={image.title} loading='lazy' className="w-full h-72 md:h-80 lg:h-96 object-cover transform transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>

        {/* Posters Section */}
        <motion.div ref={postersRef} className="mb-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Posters</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {posterImages.map((image, index) => (
              <motion.div key={index} className="relative rounded-md overflow-hidden" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.2, duration: 1 }}>
                <img src={image.src} alt={`Poster ${index + 1}`} loading='lazy' className="w-full h-72 md:h-80 lg:h-96 object-cover transform transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Carousels Section */}
        <motion.div ref={carouselsRef} className="mb-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Carousels</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {carouselImages.map((image, index) => (
              <motion.div key={index} className="relative rounded-md overflow-hidden" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.2, duration: 1 }}>
                <img src={image.src} alt={image.title} loading='lazy' className="w-full h-72 md:h-80 lg:h-96 object-cover transform transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Web Design Section */}
        <motion.div ref={webDesignRef} className="mb-12" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Web Design</h2>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
            {webDesignImages.map((image, index) => (
              <motion.div key={index} className="relative rounded-md overflow-hidden" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.2, duration: 1 }}>
                <img src={image.src} alt={image.title} loading='lazy' className="w-full h-72 md:h-80 lg:h-96 object-cover transform transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
    </div>
    </>
  );
}
