import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IPMissionArchitecture = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselImages = [
        {
            url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
            title: "Innovation",
            subtitle: "Fostering creative thinking and IP awareness."
        },
        {
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
            title: "Collaboration",
            subtitle: "Building a community of IP advocates."
        },
        {
            url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
            title: "Education",
            subtitle: "Workshops on intellectual property rights."
        }
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full bg-white overflow-hidden py-20 md:py-32 font-sans">

            {/* Subtle Background Circles */}
            <div className="absolute top-[40%] left-[20%] pointer-events-none opacity-[0.03]">
                {[1, 2, 3, 4, 5].map((circle) => (
                    <div
                        key={circle}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black"
                        style={{
                            width: `${circle * 120}px`,
                            height: `${circle * 120}px`
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl relative">

                {/* Top Row: Metadata | Headline | Info */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

                    {/* Left: Date/Created */}
                    <div className="lg:col-span-2">
                        <div className="text-[10px] font-medium uppercase tracking-[0.15em] leading-loose text-gray-400">
                            Founded<br />
                            <span className="text-black font-bold">15.09.2024</span><br /><br />
                            Established<br />
                            <span className="text-black font-bold">2024</span>
                        </div>
                    </div>

                    {/* Center: Main Headline */}
                    <div className="lg:col-span-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black"
                        >
                            Intellectual <br />
                            Property <br />
                            Awareness Club.
                        </motion.h2>
                    </div>

                    {/* Right: Architecture Info */}
                    <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col gap-8">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-black">Our Mission</h4>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[200px]">
                                Building a culture of intellectual property awareness and protection.
                            </p>
                        </div>
                        <div className="lg:mt-6">
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[200px]">
                                Educating students on the value of innovation and creativity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle: Image Carousel with Glassmorphism Overlay */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                    {/* Empty space matching Date column */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Carousel starting at headline position */}
                    <div className="lg:col-span-10">
                        <div className="relative">
                            {/* Images */}
                            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                                {carouselImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex-shrink-0 ${idx === 0 ? 'w-full md:w-[380px]' : 'w-full md:w-[340px]'} ${activeIndex === idx ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}
                                    >
                                        <div className="aspect-[4/3] overflow-hidden bg-gray-100 shadow-lg">
                                            <img
                                                src={img.url}
                                                alt={img.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Glassmorphism Overlay Card */}
                            <div className="absolute bottom-8 left-6 right-6 md:left-8 md:right-auto md:w-[360px] bg-white/90 backdrop-blur-md p-5 shadow-xl rounded-sm border border-white/20">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h4 className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-black">
                                                    {carouselImages[activeIndex].title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 font-medium">
                                                    {carouselImages[activeIndex].subtitle}
                                                </p>
                                            </div>
                                            <div className="flex gap-4 text-sm text-gray-400">
                                                <button
                                                    onClick={handlePrev}
                                                    className="cursor-pointer hover:text-black transition-colors"
                                                >
                                                    ←
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className="cursor-pointer hover:text-black transition-colors"
                                                >
                                                    →
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Socials/Play | Indicator */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                    {/* Left Side: Socials */}
                    <div className="lg:col-span-2 flex flex-col gap-12">
                        {/* Social Icons */}
                        <div className="flex flex-col gap-6 text-[11px] font-bold text-gray-400">
                            <span className="hover:text-black cursor-pointer transition-colors">t</span>
                            <span className="hover:text-black cursor-pointer transition-colors">f</span>
                            <span className="hover:text-black cursor-pointer transition-colors">@</span>
                            <div className="w-[1px] h-12 bg-gray-200 ml-1 mt-2" />
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        {/* Play Document & Description */}
                        <div className="space-y-10">
                            <button className="flex items-center gap-4 group">
                                <div className="w-9 h-9 rounded-full border border-black flex items-center justify-center group-hover:bg-black transition-all">
                                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-black group-hover:border-l-white border-b-[4px] border-b-transparent ml-1" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black">Learn More</span>
                            </button>

                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.15em] leading-relaxed max-w-[300px]">
                                Empowering RCA's technical elite to secure their legacy.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: 07 Indicator */}
                    <div className="lg:col-span-4 flex justify-end">
                        <div className="relative">
                            <div className="absolute -top-20 -left-10 w-[1px] h-36 bg-gray-200 rotate-[25deg] origin-bottom" />
                            <span className="text-[120px] font-black leading-none tracking-tighter text-black">
                                01
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default IPMissionArchitecture;
