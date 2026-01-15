import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const tabs = [
    { id: 'work', label: 'Our Work' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'partners', label: 'Our Partners' },
    { id: 'team', label: 'Our Team' },
    { id: 'story', label: '10-Year Journey' },
];

const AboutPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'story';

    const setActiveTab = (id) => {
        setSearchParams({ tab: id });
    };

    const impactStories = [
        {
            name: "Louise",
            quote: "The hummingbird story inspired me to think of how I could change my situation.",
            role: "Resonate Alumni"
        },
        {
            name: "Marembo",
            quote: "Before I could just read the curriculum for the girls I mentor, but today I use stories to help them understand.",
            role: "Mentor"
        },
        {
            name: "Martin",
            quote: "Resonate changed my perspective of leadership, I did not have to be very superior but to be on the same level with the people I lead.",
            role: "Community Leader"
        },
        {
            name: "Adelphine",
            quote: "After Resonate’s training, I became more daring, and I am more confident in taking new opportunities.",
            role: "Entrepreneur"
        }
    ];

    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const nextStory = () => {
        setCurrentStoryIndex((prev) => (prev + 1) % impactStories.length);
    };

    const prevStory = () => {
        setCurrentStoryIndex((prev) => (prev - 1 + impactStories.length) % impactStories.length);
    };

    return (
        <div className="w-full min-h-screen bg-[#FDFBF7] pt-24 pb-20 font-sans">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Section */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        We are a catalyst for change, empowering women and youth to lead with confidence and purpose.
                    </motion.p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-16 overflow-x-auto">
                    <div className="bg-white/50 backdrop-blur-xl rounded-full p-1.5 inline-flex shadow-sm border border-white/60">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 relative whitespace-nowrap ${activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeAboutTab"
                                        className="absolute inset-0 bg-black rounded-full shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="min-h-[400px]"
                    >
                        {activeTab === 'story' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">10-Year Journey</h2>
                                    <div className="space-y-6 text-gray-600 leading-relaxed">
                                        <p>
                                            Founded with a vision to unlock potential, Resonate started as a small workshop in Rwanda. We realized that while technical skills are essential, confidence and leadership are the catalysts that turn skills into action.
                                        </p>
                                        <p>
                                            Over the past decade, we have grown into a leading organization, partnering with over 100 institutions to integrate our leadership methodology into their programs. Our story is one of resilience, growth, and the unshakeable belief in the power of women and youth.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 mt-10">
                                        {[
                                            { label: "Years", value: "10+" },
                                            { label: "Partners", value: "100+" },
                                            { label: "Impacted", value: "20k+" }
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-black text-black">{stat.value}</div>
                                                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
                                        alt="Our Story"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'work' && (
                            <div>
                                <h2 className="text-3xl font-bold mb-10 text-center">Our Work</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        { title: "Leadership Workshops", desc: "Intensive 2-day training sessions." },
                                        { title: "Training of Trainers", desc: "Scaling impact through partners." },
                                        { title: "Custom Integration", desc: "Tailored curricula for organizations." }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                                            <div className="w-12 h-12 bg-gray-900 rounded-full mb-6 flex items-center justify-center text-white">
                                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'impact' && (
                            <div className="space-y-20">
                                {/* Key Stats Section */}
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-10">Since Our Founding</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                                        <div className="text-center md:text-right md:border-r md:border-gray-300 md:pr-12 py-4">
                                            <div className="text-6xl md:text-7xl font-black text-primary mb-2">40,000<span className="text-4xl align-top">+</span></div>
                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Participants Empowered</div>
                                        </div>
                                        <div className="text-center md:text-left md:pl-4 py-4">
                                            <div className="text-6xl md:text-7xl font-black text-black mb-2">120<span className="text-4xl align-top">+</span></div>
                                            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Partners in East Africa</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Survey Results */}
                                <div className="bg-black text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none -mt-40 -mr-40" />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">2024 Survey Results</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {[
                                                { val: "91%", text: "Increase in Leadership" },
                                                { val: "46%", text: "Started Businesses" },
                                                { val: "88%", text: "Took Leadership Roles" },
                                                { val: "37%", text: "Advanced Professionally" }
                                            ].map((stat, i) => (
                                                <div key={i} className="text-center group">
                                                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
                                                    <div className="text-sm text-gray-400 font-medium leading-relaxed px-4">{stat.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Impact Stories Carousel */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                        <div className="w-8 h-1 bg-primary" />
                                        Participants' Stories
                                    </h3>
                                    <div className="relative">
                                        <div className="flex justify-end gap-3 mb-4">
                                            <button onClick={prevStory} className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors group">
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 group-hover:text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                            </button>
                                            <button onClick={nextStory} className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white transition-colors group">
                                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 group-hover:text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                        </div>

                                        <div className="overflow-hidden">
                                            <motion.div
                                                className="flex gap-6"
                                                animate={{ x: `-${currentStoryIndex * 304}px` }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            >
                                                {impactStories.map((story, i) => (
                                                    <div key={i} className="min-w-[280px] w-[280px] group relative bg-white p-6 rounded-2xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                                        <div className="absolute top-4 right-4 text-4xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors">”</div>

                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-sm group-hover:scale-105 transition-transform duration-500">
                                                                <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=150&auto=format&fit=crop`} alt={story.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-base text-black">{story.name}</h4>
                                                                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{story.role}</span>
                                                            </div>
                                                        </div>

                                                        <p className="text-sm leading-relaxed text-gray-700 font-medium font-serif italic relative z-10">
                                                            "{story.quote}"
                                                        </p>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                {/* Methodology */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-8 text-center">How We Measure Impact</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { title: "Quantitative Data", text: "We measure increase in leadership capacity through pre- and post- surveys, and rigorous one-year follow-ups." },
                                            { title: "Qualitative Data", text: "We consistently evaluate our content, style, and team directly from our participants and partners." },
                                            { title: "Human-Centered Design", text: "We actively seek input from participants and Program partners when designing new programs." }
                                        ].map((method, i) => (
                                            <div key={i} className="bg-[#F9F9F9] p-8 rounded-3xl">
                                                <h4 className="font-bold text-lg mb-4">{method.title}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{method.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* RCT Highlight */}
                                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
                                    <div className="flex-1">
                                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Rigorous Evidence</span>
                                        <h3 className="text-3xl font-bold mb-4">Randomized Control Trial (RCT)</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            In 2016 and 2019, we partnered with researchers from UC Berkeley and Georgetown University to conduct rigorous RCTs. The results showed that storytelling for leadership has strong impacts on psychosocial outcomes, and professional development drives economic results.
                                        </p>
                                        <div className="flex flex-wrap gap-4">
                                            <button className="text-black font-bold border-b-2 border-black hover:text-primary hover:border-primary transition-colors pb-1">Read Executive Summary</button>
                                            <button className="text-black font-bold border-b-2 border-black hover:text-primary hover:border-primary transition-colors pb-1">Read Full Report</button>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 bg-gray-100 h-64 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" alt="Research" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                        <div className="relative z-10 bg-white/90 backdrop-blur px-6 py-3 rounded-xl font-bold text-sm shadow-lg">2019-2020 Results</div>
                                    </div>
                                </div>

                                {/* Learnings */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6">What We Have Learned</h3>
                                        <div className="space-y-6">
                                            {[
                                                { title: "Measuring is Hard", text: "Measuring self-confidence is not straightforward. We tested many indicators and remain committed to finding accurate ways to measure personal transformation." },
                                                { title: "Impact is our Goal", text: "We are impact-driven at our core. We maintain a blended revenue model to maximize both sustainability and impact for underserved women." },
                                                { title: "It's Important to Ask for Help", text: "We can't do everything alone. We actively seek guidance from partners, participants, and advisors." }
                                            ].map((learning, i) => (
                                                <div key={i}>
                                                    <h4 className="font-bold text-black mb-2">{learning.title}</h4>
                                                    <p className="text-gray-500 text-sm leading-relaxed">{learning.text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Annual Reports List */}
                                    <div className="bg-gray-50 p-8 rounded-3xl">
                                        <h3 className="text-xl font-bold mb-6">Annual Reports</h3>
                                        <ul className="space-y-3">
                                            {[2023, 2022, 2021, 2020, 2019, 2018, 2016, 2015].map((year) => (
                                                <li key={year}>
                                                    <a href="#" className="flex justify-between items-center group py-2 border-b border-gray-200">
                                                        <span className="text-gray-600 group-hover:text-black transition-colors">{year} Annual Report</span>
                                                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'partners' && (
                            <div className="space-y-20">
                                {/* Program Partners */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Some Of Our Program Partners</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                                        {[
                                            "Kate Spade New York",
                                            "Rwanda Women's Network",
                                            "Hand in Hand International",
                                            "Ministry of Gender and Family Promotion",
                                            "CARE International",
                                            "African Management Institute",
                                            "RAWISE",
                                            "Trocaire",
                                            "Association des Guides du Rwanda",
                                            " The Girls Foundation of Tanzania",
                                            "AVSI",
                                            "Sustainable Growers",
                                            "National Youth Council",
                                            "Cricket Builds Hope",
                                            "Abahizi Rwanda",
                                            "Girls in ICT Rwanda",
                                            "Bank of Kigali",
                                            "YEPI"
                                        ].map((partner, i) => (
                                            <div key={i} className="group bg-white p-6 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-all h-24">
                                                <span className="font-bold text-gray-400 group-hover:text-primary text-center text-sm transition-colors">{partner}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Funding Partners */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Our Funding Partners</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
                                        {[
                                            "Five Together Foundation",
                                            "Pilot House Philanthropy",
                                            "Segal Family Foundation",
                                            "World Connect",
                                            "Issroff Family Foundation",
                                            "Israel",
                                            "Fossil Foundation",
                                            "Rotary International",
                                            "On Purpose",
                                            "Imago Dei Fund",
                                            "Mastercard Foundation",
                                            "Be That Girl Foundation",
                                            "Azu Foundation"
                                        ].map((partner, i) => (
                                            <div key={i} className="group bg-white p-6 rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-all h-24">
                                                <span className="font-bold text-gray-400 group-hover:text-primary text-center text-sm transition-colors">{partner}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Donors */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Our Donors</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {[
                                            "Andrea Woodside", "Dawn Hofberg", "Kevin Jessup", "Andrew Rubinger",
                                            "Deborah Dean", "Kimberly Agan", "Anjuli Solanki", "Francis X Tracy",
                                            "Lamiaa Laurene Diaf", "Ayla Schlosser", "Emily Edwards", "Lisa and Ted Williams",
                                            "Brett Wiley", "Evan Hofberg", "Mr & Mrs Thomas Remington", "Chantal Uwizera",
                                            "F-Prime Capital", "Natalie REKSTAD", "Claire Evans", "Katherine Conway",
                                            "Robert Warner", "Daniele Viappiani", "Katie Bunten-Wamaru", "Yasu Fukui"
                                        ].map((donor, i) => (
                                            <div key={i} className="bg-[#FAF7F5] p-6 rounded-2xl flex items-center justify-center text-center hover:shadow-md transition-all border border-[#EAE0D5] group aspect-[3/2]">
                                                <span className="font-serif font-bold text-gray-800 text-lg group-hover:text-primary transition-colors">{donor}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'team' && (
                            <div className="space-y-20">
                                {/* Our Team */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                        {[
                                            { name: "Norette Turimuci", role: "Executive Director" },
                                            { name: "Team Member", role: "Program Manager" },
                                            { name: "Team Member", role: "Partnerships Lead" },
                                            { name: "Team Member", role: "Communications" },
                                            { name: "Team Member", role: "Finance" },
                                            { name: "Team Member", role: "Operations" }
                                        ].map((member, i) => (
                                            <div key={i} className="group text-center">
                                                <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                                    <img
                                                        src={`https://images.unsplash.com/photo-${1530000000000 + i}?q=80&w=400&auto=format&fit=crop`}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h3 className="font-bold text-lg">{member.name}</h3>
                                                <p className="text-sm text-gray-500 uppercase tracking-wide">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Board of Directors */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Our Board of Directors</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                        {[
                                            { name: "Board Member", role: "Chair" },
                                            { name: "Board Member", role: "Vice Chair" },
                                            { name: "Board Member", role: "Treasurer" },
                                            { name: "Board Member", role: "Secretary" },
                                            { name: "Board Member", role: "Member" },
                                            { name: "Board Member", role: "Member" }
                                        ].map((member, i) => (
                                            <div key={i} className="group text-center">
                                                <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                                    <img
                                                        src={`https://images.unsplash.com/photo-${1540000000000 + i}?q=80&w=400&auto=format&fit=crop`}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h3 className="font-bold text-lg">{member.name}</h3>
                                                <p className="text-sm text-gray-500 uppercase tracking-wide">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Rwanda Advisory Board */}
                                <div>
                                    <h2 className="text-3xl font-bold mb-10 text-center">Our Rwanda Advisory Board</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                        {[
                                            { name: "Advisory Member", role: "Advisor" },
                                            { name: "Advisory Member", role: "Advisor" },
                                            { name: "Advisory Member", role: "Advisor" },
                                            { name: "Advisory Member", role: "Advisor" }
                                        ].map((member, i) => (
                                            <div key={i} className="group text-center">
                                                <div className="w-full aspect-[4/5] bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                                                    <img
                                                        src={`https://images.unsplash.com/photo-${1550000000000 + i}?q=80&w=400&auto=format&fit=crop`}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h3 className="font-bold text-lg">{member.name}</h3>
                                                <p className="text-sm text-gray-500 uppercase tracking-wide">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AboutPage;
