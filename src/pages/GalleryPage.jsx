import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Gallery images with stories
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
        story: "Grace's first workshop - the moment she discovered her voice and decided to run for local office."
    },
    {
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        story: "Our team celebrating 10,000 women reached. A milestone that changed everything."
    },
    {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        story: "Leadership training in Kigali - where confidence meets opportunity."
    },
    {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
        story: "Claire negotiating her 50% raise. This is what empowerment looks like."
    },
    {
        src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=600&auto=format&fit=crop",
        story: "Breaking barriers together - our first cohort of women entrepreneurs."
    },
    {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
        story: "Partnership summit 2023 - 120 organizations united for change."
    },
    {
        src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
        story: "The smile that started it all - our very first participant in 2014."
    },
    {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop",
        story: "Storytelling workshop - where women learned to own their narratives."
    },
];

const GalleryPage = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] overflow-x-hidden pt-12">

            {/* Header / Intro */}
            <div className="container mx-auto px-6 text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight"
                >
                    Moments of <span className="text-primary">Impact</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                >
                    Capturing the stories, the drive, and the transformative journey of over 40,000 participants and partners.
                </motion.p>
            </div>

            {/* 3D Curved Carousel Container */}
            <div className="w-full relative py-20 perspective-1000">
                <CurvedMarquee images={galleryImages} />
            </div>

            {/* Grid Gallery for "All Images" */}
            <div className="container mx-auto px-6 pb-24">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold">Full Collection</h2>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.concat(galleryImages).map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                                <img
                                    src={item.src}
                                    alt={`Gallery item ${i}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Story Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                                        {item.story}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CurvedMarquee = ({ images }) => {
    // Duplicate images for seamless loop
    const marqueeImages = [...images, ...images, ...images];

    return (
        <div className="flex justify-center overflow-hidden w-full">
            <div className="relative w-full max-w-[120%] flex gap-8 py-10 items-center justify-center">
                {/* 
                   We simulate the curve by applying individual rotations to cards 
                   scrolling horizontally. 
                   Actually, a simpler "fake" 3D curve is often just scaling the sides down 
                   and rotating them inwards.
                */}
                <div className="flex animate-marquee gap-8 items-center" style={{ width: 'max-content' }}>
                    {marqueeImages.map((item, idx) => (
                        <Card key={idx} item={item} />
                    ))}
                </div>
                <div className="flex animate-marquee gap-8 items-center absolute left-full top-10 pl-8" aria-hidden="true" style={{ width: 'max-content' }}>
                    {marqueeImages.map((item, idx) => (
                        <Card key={`clone-${idx}`} item={item} />
                    ))}
                </div>
            </div>
            <style>{`
                .perspective-1000 {
                    perspective: 2000px;
                }
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 120s linear infinite;
                }
                .curved-card {
                     transform-style: preserve-3d;
                     transition: transform 0.3s;
                }
            `}</style>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div className="w-[300px] h-[400px] flex-shrink-0 relative group perspective-origin-center transform transition-transform hover:-translate-y-4 duration-300">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gray-900 border-4 border-white/50 relative">
                <img src={item.src} alt="Gallery" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-lg mb-2">Resonate Impact</p>
                    <p className="text-xs text-white/90 leading-relaxed">{item.story}</p>
                </div>
            </div>
        </div>
    )
}

export default GalleryPage;
