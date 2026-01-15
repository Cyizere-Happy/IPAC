import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-8 md:px-24 border-t border-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <h2 className="text-2xl font-bold tracking-tight text-primary mb-6">resonate</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Closing the confidence gap and empowering women to lead with authority.
                    </p>
                </div>

                {/* Links Column 1 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Company</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Press</a>
                </div>

                {/* Links Column 2 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Resources</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Mentorship</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Events</a>
                </div>

                {/* Links Column 3 */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-bold mb-2">Legal</h4>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
                <p className="text-gray-500 text-xs">© 2024 Resonate Inc. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                    <div className="w-5 h-5 bg-gray-800 rounded-full hover:bg-primary transition-colors cursor-pointer"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
