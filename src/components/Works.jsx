import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdArrowForward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Works = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            id: 1,
            image1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqABVCpozT0b8RcDTTTiI5WWedmeXmNZFPe_aRRvJlQLq6u4_Xbym0llJEe7ac3DqwyPkpD9mf2CqKb0WautO-fKd-FjF2BIDY7WmXgPMV3LIYKvvg8DheSydhvY5TOtG__RJ7w8fzOSdJ7CZLPTsWmY7gwFQPUYQ-KP7aLyHUMUaNHtPfEmoIptZt5EJpUNZW7XJjFF4powfsRFiNHx1yP3cN931oINHPPTBu_1yaHkOlVpxMgUHS5xsOMka-JIN1zwjaC8D5L_s",
            image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYNC5p2otrLIUNMSa0XM9-u3lvlfU73QoHxpAspEhlHJI7-qEDJJ50ZClEv8WjHlbfSRjHStgBtPLkNAcenI2Gxwak3Nom97w4vC0lEE2drZSVOjmh6nDlEXULOFNnxzphLtfN2FW8BF2zJPK6yvgmeTo2DL23HTjlvq642_YQpF1XbvnSSa4eiH8bQhc0ptopB_IcTZyPTTXXV1yW_VpbNTKlLwcifauc2lIZk7YZQ0-JgrdEyTe4VVd6nAMMW8zpPwcq9cWqphA",
            title: "Project 1"
        },
        // Add more projects here if available
    ];

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id='works' className="bg-background-light dark:bg-background-dark font-display text-gray-500 dark:text-gray-400 bg-pattern min-h-screen flex flex-col justify-center py-20">
            <div className="flex flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative flex flex-col items-center">
                        <div className="h-16 border-l border-dashed border-gray-400 dark:border-gray-600"></div>
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full my-2"></div>
                        <div className="text-primary font-bold text-4xl border-2 border-primary rounded-full w-16 h-16 flex items-center justify-center bg-background-light dark:bg-background-dark z-10">
                            {String(currentIndex + 1).padStart(2, '0')}
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold text-primary mt-8">Works</h1>

                    <div className="flex items-center space-x-4 my-4">
                        <div className="w-10 h-1 bg-primary rounded-full"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">I had the pleasure of working with these awesome projects</p>
                        <div className="w-10 h-1 bg-primary rounded-full"></div>
                    </div>
                </div>

                <div className="w-full max-w-6xl mx-auto mt-16 flex items-center justify-center space-x-4">
                    <button
                        onClick={prevProject}
                        className="p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors z-10"
                    >
                        <MdChevronLeft className="text-2xl" />
                    </button>

                    <div className="flex-grow flex items-end justify-center gap-8 px-4 relative min-h-[400px]">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col lg:flex-row items-end justify-center gap-8 w-full"
                            >
                                <img
                                    alt="Project Screenshot 1"
                                    className="w-auto h-72 object-contain hidden lg:block rounded-lg shadow-2xl"
                                    src={projects[currentIndex].image1}
                                />
                                <div className="flex flex-col items-center">
                                    <a className="inline-flex items-center text-primary font-semibold text-lg mb-4 group" href="#">
                                        View Website
                                        <MdArrowForward className="ml-1 transform transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <img
                                        alt="Project Screenshot 2"
                                        className="w-auto h-64 object-contain rounded-lg shadow-2xl"
                                        src={projects[currentIndex].image2}
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextProject}
                        className="p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors z-10"
                    >
                        <MdChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Works;
