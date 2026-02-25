import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
    const milestones = [
        {
            title: "Inception",
            desc: "IPAC founded at Rwanda Coding Academy.",
            x: 100,
            y: 350,
            labelPos: "top",
        },
        {
            title: "Community",
            desc: "Grew to 50+ active members in 3 months.",
            x: 300,
            y: 280,
            labelPos: "bottom",
        },
        {
            title: "Awareness",
            desc: "Conducted first campus-wide IP workshop.",
            x: 420,
            y: 200,
            labelPos: "top",
        },
        {
            title: "Protection",
            desc: "Helping students secure their first copyrights.",
            x: 650,
            y: 120,
            labelPos: "bottom",
        },
    ];

    // Path ending exactly at the target center
    const targetX = 880;
    const targetY = 100;
    const pathData = `M 40 380 Q 100 380 ${milestones[0].x} ${milestones[0].y} T ${milestones[1].x} ${milestones[1].y} T ${milestones[2].x} ${milestones[2].y} T ${milestones[3].x} ${milestones[3].y} L ${targetX} ${targetY}`;

    return (
        <div className="w-full overflow-hidden">
            {/* Visualization */}
            <div className="relative w-full aspect-[25/9] min-h-[350px]">
                {/* SVG Path */}
                <svg viewBox="0 0 1000 400" className="absolute inset-0 w-full h-full fill-none pointer-events-none">
                    <motion.path
                        d={pathData}
                        stroke="#E5E5E5"
                        strokeWidth="12"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                    <motion.path
                        d={pathData}
                        stroke="#D1D5DB"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                </svg>

                {/* Milestones */}
                {milestones.map((m, i) => {
                    const leftPercent = (m.x / 1000) * 100;
                    const topPercent = (m.y / 400) * 100;

                    return (
                        <div
                            key={i}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="relative z-10 w-12 h-12 flex items-center justify-center group"
                            >
                                <div className="absolute inset-0 bg-primary/5 rounded-full blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="w-full h-full bg-white rounded-full shadow-md border-2 border-white flex items-center justify-center transition-transform group-hover:scale-105">
                                    <div className="w-7 h-7 rounded-full border border-black/20 flex items-center justify-center bg-black/5">
                                        <div className="w-2 h-2 bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
                                    </div>
                                </div>

                                {/* Label - Standardized font sizes to match page */}
                                <div
                                    className={`absolute w-56 text-left ${m.labelPos === 'top' ? 'bottom-16' : 'top-16'} left-6 pointer-events-none`}
                                >
                                    <h4 className="text-xl font-bold text-black mb-1 group-hover:text-primary transition-colors">{m.title}</h4>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-[200px]">{m.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* Final Destination Target - Larger & More Prominent */}
                <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${(targetX / 1000) * 100}%`, top: `${(targetY / 400) * 100}%` }}
                >
                    <div className="relative w-36 h-36 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-2 border-primary opacity-20 animate-ping" />
                        <div className="w-full h-full rounded-full border-[10px] border-black/5 flex items-center justify-center p-3 bg-white/40 backdrop-blur-md shadow-inner">
                            <div className="w-full h-full rounded-full border-2 border-black/30 flex items-center justify-center">
                                <div className="w-8 h-8 bg-black rounded-full shadow-[0_0_25px_rgba(0,0,0,0.9)]" />
                            </div>
                        </div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-2xl tracking-widest uppercase items-center flex gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                            Destination
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="mt-8 flex flex-col items-center">
                <button className="bg-black text-white px-8 py-2.5 rounded-full text-xs font-bold shadow-xl hover:bg-gray-800 transition-all flex items-center gap-2 group">
                    Explore Stories
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        </div>
    );
};

export default Journey;
