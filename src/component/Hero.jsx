import { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

function Hero() {
    const [firstDone, setFirstDone] = useState(false)
    const [showTitle, setShowTitle] = useState(false)
    const [showDesc, setShowDesc] = useState(false)

    useEffect(() => {
        const time1 = setTimeout(() => setFirstDone(true), 'Hi There !'.length * 70 + 620)
        const time2 = setTimeout(() => setShowTitle(true), 2000 + 600)
        const time3 = setTimeout(() => setShowDesc(true), 3500)

        return () => {
            clearTimeout(time1)
            clearTimeout(time2)
            clearTimeout(time3)
        }
    }, [])

    return (
        <div className="flex flex-col space-y-10 md:flex-row min-h-screen justify-between px-15 py-20 ">
            {/* Text Container */}
            <div className="flex flex-col space-y-3 pr-10">
                {/* Line 1 */}
                <motion.p
                    className="text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typewriter
                        words={['Hi There !']}
                        typeSpeed={70}
                        delaySpeed={500}
                        loop={1}
                    />
                </motion.p>

                {/* Line 2 */}
                {firstDone && (
                    <motion.p
                        className="text-5xl font-bold text-black"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Typewriter
                            words={["I'm Ashaolu Timothy"]}
                            typeSpeed={70}
                        />
                    </motion.p>
                )}

                {/* Title */}
                {showTitle && (
                    <motion.div
                        className="bg-amber-300 px-3 py-2 mt-5 rounded"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-2xl text-black">
                            <Typewriter
                                words={["GRAPHICS AND UI/UX DESIGNER"]}
                                typeSpeed={70}
                            />
                        </p>
                    </motion.div>
                )}

                {/* Bio */}
                {showDesc && (
                    <motion.div
                        className="text-justify space-y-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.4, // Adjust delay between lines
                                },
                            },
                        }}
                    >
                        {[
                            "I’m Ashaolu Timothy, a passionate freelance graphics and UI/UX Designer with expertise in crafting visually compelling content that tells a story.",
                            "I specialize in creating brand visuals, marketing graphics, and motion-enhanced designs that captivate audiences.",
                            "My mission is to help businesses elevate their online presence through high-quality graphics and strategic content.",
                        ].map((line, index) => (
                            <motion.p
                                key={index}
                                className="text-lg"
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                            >
                                {line}
                        </motion.p>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* Image Container */}
            <div className="flex items-center justify-center px-10 w-60%">
                {showDesc && (
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-[400px] h-[450px] rounded-xl shadow-xl overflow-hidden"
                >
                    <img
                    src="Oba.png"
                    alt="Timothy"
                    className="w-full h-full object-cover"
                    />
                </motion.div>
            )}
        </div>
        </div>
    )
}

export default Hero
