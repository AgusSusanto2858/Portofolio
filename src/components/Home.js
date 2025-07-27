import React, { useState, useEffect } from 'react';
import avatarSvg from '../Assets/avatar.svg'
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Home = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        'Full Stack Developer',
        'Frontend Developer',
        'Backend Developer', 
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    const socialLinks = [
        { icon: AiFillGithub, href: 'https://github.com/AgusSusanto2858', label: 'GitHub' },
        { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/agus-susanto-888b16119', label: 'LinkedIn' },
        { icon: AiFillFacebook, href: 'https://web.facebook.com/profile.php?id=100013775675250', label: 'Facebook' },
        { icon: AiFillInstagram, href: 'https://www.instagram.com/agussusanto2858/', label: 'Instagram' }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left animate-fade-in">
                        <div className="mb-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                                Hi There! 
                                <span className="inline-block animate-bounce-slow ml-2">👋</span>
                            </h1>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                                I'm <span className="gradient-text">Agus Susanto</span>
                            </h2>
                        </div>

                        <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
                            <span className="text-xl sm:text-2xl text-primary-300 font-medium">
                                {roles[currentRole]}
                            </span>
                        </div>

                        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                            Bersemangat dalam menciptakan pengalaman web yang luar biasa. 
                            Suka membangun aplikasi yang mudah digunakan dan menyelesaikan masalah di dunia nyata.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="/resume" className="btn-primary">
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end animate-slide-up">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 p-1">
                                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={avatarSvg}
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;