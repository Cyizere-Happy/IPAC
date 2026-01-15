import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 md:py-16 px-6 md:px-12 lg:px-24 border-t border-gray-900">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

                {/* Brand Column */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-4 md:mb-6">resonate</h2>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        Closing the confidence gap and empowering women to lead with authority.
                    </p>
                </div>

                {/* Links Column 1 */}
                <div className="flex flex-col gap-3 md:gap-4">
                    <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Company</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">About Us</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Careers</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Press</a>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-3 md:gap-4">
                    <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Resources</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Blog</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Mentorship</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Events</a>
                </div>

                {/* Links Column 3 */}
                <div className="flex flex-col gap-3 md:gap-4">
                    <h4 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Legal</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm">Cookie Policy</a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 border-t border-gray-800 gap-4">
                <p className="text-gray-500 text-xs text-center md:text-left">© 2024 Resonate Inc. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6">
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
