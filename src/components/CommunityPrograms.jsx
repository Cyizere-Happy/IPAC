import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
    {
        id: 'clinic',
        title: 'IP Clinic',
        subtitle: 'Protect Your Innovation',
        intro: "A dedicated space for RCA students to receive one-on-one guidance on securing their intellectual property and auditing their projects.",
        problem: {
            title: "The Ownership Gap",
            text: "Many students build ground-breaking software and hardware at RCA, but often lose ownership or credit because they don't know how to legally protect their creations from the start.",
            image: "https://images.unsplash.com/photo-1589216532372-1c2a1a990aef?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "Expert Audits",
            text: [
                "The IP Clinic provides peer-to-peer audits where senior members review student projects for IP potential and risks.",
                "We offer direct paths to professional legal mentoring, ensuring that every innovative idea born on campus has a fortress of protection around it."
            ],
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
        },
        stories: [
            {
                title: "Meet Eric",
                subtitle: "Securing the Future",
                sections: [
                    { title: "Before", text: "Eric built a unique compression algorithm but was afraid to share it publicly for fear of it being stolen." },
                    { title: "After", text: "IPAC helped him navigate the copyright process. Now his project is on GitHub with a solid license and protection." }
                ],
                quote: "IPAC gave me the confidence to share my code with the world.",
                videoThumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
            },
            {
                title: "Meet Sonia",
                subtitle: "Licensed to Thrill",
                sections: [
                    { title: "Challenge", text: "Sonia's library was being used without credit. She didn't know how to enforce her rights." },
                    { title: "Growth", text: "Through the clinic, she learned about license enforcement and successfully rebranded her library's terms." }
                ],
                quote: "I finally feel like I own my intellectual labor.",
                videoThumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 'copyright',
        title: 'Copyright & Licensing',
        subtitle: 'Navigating Open Source',
        intro: "Workshops focused on choosing the right licenses for software and creative assets to balance sharing and protection.",
        problem: {
            title: "License Confusion",
            text: "The world of Open Source is powerful but legally complex. Many developers use licenses like MIT or GPL without truly understanding their implications for future monetization or commercialization.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "Strategic Licensing",
            text: [
                "We host deep-dive workshops on software licensing, comparing permissive vs. copyleft models to help students make informed decisions.",
                "Our 'License-First' initiative integrates legal checks directly into the student development lifecycle from day one."
            ],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        },
        stories: [
            {
                title: "Meet Kevin",
                subtitle: "Open Source Advocate",
                sections: [
                    { title: "Challenge", text: "Kevin wanted to contribute to big projects but was intimidated by the legal requirements of CLAs." },
                    { title: "Breakthrough", text: "After our licensing series, he now manages IP for three major student organizations." }
                ],
                quote: "Understanding the law made me a better developer.",
                videoThumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 'patent',
        title: 'Patent Advocacy',
        subtitle: 'Scaling Your Genius',
        intro: "Bridging the gap between campus innovation and national registration through advocacy and legal support.",
        problem: {
            title: "The Patent Wall",
            text: "Patenting is often seen as a resource-heavy process reserved for large corporations. Individual student innovators frequently hit a wall when it comes to formal national registration.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "National Linkage",
            text: [
                "We advocate for student-friendly IP policies and act as a bridge between RCA and national IP offices.",
                "Our program assists high-potential projects in drafting preliminary patent documents and navigating the registration bureaucracy."
            ],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
        },
        stories: [
            {
                title: "Meet David",
                subtitle: "Innovative Hardware",
                sections: [
                    { title: "Issue", text: "David designed a new type of low-cost sensor but didn't know how to patent it." },
                    { title: "Action", text: "IPAC linked him with a patent attorney. He is now in the filing phase of his application." }
                ],
                quote: "IPAC turned my school project into a protected asset.",
                videoThumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
            }
        ]
    }
];

const CommunityPrograms = () => {
    const [activeTab, setActiveTab] = useState(programs[0].id);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    // Reset story index when tab changes
    useEffect(() => {
        setCurrentStoryIndex(0);
    }, [activeTab]);

    return (
        <section className="bg-[#F8F8F8] min-h-screen font-sans text-gray-900 pb-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-12">

                {/* Minimalist Tabs - Reduced Spacing */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white/50 backdrop-blur-xl rounded-full p-1.5 inline-flex shadow-sm border border-white/60">
                        {programs.map((program) => (
                            <button
                                key={program.id}
                                onClick={() => setActiveTab(program.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-500 relative ${activeTab === program.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {activeTab === program.id && (
                                    <motion.div
                                        layoutId="activeTabPill"
                                        className="absolute inset-0 bg-black rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{program.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {programs.map((program) => (
                        program.id === activeTab && (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full"
                            >
                                {/* HERO INTRO - Compacted */}
                                <div className="max-w-4xl mx-auto text-center mb-12">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-black to-gray-600"
                                    >
                                        {program.title}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto"
                                    >
                                        {program.intro}
                                    </motion.p>
                                </div>

                                {/* LAYERED SECTION 1: PROBLEM - Scaled Down */}
                                <div className="relative mb-16">
                                    <div className="w-full md:w-[85%] h-[250px] md:h-[350px] overflow-hidden rounded-[24px]">
                                        <img
                                            src={program.problem.image}
                                            alt="Context"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:absolute md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 md:-translate-x-6 w-full md:w-[420px] bg-white/80 backdrop-blur-xl p-5 md:p-8 rounded-[20px] shadow-lg border border-white/50 mt-[-40px] md:mt-0 relative z-10 mx-auto max-w-[90%]">
                                        <span className="block text-primary font-bold tracking-widest uppercase text-[10px] mb-2">The Challenge</span>
                                        <h2 className="text-xl md:text-2xl font-bold mb-3">{program.problem.title}</h2>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            {program.problem.text}
                                        </p>
                                    </div>
                                </div>

                                {/* LAYERED SECTION 2: SOLUTION - Scaled Down */}
                                <div className="relative mb-16 flex flex-col md:flex-row justify-end text-right">
                                    <div className="w-full md:w-[85%] h-[250px] md:h-[350px] overflow-hidden rounded-[24px] order-1 md:order-2">
                                        <img
                                            src={program.solution.image}
                                            alt="Solution"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:translate-x-6 w-full md:w-[420px] bg-white/90 backdrop-blur-xl p-5 md:p-8 rounded-[20px] shadow-lg mt-[-40px] md:mt-0 relative z-10 mx-auto max-w-[90%] order-2 md:order-1 text-left border border-white/50">
                                        <span className="block text-primary font-bold tracking-widest uppercase text-[10px] mb-2">Our Methodology</span>
                                        <h2 className="text-xl md:text-2xl font-bold text-black mb-3">{program.solution.title}</h2>
                                        <div className="flex flex-col gap-2 text-gray-600 leading-relaxed text-sm md:text-base">
                                            {program.solution.text.map((p, i) => (
                                                <p key={i}>{p}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* IMMERSIVE IMPACT STORY CAROUSEL */}
                                <div className="max-w-5xl mx-auto bg-white rounded-[24px] p-5 md:p-10 shadow-md relative overflow-hidden min-h-[400px] md:min-h-[500px]">
                                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none -mt-20 -mr-20" />

                                    <div className="flex justify-between items-center mb-6 relative z-10">
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <div className="w-4 md:w-6 h-1 bg-black" />
                                            <span className="text-sm md:text-base font-medium tracking-tight">Impact Stories</span>
                                        </div>

                                        {/* Carousel Controls */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setCurrentStoryIndex((prev) => (prev - 1 + program.stories.length) % program.stories.length)}
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm md:text-base"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={() => setCurrentStoryIndex((prev) => (prev + 1) % program.stories.length)}
                                                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-sm md:text-base"
                                            >
                                                →
                                            </button>
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStoryIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center relative z-10"
                                        >
                                            <div>
                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{program.stories[currentStoryIndex].title}</h2>
                                                <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6">{program.stories[currentStoryIndex].subtitle}</p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                                                    {program.stories[currentStoryIndex].sections.map((section, idx) => (
                                                        <div key={idx} className="border-l-2 border-gray-100 pl-3 md:pl-4">
                                                            <h4 className="font-bold text-xs md:text-sm mb-1">{section.title}</h4>
                                                            <p className="text-gray-600 text-xs md:text-sm">{section.text}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <blockquote className="text-base md:text-lg font-medium italic text-gray-900 border-l-4 border-primary pl-3 md:pl-4 py-2">
                                                    "{program.stories[currentStoryIndex].quote}"
                                                </blockquote>
                                            </div>

                                            <div className="relative h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                                <img
                                                    src={program.stories[currentStoryIndex].videoThumbnail}
                                                    alt="Video Story"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                                            <svg className="w-3 h-3 md:w-4 md:h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CommunityPrograms;
