import React from 'react';
import avatarSvg from '../Assets/avatar.svg'
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiMongodb } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiPostgresql, SiDocker } from 'react-icons/si';

const About = () => {
    const skills = [
        { icon: DiJavascript1, name: 'JavaScript', color: 'text-yellow-400' },
        { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
        { icon: DiReact, name: 'React', color: 'text-cyan-400' },
        { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-100' },
        { icon: DiNodejs, name: 'Node.js', color: 'text-green-500' },
        { icon: DiPython, name: 'Python', color: 'text-blue-400' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-teal-400' },
        { icon: DiMongodb, name: 'MongoDB', color: 'text-green-600' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-600' },
        { icon: SiFirebase, name: 'Firebase', color: 'text-yellow-500' },
        { icon: DiGit, name: 'Git', color: 'text-orange-600' },
        { icon: SiDocker, name: 'Docker', color: 'text-blue-400' }
    ];

    const activities = [
        'Bersepeda',
        'Bermain game',
        'Belajar mengenai jaringan komputer'
    ];

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Know Who <span className="gradient-text">I Am</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="animate-fade-in">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-semibold text-white mb-6">About Me</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Halo Semuanya, Saya <span className="text-primary-300 font-semibold">Agus Susanto</span> dari{' '}
                                    <span className="text-secondary-300 font-semibold">Kota Bekasi, Jawa Barat.</span>.
                                </p>
                                <p>
                                    Saat ini saya sedang aktif meningkatkan skill programming dengan mengikuti bootcamp dan berbagai pelatihan untuk mempersiapkan diri memasuki dunia kerja sebagai {' '}
                                    <span className="text-primary-300 font-semibold">Fullstack Developer</span>.
                                </p>
                                <p>
                                    Saya merupakan lulusan Sistem Informasi dan memiliki passion yang besar dalam menciptakan solusi digital yang dapat memberikan dampak positif bagi kehidupan orang banyak.
                                </p>
                                <p>
                                    Selain coding, saya senang mengeksplor teknologi baru, belajar framework terbaru, dan belajar berbagai hal yang berhubungan dengan web developer.
                                </p>
                            </div>

                            {/* Activities */}
                            <div className="mt-8">
                                <h4 className="text-xl font-semibold text-white mb-4">
                                    Selain coding, Saya memiliki beberapa aktivitas yang saya sukai:
                                </h4>
                                <ul className="space-y-2">
                                    {activities.map((activity, index) => (
                                        <li key={index} className="flex items-center text-gray-300">
                                            <span className="w-2 h-2 bg-primary-400 rounded-full mr-3"></span>
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-start animate-slide-up">
                        <div className="relative">
                            <img
                                src={avatarSvg}
                                alt="About"
                                className="rounded-2xl shadow-2xl max-w-sm w-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-white mb-4">
                        Professional <span className="gradient-text">Skillset</span>
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-12"></div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map(({ icon: Icon, name, color }, index) => (
                            <div
                                key={name}
                                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-hover text-center"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Icon className={`text-5xl ${color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                                <p className="text-white text-sm font-medium">{name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-white mb-4">
                        <span className="gradient-text">Tools</span> I Use
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-12"></div>
                    
                    <div className="flex flex-wrap justify-center gap-4">
                        {['VS Code', 'Git', 'Docker', 'Figma', 'Postman', 'Vercel', 'Anaconda', 'Streamlit'].map((tool, index) => (
                            <div
                                key={tool}
                                className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="text-white font-medium">{tool}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default About;
