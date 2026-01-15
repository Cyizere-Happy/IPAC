import React from 'react';
import Journey from '../components/Journey';

const ImpactPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#FDFBF7] pt-12 md:pt-16 pb-12 md:pb-16 px-4 md:px-6 lg:px-12 xl:px-24">

            {/* 10 Years of Impact Summary */}
            <div className="max-w-4xl mb-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
                    10 Years of Impact Summary
                </h1>
                <div className="flex flex-col gap-4 md:gap-6 text-gray-600 leading-relaxed text-sm md:text-base">
                    <p>
                        In 2023 as Resonate celebrated 10 Years of impacting lives and communities, we reflected on milestones that shaped the organization and celebrated through a series of events in
                        <strong> New York, Dallas, San Francisco, Boston, and Kigali.</strong> During the celebration, Resonate also showcased the social and economic impact of its leadership and soft skills programs on women's and girls' lives and highlighted future goals.
                    </p>
                    <p>
                        A lot has been achieved; Resonate has expanded its programs to hard-to-reach rural communities of Rwanda, validated its impact through the Randomized Control Trial (RCT), built strong and meaningful partnerships with 100+ organizations, created jobs, and so much more.
                    </p>
                </div>
            </div>

            {/* The Journey Component */}
            <Journey />

            {/* Impact Stories & Media Section */}
            <div className="mt-12 md:mt-16">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-3">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black">Impact Stories</h2>
                        <p className="text-gray-500 text-xs md:text-sm mt-1">Hear directly from the women and girls we've partnered with.</p>
                    </div>
                    <a
                        href="https://www.youtube.com/@ResonateImpact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs md:text-sm font-bold hover:underline flex items-center gap-1.5"
                    >
                        YouTube <span>↗</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200 mb-3 shadow-sm">
                                <img
                                    src={`https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop`}
                                    alt="Story thumbnail"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg">
                                        <svg width="16" height="16" md:width="20" md:height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold text-sm md:text-base text-black group-hover:text-primary transition-colors">Economic Impact {item}</h3>
                            <p className="text-xs text-gray-500">Village Savings, Rwanda</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Premium Call to Action Section */}
            <div className="mt-16 md:mt-24 mb-12 md:mb-16 relative group cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/80 rounded-[2rem] md:rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 shadow-[0_20px_50px_rgba(247,103,17,0.05)] overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-primary/10 rounded-full -ml-24 md:-ml-32 -mb-24 md:-mb-32 blur-3xl" />

                    <div className="flex-1 text-center md:text-left z-10">
                        <span className="text-primary font-bold tracking-widest text-[10px] uppercase bg-primary/10 px-3 md:px-4 py-1.5 rounded-full mb-4 md:mb-6 inline-block">
                            Join the Movement
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-3 md:mb-4 leading-tight">
                            Make an impact <span className="text-primary italic">together.</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-lg leading-relaxed font-medium">
                            Your contribution helps us close the confidence gap and empower the next generation of women leaders.
                        </p>
                    </div>

                    <div className="z-10 w-full md:w-auto">
                        <button className="w-full md:w-auto bg-black text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:bg-gray-800 transition-all active:scale-95 group/btn flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
                            Donate to Resonate
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                                <span className="text-xs md:text-sm">→</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactPage;
