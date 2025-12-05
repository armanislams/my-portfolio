import React from 'react';
import { MdCode, MdDesktopWindows, MdPhoneIphone } from 'react-icons/md';
import { motion } from 'framer-motion';
import bgImg from '../assets/bgImg.jpg'
import { FaServer, FaTools } from 'react-icons/fa';

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

    const tools = [
      {
        name: "Git",
        img: "https://images.icon-icons.com/2415/PNG/512/git_original_wordmark_logo_icon_146510.png",
      },
      {
        name: "GitHub",
        img: "https://images.icon-icons.com/2415/PNG/512/github_original_wordmark_logo_icon_146506.png",
        color: "#fafafa",
      },
      {
        name: "VS Code",
        img: "https://images.icon-icons.com/2107/PNG/512/file_type_vscode_icon_130084.png",
      },
      {
        name: "Figma",
        img: "https://images.icon-icons.com/2699/PNG/512/figma_logo_icon_170157.png",
      },
      {
        name: "Postman",
        img: "https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png",
      },
      {
        name: "Tailwind",
        img: "https://images.icon-icons.com/2699/PNG/512/tailwindcss_logo_icon_167923.png",
      },
      {
        name: "Firebase",
        img: "https://images.icon-icons.com/2699/PNG/512/firebase_logo_icon_171157.png",
      },
      {
        name: "Vercel",
        img: "https://images.icon-icons.com/3375/PNG/512/vercel_brand_icon_211876.png",
        color: "#fafafa",
      },
    ];

    return (
      <section
        id="skills"
        className="bg-background-light dark:bg-background-dark font-display text-center antialiased relative"
      >
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div
            className="absolute inset-0 z-0 opacity-5 dark:opacity-10"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              <MdCode
                className="text-primary mx-auto"
                style={{ fontSize: "80px" }}
              />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold text-primary mt-4 mb-3">
              Skills
            </h1>
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
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Frontend Development
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  HTML, CSS, JS, REACT JS, NEXT JS
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-primary/20 dark:bg-primary/10 border border-primary/50 rounded-lg p-6 flex-1 max-w-sm mx-auto sm:max-w-none backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-4 mb-2">
                  <FaServer className="text-primary text-3xl" />
                  <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Backend Development
                  </h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  EXPRESS JS, NODE JS, MONGODB, FIREBASE, REST API, JWT
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {/* {skills.map((skill, index) => (
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
                        ))} */}
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.6 }}
                  whileHover={{
                    scale: 1.07,
                    y: -8,
                    rotate: 1,
                  }}
                  className="flex flex-col items-center gap-4 cursor-pointer"
                >
                  {/* Skill Circle */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0], // floating loop
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: index * 0.3,
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: 2,
                      boxShadow: "0 0 25px rgba(18,247,214,0.5)",
                    }}
                    className="w-28 h-28 rounded-full flex items-center justify-center 
      shadow-xl relative overflow-hidden"
                    style={{
                      background: `radial-gradient(circle at top, ${skill.color}, #111)`,
                    }}
                  >
                    {/* Glow effect behind icon */}
                    <div className="absolute inset-0 bg-white/10 blur-xl"></div>

                    {/* Skill Icon */}
                    <img
                      alt={`${skill.name} logo`}
                      className="w-16 h-16 object-contain relative z-10 drop-shadow-lg"
                      src={skill.img}
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.p
                    className="font-semibold text-slate-700 dark:text-slate-300 tracking-wide"
                    whileHover={{ color: "#12F7D6", scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Tools Section
            <div className="mt-20">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-8"
              >
                <FaTools className="text-primary mx-auto text-5xl" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
                Tools & Technologies
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-12 text-sm sm:text-base">
                Tools I use to bring ideas to life
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      style={{ backgroundColor: tool.color || "#f3f4f6" }}
                    >
                      <img
                        alt={`${tool.name} logo`}
                        className="w-16 h-16 object-contain"
                        src={tool.img}
                      />
                    </div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">
                      {tool.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div> */}
            {/* Tools Section */}
            <div className="mt-20">
              <motion.div
                initial={{ rotate: -90, opacity: 0, scale: 0 }}
                whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <FaTools className="text-primary mx-auto text-5xl" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-3"
              >
                Tools & Technologies
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-400 mb-12 text-sm sm:text-base"
              >
                Tools I use to bring ideas to life
              </motion.p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                    }}
                    whileHover={{
                      scale: 1.12,
                      rotate: 2,
                      transition: { type: "spring", stiffness: 200 },
                    }}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className="
            w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl
            transition-transform relative
            group-hover:shadow-primary/40 group-hover:shadow-2xl
          "
                      style={{ backgroundColor: tool.color || "#f3f4f6" }}
                    >
                      <motion.img
                        alt={`${tool.name} logo`}
                        src={tool.img}
                        className="w-16 h-16 object-contain"
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tool.name}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Skills;
