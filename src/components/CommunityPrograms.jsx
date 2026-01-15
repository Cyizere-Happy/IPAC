import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const programs = [
    {
        id: 'gira',
        title: 'Gira Ubushobozi',
        subtitle: 'Empowering Future Leaders',
        intro: "In response to the increase in unemployment due to COVID-19, we designed this program to equip youth with the right combination of soft and professional skills to make them more competent on the job market.",
        problem: {
            title: "The Challenge",
            text: "In Rwanda, youth accounts for the highest percentage of the population and plays an essential role in developing the country. However, unemployment rates are high among youth due to limited access to information and opportunities, a low level of employable skills, and inadequate access to resources.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "Our Solution",
            text: [
                "The Gira Ubushobozi initiative focuses on equipping youth from disadvantaged communities with leadership and key soft skills ranging from professional readiness to problem-solving and goal-setting.",
                "Complementing technical skills with vital professional and soft skills is critical in ensuring an economic transformation. We aim to see that youth will be more competent on the job market as they navigate the pandemic's impact."
            ],
            image: "https://images.unsplash.com/photo-1542601906-90da274fcffa?q=80&w=1200&auto=format&fit=crop"
        },
        stories: [
            {
                title: "Meet Claudine",
                subtitle: "From Self-Doubt to CEO",
                sections: [
                    { title: "Before", text: "Claudine underestimated herself and struggled to find a job even though she had completed a short six-month training course in mining." },
                    { title: "After", text: "Claudine became confident to speak to people, approached a CEO for an internship, and now runs her own mining business employing five people." }
                ],
                quote: "Resonate workshop built my capacity to speak up.",
                videoThumbnail: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop"
            },
            {
                title: "Meet Sarah",
                subtitle: "Leading with Confidence",
                sections: [
                    { title: "Challenge", text: "Sarah felt invisible in team meetings and hesitated to share her innovative ideas." },
                    { title: "Growth", text: "She learned to articulate her vision clearly and now leads a team of twenty engineers." }
                ],
                quote: "I no longer wait for permission to lead.",
                videoThumbnail: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 'stem',
        title: 'Rise and STEM',
        subtitle: 'Bridging the Gender Gap',
        intro: "Rise and STEM is dedicated to encouraging girls to pursue careers in Science, Technology, Engineering, and Mathematics through hands-on training and mentorship.",
        problem: {
            title: "The Gap",
            text: "Women are significantly underrepresented in STEM fields. This gap starts early, with girls often discouraged from pursuing math and science due to societal stereotypes and a lack of female role models.",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "Our Solution",
            text: [
                "We provide comprehensive STEM workshops that combine technical training with our core leadership curriculum. Girls learn coding, robotics, and engineering principles while also building confidence.",
                "Partnerships with tech companies provide mentorship and internship opportunities, showing participants a clear pathway to a career in STEM."
            ],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
        },
        stories: [
            {
                title: "Meet Angelique",
                subtitle: "Future Engineer",
                sections: [
                    { title: "Challenge", text: "Angelique loved math but was told engineering was for boys." },
                    { title: "Breakthrough", text: "After building her first robot, she realized her potential was limitless." }
                ],
                quote: "I am building the future, one line of code at a time.",
                videoThumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
            },
            {
                title: "Meet Diane",
                subtitle: "Tech Innovator",
                sections: [
                    { title: "Start", text: "Diane had never touched a computer before the program." },
                    { title: "Now", text: "She is developing an app to help local farmers track market prices." }
                ],
                quote: "Technology is the tool, but I am the creator.",
                videoThumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
            }
        ]
    },
    {
        id: 'speak',
        title: 'Speak for Change',
        subtitle: 'Amplifying Voices',
        intro: "Speak for Change outfits women with the public speaking and advocacy skills needed to influence policy and community decisions.",
        problem: {
            title: "The Silence",
            text: "Women's voices are often excluded from decision-making processes, from local community councils to national policy forums. This silence means that issues affecting women and families are frequently overlooked.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
        },
        solution: {
            title: "Our Solution",
            text: [
                "Our advocacy training focuses on effective communication, storytelling, and negotiation. We help women identify the issues they care about and develop strategic campaigns to address them.",
                "We create direct channels for women to engage with local leaders and policymakers, ensuring their proposals are heard and considered."
            ],
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
        }
        ,
        stories: [
            {
                title: "Meet Marie",
                subtitle: "Community Leader",
                sections: [
                    { title: "Issue", text: "Her village lacked reliable access to clean water, burdening women and girls." },
                    { title: "Action", text: "Marie organized a community committee and successfully petitioned for a new well." }
                ],
                quote: "My voice has the power to bring clean water to my children.",
                videoThumbnail: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1200&auto=format&fit=crop"
            },
            {
                title: "Meet Grace",
                subtitle: "Policy Advocate",
                sections: [
                    { title: "Problem", text: "Local schools had high dropout rates for girls due to lack of sanitation facilities." },
                    { title: "Solution", text: "Grace worked with the district council to fund new facilities, increasing attendance by 40%." }
                ],
                quote: "Change starts when we refuse to stay silent.",
                videoThumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
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
        <section className="bg-[#FDFBF7] min-h-screen font-sans text-gray-900 pb-16">
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
                                    <div className="w-full md:w-[85%] h-[350px] overflow-hidden rounded-[24px]">
                                        <img
                                            src={program.problem.image}
                                            alt="Context"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:absolute md:top-1/2 md:right-0 md:transform md:-translate-y-1/2 md:-translate-x-6 w-full md:w-[420px] bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[20px] shadow-lg border border-white/50 mt-[-40px] md:mt-0 relative z-10 mx-auto w-[90%]">
                                        <span className="block text-primary font-bold tracking-widest uppercase text-[10px] mb-2">The Challenge</span>
                                        <h2 className="text-2xl font-bold mb-3">{program.problem.title}</h2>
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                            {program.problem.text}
                                        </p>
                                    </div>
                                </div>

                                {/* LAYERED SECTION 2: SOLUTION - Scaled Down */}
                                <div className="relative mb-16 flex flex-col md:flex-row justify-end text-right">
                                    <div className="w-full md:w-[85%] h-[350px] overflow-hidden rounded-[24px] order-1 md:order-2">
                                        <img
                                            src={program.solution.image}
                                            alt="Solution"
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:absolute md:top-1/2 md:left-0 md:transform md:-translate-y-1/2 md:translate-x-6 w-full md:w-[420px] bg-black/90 backdrop-blur-xl p-6 md:p-8 rounded-[20px] shadow-lg mt-[-40px] md:mt-0 relative z-10 mx-auto w-[90%] order-2 md:order-1 text-left">
                                        <span className="block text-primary font-bold tracking-widest uppercase text-[10px] mb-2">Our Methodology</span>
                                        <h2 className="text-2xl font-bold text-white mb-3">{program.solution.title}</h2>
                                        <div className="flex flex-col gap-2 text-gray-300 leading-relaxed text-sm md:text-base">
                                            {program.solution.text.map((p, i) => (
                                                <p key={i}>{p}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* IMMERSIVE IMPACT STORY CAROUSEL */}
                                <div className="max-w-5xl mx-auto bg-white rounded-[24px] p-6 md:p-10 shadow-md relative overflow-hidden min-h-[500px]">
                                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px] pointer-events-none -mt-20 -mr-20" />

                                    <div className="flex justify-between items-center mb-6 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-1 bg-black" />
                                            <span className="text-base font-medium tracking-tight">Impact Stories</span>
                                        </div>

                                        {/* Carousel Controls */}
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setCurrentStoryIndex((prev) => (prev - 1 + program.stories.length) % program.stories.length)}
                                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={() => setCurrentStoryIndex((prev) => (prev + 1) % program.stories.length)}
                                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
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
                                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10"
                                        >
                                            <div>
                                                <h2 className="text-3xl md:text-4xl font-bold mb-2">{program.stories[currentStoryIndex].title}</h2>
                                                <p className="text-lg text-gray-400 mb-6">{program.stories[currentStoryIndex].subtitle}</p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                                    {program.stories[currentStoryIndex].sections.map((section, idx) => (
                                                        <div key={idx} className="border-l-2 border-gray-100 pl-4">
                                                            <h4 className="font-bold text-sm mb-1">{section.title}</h4>
                                                            <p className="text-gray-600 text-xs md:text-sm">{section.text}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <blockquote className="text-lg font-medium italic text-gray-900 border-l-4 border-primary pl-4 py-2">
                                                    "{program.stories[currentStoryIndex].quote}"
                                                </blockquote>
                                            </div>

                                            <div className="relative h-[300px] w-full rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                                                <img
                                                    src={program.stories[currentStoryIndex].videoThumbnail}
                                                    alt="Video Story"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                                                            <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
