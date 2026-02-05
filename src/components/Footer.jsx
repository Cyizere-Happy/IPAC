import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full bg-white pt-20 pb-10 overflow-hidden font-sans">
            {/* The Asymmetric Curvy Background */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none z-0">
                {/* Accent Layer (Gray) */}
                <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full opacity-10">
                    <path d="M0,200 C300,100 500,500 1200,450 L1200,600 L0,600 Z" fill="#000000" />
                </svg>
                {/* Main Layer (Black) */}
                <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
                    <path d="M0,150 C400,100 600,600 1200,550 L1200,600 L0,600 Z" fill="#000000" />
                </svg>
                {/* Secondary Bottom Bar (Optional Blue-equivalent, using Dark Gray) */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-900" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row items-end justify-between gap-12">

                {/* Left Peak Content (Brand & Desc) */}
                <div className="lg:w-1/3 text-white pb-12 lg:pb-8">
                    <h2 className="text-5xl font-black tracking-tighter mb-4">IPAC</h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-xs">
                        Architecting the future of intellectual property protection for Rwanda's technical elite.
                    </p>
                    <div className="flex gap-4">
                        {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                            <div key={social} className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group">
                                <span className="text-xs font-bold scale-75 uppercase">{social.charAt(0)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1" />
            </div>

            {/* Sub-footer line */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-10 relative z-10 border-t border-gray-100 pt-6">
                <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                    <span>© 2026 IPAC. RCA'S INNOVATION HUB.</span>
                    <span>Precision & Protection</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
