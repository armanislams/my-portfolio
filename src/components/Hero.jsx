import React from 'react';
import { MdMailOutline, MdLocationOn, MdWorkOutline, MdLink, MdDownload, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';
import profilePic from '../assets/arman.png'
const Hero = () => {
    return (
      <section
        id="home"
        className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div className="col-span-1 lg:col-span-12">
          <motion.h1
            initial={{ opacity: 10, y: -20 }}
            animate={{ opacity: 10, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-gray-200  relative select-none"
          >
            De<span>\/</span>elop<span>€</span>r
            <span
              className="absolute top-0 left-0 text-primary opacity-20 blur-sm"
              style={{ textShadow: "0 0 15px currentColor" }}
            >
              De<span>\/</span>elop<span>€</span>r
            </span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 lg:col-span-4 self-start"
        >
          <div
            className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl border-2 border-transparent relative backdrop-blur-sm"
            style={{
              borderImage: "linear-gradient(to bottom, #23f4d3, transparent) 1",
            }}
          >
            <div className="text-center">
              <img
                alt="Profile picture of Arman"
                className="w-24 h-24 rounded-full mx-auto border-4 border-primary shadow-lg shadow-primary/20 object-cover"
                src={profilePic}
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
                Arman
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                full-stack developer
              </p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <MdMailOutline className="text-primary text-lg mr-3" />
                <span className="truncate">armanislam988@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MdLocationOn className="text-primary text-lg mr-3" />
                <span>Malaysia</span>
              </div>
              <div className="flex items-center">
                <MdWorkOutline className="text-primary text-lg mr-3" />
                <span>Full-Time / Freelancer / Part-Time</span>
              </div>
              <div className="flex items-center">
                <MdLink className="text-primary text-lg mr-3" />
                <span>armanislam.me</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-2 flex-wrap gap-y-2">
              {["HTML", "CSS", "JS", "REACT"].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                  <button>
                    <a href="https://drive.google.com/file/d/1gY7cpn7xkCuslEJyUcMfo1uWFB1lzo9x/view?usp=sharing" target='_blank'>
                <span>
                      My Resume
                </span>
                    </a>
                  </button>
                <MdDownload />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-1 lg:col-span-8 flex flex-col justify-between h-full lg:pl-12"
        >
          <div>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-mono">
              &lt;h1&gt;
            </p>
            <h2 className="text-5xl md:text-6xl font-bold my-4 text-gray-900 dark:text-white leading-tight">
              Hey
              <br />
              I'm <span className="text-primary">Arman</span>,<br />
              Full-Stack Developer
            </h2>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-mono">
              &lt;/h1&gt;
            </p>

            <p className="text-gray-400 dark:text-gray-500 text-sm mt-8 font-mono">
              &lt;p&gt;
            </p>
            <p className="my-2 text-gray-600 dark:text-gray-400 max-w-md text-lg">
              I help business/people to grow by crafting amazing web experiences. If
              you're looking for a developer that likes to get stuff done.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm font-mono">
              &lt;/p&gt;
            </p>

            <motion.a
              whileHover={{ x: 10 }}
              className="inline-flex items-center text-primary font-semibold mt-8 text-lg hover:opacity-80 transition-opacity"
              href="#contact"
            >
              Let's Talk
              <MdArrowForward className="ml-2" />
            </motion.a>
          </div>

          <div className="self-center lg:self-end mt-12 lg:mt-0">
            <div className="bg-white dark:bg-gray-800/50 p-6 rounded-3xl space-y-6 backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-xl">
              {[
                { num: 6, label1: "Programming", label2: "Language" },
                { num: 6, label1: "Development", label2: "Tools" },
                { num: 1, label1: "Years of", label2: "Experience" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-3xl font-bold text-primary mr-4">
                    {stat.num}
                  </span>
                  <div className="text-sm">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {stat.label1}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {stat.label2}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    );
};

export default Hero;
