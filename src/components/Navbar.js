import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineFileText, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: '/', icon: AiOutlineHome, label: 'Home' },
        { path: '/about', icon: AiOutlineUser, label: 'About' },
        { path: '/projects', icon: AiOutlineFundProjectionScreen, label: 'Projects' },
        { path: '/resume', icon: AiOutlineFileText, label: 'Resume' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-slate-900/70 backdrop-blur-md border-b border-slate-700/40 shadow-lg shadow-slate-900/10' 
                : 'bg-slate-900/60 backdrop-blur-md border-b border-slate-700/20'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                        Portfolio
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-1">
                        {navItems.map(({ path, icon: Icon, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 relative group ${
                                        isActive 
                                            ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25' 
                                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50 hover:transform hover:-translate-y-0.5'
                                    }`
                                }
                            >
                                <Icon className="text-lg" />
                                <span className="font-medium">{label}</span>
                                {/* Hover effect underline */}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                        >
                            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/60 backdrop-blur-md rounded-lg mb-4 border border-slate-700/30">
                            {navItems.map(({ path, icon: Icon, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                                            isActive 
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                                                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                        }`
                                    }
                                >
                                    <Icon className="text-lg" />
                                    <span>{label}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        </nav>
    );
};

export default Navbar;