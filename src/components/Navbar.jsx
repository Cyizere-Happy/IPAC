import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ResonateLogo.png';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const isActive = (path) => {
        // Special handling for home page
        if (path === '/') {
            return location.pathname === '/';
        }
        // For Journey, check both path and query params
        if (path === '/about?tab=story') {
            return location.pathname === '/about' && location.search.includes('tab=story');
        }
        // For other paths, check if current path starts with it
        return location.pathname.startsWith(path);
    };

    const navLinks = [
        { name: 'Overview', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Journey', path: '/impact' },
        { name: 'Programs', path: '/programs' },
        { name: 'Blog', path: '/blog' },
        { name: 'Gallery', path: '/gallery' },
    ];

    // Determine if navbar should be collapsed
    const isCollapsed = scrolled && !isHovered;

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav
                    className={`
                        bg-white/70 backdrop-blur-xl shadow-2xl rounded-full
                        flex items-center pointer-events-auto border border-white/40
                        transition-all duration-700 ease-in-out
                        ${isCollapsed ? 'px-4 py-3 gap-0' : 'px-3 py-2 pl-6 gap-2'}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Resonate Logo"
                            className="h-8 w-auto object-contain transition-all duration-700"
                        />
                    </Link>

                    {/* Links - fade out when collapsed */}
                    <div
                        className={`
                            hidden md:flex items-center gap-0
                            transition-all duration-700 ease-in-out
                            ${isCollapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-[600px] ml-4'}
                        `}
                    >
                        {navLinks.map((link) => {
                            const isLinkActive = isActive(link.path);

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`
                                        px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                                        ${isLinkActive
                                            ? 'bg-black text-white shadow-md'
                                            : 'text-gray-600 hover:text-black hover:bg-gray-100'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button - fade out when collapsed */}
                    <div
                        className={`
                            flex items-center gap-2
                            transition-all duration-700 ease-in-out
                            ${isCollapsed ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-[200px] ml-2'}
                        `}
                    >
                        <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors shadow-md hidden sm:block whitespace-nowrap">
                            Get Started
                        </button>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Drawer */}
            <div
                className={`
                    fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden
                    transform transition-transform duration-300 ease-in-out
                    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <img src={Logo} alt="Resonate Logo" className="h-8" />
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const isLinkActive = isActive(link.path);
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`
                                            px-4 py-3 rounded-xl text-base font-medium transition-all duration-200
                                            ${isLinkActive
                                                ? 'bg-black text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="p-6 border-t border-gray-100">
                        <button className="w-full bg-primary text-white px-6 py-3 rounded-xl text-base font-bold hover:bg-orange-600 transition-colors shadow-md">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
