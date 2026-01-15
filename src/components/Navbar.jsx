import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ResonateLogo.png';

const Navbar = () => {
    return (
        <nav className="w-full py-5 px-6 md:px-12 lg:px-20 flex justify-between items-center bg-transparent relative z-10 font-sans">
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Resonate Logo" className="h-10 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex gap-10 text-sm font-medium text-black">
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                <Link to="/" className="hover:text-primary transition-colors">Overview</Link>
                <Link to="/impact" className="hover:text-primary transition-colors font-bold text-primary underline decoration-2 underline-offset-8">Journey</Link>
                <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
                <a href="#" className="hover:text-primary transition-colors">Marketer</a>
                <a href="#" className="hover:text-primary transition-colors">Resources</a>
            </div>

            <button className="bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors cursor-pointer">
                Get started
            </button>
        </nav>
    );
};

export default Navbar;
