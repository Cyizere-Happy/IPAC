import React from 'react';
import { motion } from 'framer-motion';

const aboutItems = [
    {
        id: 1,
        title: "The Mission",
        subtitle: "IP Awareness",
        description: "Empowering Rwanda's next generation of tech leaders to protect their innovations from day one.",
        icon: "🎯"
    },
    {
        id: 2,
        title: "The Vision",
        subtitle: "Global Standards",
        description: "Setting a national benchmark for student-led intellectual property advocacy and creative rights.",
        icon: "👁️"
    },
    {
        id: 3,
        title: "The Values",
        subtitle: "Integrity & Innovation",
        description: "We believe that true innovation requires the courage to build and the wisdom to protect.",
        icon: "⚖️"
    },
    {
        id: 4,
        title: "The Strategy",
        subtitle: "Campus Clinics",
        description: "Providing hands-on legal audits and copyright workshops for every student project at RCA.",
        icon: "⚡"
    },
    {
        id: 5,
        title: "The Impact",
        subtitle: "Future Founders",
        description: "Transforming technical skill into secure, monetizable assets for 50+ active members.",
        icon: "💎"
    }
];

const IPAboutLayout = () => {
    return (
        <div className="relative py-12 md:py-20 bg-white font-sans overflow-hidden">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 -translate-x-1/2 hidden md:block" />

            <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 relative">
                {aboutItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={item.id} className="relative mb-12 md:mb-16">
                            {/* Marker Dot */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 hidden md:block">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-3 h-3 rounded-full bg-black border-2 border-white shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 w-full h-full rounded-full bg-black/20 -z-10"
                                />
                            </div>

                            <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                {/* Side Label / Category */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full md:w-1/2 text-center ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}
                                >
                                    <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.4em] mb-1 block">{item.subtitle}</span>
                                    <h3 className="text-2xl md:text-3xl font-black text-black tracking-tighter mb-2">{item.title}</h3>
                                </motion.div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                                >
                                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_5px_25px_rgba(0,0,0,0.02)] group hover:shadow-[0_15px_45px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-black opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-3xl">{item.icon}</div>
                                            <div className="text-[10px] font-bold text-gray-400 group-hover:text-black transition-colors cursor-pointer uppercase tracking-widest flex items-center gap-1">
                                                Visit <span>↗</span>
                                            </div>
                                        </div>
                                        <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IPAboutLayout;
