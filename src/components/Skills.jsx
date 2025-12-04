import React from 'react';
import { MdCode, MdDesktopWindows, MdPhoneIphone } from 'react-icons/md';
import { motion } from 'framer-motion';
import bgImg from '../assets/bgImg.jpg'

const Skills = () => {
    const skills = [
      {
        name: "HTML",
        img: "https://images.icon-icons.com/171/PNG/512/html5_23329.png",
      },
      {
        name: "CSS",
        img: "https://images.icon-icons.com/2415/PNG/512/css_plain_logo_icon_146573.png",
      },
      {
        name: "JS",
        img: "https://images.icon-icons.com/2107/PNG/512/file_type_js_official_icon_130509.png",
      },
      {
        name: "REACT JS",
        img: "https://images.icon-icons.com/2415/PNG/512/react_original_logo_icon_146374.png",
      },
      {
        name: "NODE JS",
        color: "#fafafa",
        img: "https://images.icon-icons.com/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png",
      },
      {
        name: "EXPRESS JS",
        color: "#fafafa",
        img: "https://images.icon-icons.com/2699/PNG/512/expressjs_logo_icon_169186.png",
      },
      {
        name: "NEXT JS",
        color: "#fafafa",
        img: "https://images.icon-icons.com/2148/PNG/512/nextjs_icon_132160.png",
      },
      {
        name: "MONGODB",
        img: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png",
      },
    ];

    return (
        <section id='skills' className="bg-background-light dark:bg-background-dark font-display text-center antialiased relative">
            <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div
                    className="absolute inset-0 z-0 opacity-5 dark:opacity-10"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="relative z-10 w-full max-w-4xl mx-auto">
                    <div className="mb-10 relative h-16 bracket-container"></div>

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <MdCode className="text-primary mx-auto" style={{ fontSize: '80px' }} />
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-3">Skills</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-12 text-sm sm:text-base">
                        I am striving to never stop learning and improving
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary/20 dark:bg-primary/10 border border-primary/50 rounded-lg p-6 flex-1 max-w-sm mx-auto sm:max-w-none backdrop-blur-sm"
                        >
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <MdDesktopWindows className="text-primary text-3xl" />
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Web Development</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">HTML, CSS, JS, REACT</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary/20 dark:bg-primary/10 border border-primary/50 rounded-lg p-6 flex-1 max-w-sm mx-auto sm:max-w-none backdrop-blur-sm"
                        >
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <MdPhoneIphone className="text-primary text-3xl" />
                                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">App Development</h2>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">IOS, Android</p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <img alt={`${skill.name} logo`} className="w-16 h-16 object-contain" src={skill.img} />
                                </div>
                                <p className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
