import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: AiFillGithub, href: 'https://github.com/AgusSusanto2858', label: 'GitHub' },
        { icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/agus-susanto-888b16119', label: 'LinkedIn' },
        { icon: AiFillFacebook, href: 'https://web.facebook.com/profile.php?id=100013775675250', label: 'Facebook' },
        { icon: AiFillInstagram, href: 'https://www.instagram.com/agussusanto2858/', label: 'Instagram' }
    ];

    return (
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Brand Section */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold gradient-text">Agus Susanto</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Developer yang suka membuat website keren dan aplikasi web yang menarik.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                        <div className="space-y-2 text-gray-300">
                            <a 
                                href="mailto:agussusanto2858@gmail.com" 
                                className="flex items-center hover:text-white transition-colors"
                            >
                                📧 agussusanto2858@gmail.com
                            </a>
                            <p>📱 +62 813-8514-3983</p>
                            <p>📍 Kota Bekasi</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                        <div className="flex items-center text-gray-300 text-sm">
                            <span>© {currentYear} Agus Susanto. Dibuat menggunakan React & Tailwind CSS</span>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="flex items-center space-x-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={`bottom-${label}`}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all duration-300 hover:transform hover:-translate-y-1"
                                    aria-label={label}
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
        </footer>
    );
};

export default Footer;