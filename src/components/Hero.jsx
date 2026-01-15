import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 pt-10 md:pt-16 pb-10 bg-[#FDFBF7] overflow-hidden">

            {/* Content Left */}
            <div className="w-full md:w-[45%] flex flex-col gap-5 z-10">
                <h1 className="text-4xl md:text-6xl leading-[1.1] font-bold text-black tracking-tight">
                    Fixing the <br />
                    Confidence Gap.
                </h1>

                <div className="flex gap-4 mt-4">
                    <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2 cursor-pointer">
                        See how it works
                        <span className="text-lg">›</span>
                    </button>
                </div>
            </div>

            {/* Image Right */}
            <div className="w-full md:w-[50%] h-[400px] md:h-[500px] relative mt-8 md:mt-0">
                <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                    alt="Professional Woman"
                    className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
