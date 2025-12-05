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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-bold text-gray-200 relative select-none flex gap-2"
          >
            {[
              "De",
              <span key="s1">\/</span>,
              "elop",
              <span key="s2">€</span>,
              "r",
            ].map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    delay: 0.15 * i,
                    duration: 0.7,
                    ease: "easeOut",
                  },
                }}
                className="inline-block"
                whileHover={{
                  y: -6,
                  scale: 1.15,
                  rotate: 3,
                  color: "#12F7D6",
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                {part}
              </motion.span>
            ))}

            {/* Glow layer */}
            <motion.span
              className="absolute top-0 left-0 text-primary opacity-30 blur-md pointer-events-none"
              style={{ textShadow: "0 0 25px #12F7D6" }}
              animate={{
                opacity: [0.15, 0.25, 0.15],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              De<span>\/</span>elop<span>€</span>r
            </motion.span>
          </motion.h1>
        </div>

        {/* <motion.div
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
                <a
                  href="https://drive.google.com/file/d/1gY7cpn7xkCuslEJyUcMfo1uWFB1lzo9x/view?usp=sharing"
                  target="_blank"
                >
                  <span>My Resume</span>
                </a>
                <MdDownload />
              </motion.button>
            </div>
          </div>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -6 }}
          className="col-span-1 lg:col-span-4 self-start"
        >
          <motion.div
            className="relative bg-white/10 dark:bg-gray-800/40 p-6 rounded-3xl border border-white/20
      backdrop-blur-xl shadow-xl shadow-primary/10"
            animate={{
              boxShadow: [
                "0 0 15px rgba(18,247,214,0.1)",
                "0 0 25px rgba(18,247,214,0.25)",
                "0 0 15px rgba(18,247,214,0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              borderImage:
                "linear-gradient(to bottom right, #23f4d3, transparent) 1",
            }}
          >
            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent opacity-20 blur-xl pointer-events-none"></div>

            {/* Profile Info */}
            <div className="relative z-10 text-center">
              <motion.img
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                alt="Profile picture of Arman"
                className="w-28 h-28 rounded-full mx-auto border-4 border-primary shadow-xl object-cover"
                src={profilePic}
              />

              <h2 className="text-3xl font-bold mt-4 text-gray-900 dark:text-gray-100 tracking-wide">
                Arman
              </h2>
              <p className="text-primary/90 text-sm font-medium tracking-wide">
                Full-Stack Developer
              </p>
            </div>

            {/* Details */}
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

            {/* Tech Stack */}
            <div className="mt-6 flex justify-center flex-wrap gap-2">
              {["HTML", "CSS", "JS", "REACT"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                     text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm 
                     hover:bg-primary hover:text-black dark:hover:text-black 
                     transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(18,247,214,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1gY7cpn7xkCuslEJyUcMfo1uWFB1lzo9x/view?usp=sharing"
              target="_blank"
              className="mt-8 btn w-full bg-gradient-to-r from-primary to-teal-300 text-black 
          font-semibold py-3 px-6 rounded-xl flex items-center justify-center 
          space-x-2 shadow-md transition-all"
            >
              <span>My Resume</span>
              <MdDownload />
            </motion.a>
          </motion.div>
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
              I help business/people to grow by crafting amazing web
              experiences. If you're looking for a developer that likes to get
              stuff done.
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
