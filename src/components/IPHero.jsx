import React from 'react';
import { motion } from 'framer-motion';

const IPHero = () => {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-white px-4 md:px-6 lg:px-12 xl:px-24 pt-6">
            <div className="relative h-full w-full rounded-[40px] overflow-hidden group shadow-2xl">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Massive Typography with Staggered Entrance */}
                <div className="absolute inset-0 flex items-center justify-start px-12 md:px-24">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        className="text-[15vw] md:text-[20vw] font-black text-white leading-none tracking-tighter opacity-90 transition-all duration-700 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex"
                    >
                        {"IPAC".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 50, scale: 0.8 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 100
                                        }
                                    }
                                }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Bottom Interactive Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-white/95 backdrop-blur-xl w-full max-w-6xl rounded-[30px] p-6 md:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex flex-col">
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black">Architecting Protection</h2>
                            <p className="text-gray-500 font-medium">Empowering RCA's technical elite to secure their legacy.</p>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="M21 21l-4.35-4.35" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-medium focus:ring-2 focus:ring-black transition-all"
                                />
                            </div>
                            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                                Explore
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IPHero;
