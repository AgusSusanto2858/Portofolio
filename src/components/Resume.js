import React from 'react';
import cvAgus from '../Assets/Document/CV.pdf';
import { 
    AiOutlineDownload, 
    AiOutlinePhone, 
    AiOutlineMail, 
    AiOutlineGlobal, 
    AiOutlineGithub, 
    AiOutlineLinkedin, 
    AiOutlineTwitter, 
    AiOutlineEnvironment 
} from 'react-icons/ai';

const CVPage = () => {
    // Function to handle CV download
    const handleDownloadCV = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = cvAgus;
        link.download = 'CV-Agus-Susanto.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const personalInfo = {
        name: "Agus Susanto",
        location: "Bekasi, Indonesia",
        phone: "(+62) 813-8514-3983",
        email: "agussusanto2858@gmail.com",
        website: "ahmadfauzi.vercel.app",
        github: "AgusSusanto2858",
        linkedin: "Agus Susanto",
        twitter: "@agussusanto2858"
    };

    const workExperience = [
        {
            title: "Divisi Operasional",
            company: " Assistance Of Integrated Laboratory (iLab) ",
            location: "Depok",
            period: "November 2019 - November 2020",
            type: "Magang",
            achievements: [
                "Mengawasi serta membantu praktikan",
                "Berkomunikasi dengan Asisten Lab lainnya terkait masalah apa saja yang terjadi selama praktikum ",
                "Menjawab pertanyaan praktikan terkait masalah yang menyangkut pada kegiatan praktikum sebagai Help Desk",
                "Melakukan operasi Input, Edit serta Hapus Data, terkait akun serta modul praktikan",
                "Mencatat serta melaporkan unit komputer yang bermasalah atau mengalami kerusakan"
            ]
        },
        {
            title: "Praktik Kerja Lapangan",
            company: "Robotics Education Center",
            location: "Bogor",
            period: "Februari 2016 - Maret 2016",
            type: "Magang",
            achievements: [
                "Melakukan operasi Input, Edit serta Hapus Data,  perkembangan murid kursus pada Blog Robotics Kota Wisata ",
                "Mencetak dan menjilid modul buku yang diperlukan",
                "Membantu mengawasi murid kelas Level Mosaic (4 – 6 Tahun)"
            ]
        },
    ];

    const education = [
        {
            degree: "Sarjana Sistem Informasi",
            school: "Universitas Gunadarma",
            location: "Depok, Indonesia",
            period: "September 2017 - Juli 2023",
            gpa: "3.54/4.00",
            relevant: ["Struktur Data", "Algoritma", "Sistem Operasi", "Manajemen Database", "Rekayasa Perangkat Lunak", "Machine Learning "]
        },
        {
            degree: "Teknik Komputer Jaringan",
            school: "SMK Yadika 11",
            Location: "Bekasi, Indonesia",
            period: "Juli 2014 - Mei 2017",
            relevant: ["Perakitan Jaringan", "Perakitan Komputer", "Instalasi Software", "Pencadangan Data"]
        }
    ];

    const skills = {
        "Bahasa Pemrograman": ["JavaScript", "TypeScript", "Python", "Java", "C++"],
        "Framework & Library": ["React.js", "Next.js", "Node.js", "Express.js", "Django", "FastAPI"],
        "Database": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
        "Tools & Teknologi": ["Git", "Docker", "AWS", "Linux", "Figma"]
    };

    const projects = [
        {
            name: "Website D-Klasifikasi",
            description: "Website untuk mengklasifikasikan dokumen Kota Depok menggunakan Metode TF-IDF dan Cosine Similarity",
            tech: ["Python", "Streamlit", "TF-IDF", "Cosine Similarity"]
        },
        {
            name: "Pengenalan Hewan Ternak",
            description: "Aplikasi sederhana untuk mengenalkan hewan ternak keanak-anak dalam bahasa indonesia, inggris dan mengenalkan suara hewan tersebut",
            tech: ["AndroidSDX", "Java", "XML"]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 relative overflow-hidden">
            {/* Background Stars Effect */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 py-8 px-4">
                {/* Download Button */}
                <div className="text-center mb-8">
                    <button 
                        onClick={handleDownloadCV}
                        className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
                    >
                        <AiOutlineDownload className="w-5 h-5 group-hover:animate-bounce" />
                        <span>Unduh CV</span>
                    </button>
                </div>

                {/* CV Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-gray-50 px-8 py-8 border-b">
                            <div className="text-center">
                                <h1 className="text-4xl font-light text-gray-800 mb-2">
                                    <span className="font-normal">{personalInfo.name.split(' ')[0]}</span>{' '}
                                    <span className="font-bold">{personalInfo.name.split(' ')[1]}</span>
                                </h1>
                                <p className="text-gray-600 text-lg mb-4">{personalInfo.location}</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <AiOutlinePhone className="w-4 h-4 mr-1" />
                                        {personalInfo.phone}
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineMail className="w-4 h-4 mr-1" />
                                        {personalInfo.email}
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineGlobal className="w-4 h-4 mr-1" />
                                        {personalInfo.website}
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineGithub className="w-4 h-4 mr-1" />
                                        {personalInfo.github}
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineLinkedin className="w-4 h-4 mr-1" />
                                        {personalInfo.linkedin}
                                    </div>
                                    <div className="flex items-center">
                                        <AiOutlineTwitter className="w-4 h-4 mr-1" />
                                        {personalInfo.twitter}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-8 py-8 space-y-8">
                            {/* Work Experience */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-pink-500 mr-2">Pengalaman</span>
                                    <span>Kerja</span>
                                    <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                                </h2>
                                
                                <div className="space-y-6">
                                    {workExperience.map((job, index) => (
                                        <div key={index} className="relative">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                                                    <p className="text-gray-600 font-medium">{job.company}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-pink-500 font-medium text-sm">{job.location}</p>
                                                    <p className="text-gray-500 text-sm">{job.period}</p>
                                                </div>
                                            </div>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                {job.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-pink-500 mr-2">Pendidikan</span>
                                    <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                                </h2>
                                
                                {education.map((edu, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                                                <p className="text-gray-600 font-medium">{edu.school}</p>
                                                <p className="text-gray-500 text-sm">IPK: {edu.gpa}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-pink-500 font-medium text-sm">{edu.location}</p>
                                                <p className="text-gray-500 text-sm">{edu.period}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-600 font-medium text-sm mb-2">Mata Kuliah Relevan:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.relevant.map((course, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                        {course}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </section>

                            {/* Skills */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-pink-500 mr-2">Keahlian</span>
                                    <span>Teknis</span>
                                    <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                                </h2>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(skills).map(([category, skillList], index) => (
                                        <div key={index}>
                                            <h3 className="font-semibold text-gray-800 mb-2">{category}:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skillList.map((skill, idx) => (
                                                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Projects */}
                            <section>
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-pink-500 mr-2">Proyek</span>
                                    <span>Unggulan</span>
                                    <div className="flex-1 h-px bg-gray-300 ml-4"></div>
                                </h2>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    {projects.map((project, index) => (
                                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                                            <h3 className="font-semibold text-gray-800 mb-2">{project.name}</h3>
                                            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx} className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVPage;