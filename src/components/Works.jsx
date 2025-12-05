import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdArrowForward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const Works = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
      {
        id: 1,
        image1: "https://i.ibb.co/TMfhHzmW/image.png",
        image2: "https://i.ibb.co/mr8Fv55R/image.png",
        title: "Toy Topia",
        link: "https://toy-topia-store.web.app/",
        github: "https://github.com/armanislams/toy-topia",
      },
      {
        id: 2,
        image1: "https://i.ibb.co/JRHWW2Cw/image.png",
        image2: "https://i.ibb.co/xtvv6WZ3/image.png",
        title: "LearnHub",
        link: "https://learn-hub-f5d30.web.app/",
        github: "https://github.com/armanislams/learn-hub-client",
      },
      {
        id: 3,
        image1: "https://i.ibb.co/35YrnhMm/image.png",
        image2: "https://i.ibb.co/vvdBmG3p/image.png",
        title: "Hero Io",
        github: "https://github.com/armanislams/hero-io-app-market",
        link: "https://hero-app-market.pages.dev/",
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
      <section
        id="works"
        className="bg-background-light dark:bg-background-dark font-display text-gray-500 dark:text-gray-400 bg-pattern min-h-screen flex flex-col justify-center py-20"
      >
        <div className="flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative flex flex-col items-center">
              <div className="h-16 border-l border-dashed border-gray-400 dark:border-gray-600"></div>
              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full my-2"></div>
              <div className="text-primary font-bold text-4xl border-2 border-primary rounded-full w-16 h-16 flex items-center justify-center bg-background-light dark:bg-background-dark z-10">
                {String(currentIndex + 1).padStart(2, "0")}
              </div>
            </div>

            <h1 className="text-6xl font-bold text-primary mt-8">Works</h1>

            <div className="flex  items-center space-x-4 my-4">
              <div className="w-10 h-1 bg-primary rounded-full"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                I had the pleasure of working with these awesome projects
              </p>
              <div className="w-10 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center flex-col w-full max-w-6xl mx-auto mt-5">
            <div className="text-primary text-5xl">
              {projects[currentIndex].title}
            </div>
            <div className=" flex items-center justify-center space-x-4">
              <button
                onClick={prevProject}
                className="p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors z-10"
              >
                <MdChevronLeft className="text-2xl" />
              </button>

              <div className="flex-grow flex items-end justify-center gap-8 px-4 relative min-h-[350px]">
                <AnimatePresence mode="wait">
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
                      <div className="flex gap-5 items-center">
                        <a
                          className="inline-flex items-center text-primary font-semibold text-lg mb-4 group"
                          href={projects[currentIndex].link}
                        >
                          View Website
                          <MdArrowForward className="ml-1 transform transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                          className="inline-flex items-center text-primary font-semibold text-lg mb-4 group"
                          href={projects[currentIndex].github}
                        >
                          Github
                          <MdArrowForward className="ml-1 transform transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
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
        </div>
      </section>
    );
};

export default Works;
