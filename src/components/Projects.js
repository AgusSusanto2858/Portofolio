import React from 'react';
import { AiFillGithub, AiOutlineEye } from 'react-icons/ai';
import dKlasifikasiImg from '../Assets/Projects/d-klasifikasi.png';
import pHewanTernakImg from '../Assets/Projects/Pengenal Hewan Ternak.png';
import { DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiMongodb, DiGithub, DiJava } from 'react-icons/di';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiStreamlit, SiTypescript, SiFirebase, SiAndroidstudio, SiCodeigniter } from 'react-icons/si';

const Projects = () => {
    const projects = [
        {
            title: 'D-Klasifikasi',
            description: 'Website untuk mengklasifikasikan dokumen Kota Depok menggunakan Metode TF-IDF dan Cosine Similarity',
            image: dKlasifikasiImg,
            technologies: [
                { icon: DiPython, name: 'Python', color: 'text-blue-400' },
                { icon: SiStreamlit, name: 'Streamlit.js', color: 'text-red-500' },
                { icon: DiGithub, name: 'Github', color: 'text-gray-800' },
            ],
            github: 'https://github.com/AgusSusanto2858/d-klasifikasi2',
            demo: 'https://d-klasifikasi.streamlit.app/',
            featured: true
        },
        {
            title: 'Aplikasi Pengenal Hewan Ternak',
            description: 'Aplikasi sederhana untuk mengenalkan hewan ternak keanak-anak dalam bahasa indonesia, inggris dan mengenalkan suara hewan tersebut.',
            image: pHewanTernakImg,
            technologies: [
                { icon: SiAndroidstudio, name: 'Android Studio', color: 'text-green-400' },
                { icon: DiJava, name: 'Java', color: 'text-orange-500' },
                { icon: SiCodeigniter, name: 'XML', color: 'text-orange-400' }
            ],
            github: 'https://drive.google.com/file/d/1_qTWIpvguM97ANl-4kyO_A3XNu1UgvHG/view?usp=sharing',
            demo: 'https://drive.google.com/file/d/1_qTWIpvguM97ANl-4kyO_A3XNu1UgvHG/view?usp=sharing',
            featured: true,
            codeOnly: true // Flag khusus untuk proyek ini
        }
    ];

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    const ProjectCard = ({ project, index, isFeatured = false }) => (
        <div
            className={`group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 card-hover ${
                isFeatured ? 'lg:col-span-2' : ''
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                        <AiFillGithub size={20} />
                    </a>
                    {!project.codeOnly && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                            <AiOutlineEye size={20} />
                        </a>
                    )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                        </span>
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(({ icon: Icon, name, color }, techIndex) => (
                        <div
                            key={name}
                            className="flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1 text-sm"
                        >
                            <Icon className={`${color} text-base`} />
                            <span className="text-white">{name}</span>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                        <AiFillGithub />
                        <span>Code</span>
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 btn-primary"
                    >
                        <AiOutlineEye />
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <section className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        My Recent <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                        Berikut adalah beberapa proyek yang baru-baru ini saya kerjakan. Setiap proyek mewakili tantangan unik dan pengalaman belajar.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
                </div>

                {/* Featured Projects */}
                {featuredProjects.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                            Featured Projects
                        </h3>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    index={index}
                                    isFeatured={true}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
