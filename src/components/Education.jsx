import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Social Science",
            institution: "National University",
            location: "Dhaka, Bangladesh",
            duration: "2020 - 2022",
            gpa: "not completed",
            
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            institution: "Gazipur Cantonment College",
            location: "Gazipur, Bangladesh",
            duration: "2017 - 2019",
            gpa: "4.0/5.0",
            
        }
    ];

    return (
        <section id="education" className="bg-background-light dark:bg-background-dark font-display py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="bg-primary/10 p-4 rounded-full"
                        >
                            <FaGraduationCap className="text-primary text-5xl" />
                        </motion.div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Educational Qualification
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        My academic journey
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 to-transparent"></div>

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background-light dark:border-background-dark z-10"></div>

                            {/* Education Card */}
                            <div className={`bg-white dark:bg-gray-800/50 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                }`}>
                                {/* Degree */}
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                    {edu.degree}
                                </h3>

                                {/* Institution */}
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <FaUniversity className="text-lg" />
                                    <p className="font-semibold text-lg">{edu.institution}</p>
                                </div>

                                {/* Location & Duration */}
                                <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary" />
                                        <span>{edu.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-primary" />
                                        <span>{edu.duration}</span>
                                    </div>
                                </div>

                                {/* GPA */}
                                <div className="mb-4">
                                    <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
                                        GPA: {edu.gpa}
                                    </span>
                                </div>

                                {/* Achievements */}
                                {edu.achievements && edu.achievements.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                            Achievements:
                                        </h4>
                                        <ul className="space-y-2">
                                            {edu.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                                    <span className="text-primary mt-1">▸</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
