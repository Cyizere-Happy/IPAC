import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/ResonateLogo.png';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
