import React from 'react';

const DarkSection = () => {
    return (
        <section className="bg-[#111111] py-32 px-8 md:px-16 lg:px-32 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-2 tracking-tight">
                “Let's grow your brand together!”
            </h2>
            <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest mt-2">
                Empowerment • Confidence • Leadership
            </p>

            {/* Cards Row - Mix of Light and Dark */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Light/White */}
                <div className="bg-white rounded-2xl p-8 text-left min-h-[220px] flex flex-col justify-between hover:bg-gray-100 transition-colors">
                    <div>
                        <h3 className="text-2xl font-bold text-black mb-2">Empowerment</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                            Realize your potential through structured programs designed to break down internal barriers.
                        </p>
                    </div>
                    <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold self-start mt-4 hover:bg-gray-800 transition-colors">
                        Explore Programs
                    </button>
                </div>

                {/* Card 2: Dark */}
                <div className="bg-[#1A1A1A] rounded-2xl p-8 text-left min-h-[220px] flex flex-col justify-between hover:bg-[#222] transition-colors">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Leadership</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Take charge of your career with executive coaching and leadership workshops.
                        </p>
                    </div>
                    <button className="bg-transparent border border-gray-600 text-white px-5 py-2 rounded-full text-xs font-bold self-start mt-4 hover:bg-white hover:text-black transition-colors">
                        View Service
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DarkSection;
