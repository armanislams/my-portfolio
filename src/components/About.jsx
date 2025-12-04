import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="relative font-display bg-background-dark text-gray-300 antialiased py-20">
            <div className="relative w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
                <div className="absolute inset-0 topographic-bg z-0 hidden dark:block opacity-30"></div>
                <div className="absolute inset-0 bg-background-light dark:hidden z-0"></div>

                <main className="relative z-10 w-full max-w-6xl mx-auto">
                    {/* Timeline Indicator */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 hidden lg:flex flex-col items-center space-y-4">
                        <div className="w-px h-24 bg-gray-400 dark:bg-gray-600"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-primary bg-background-dark"></div>
                        <div className="w-px h-24 bg-gray-400 dark:bg-gray-600"></div>
                    </div>

                    {/* Number Indicator */}
                    <div className="absolute top-8 right-1/2 translate-x-1/2 lg:right-1/4 lg:-translate-x-1/2 flex flex-col items-center space-y-2">
                        <div className="text-3xl font-bold text-primary">0</div>
                        <div className="w-px h-8 bg-gray-300 dark:bg-gray-700 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-white dark:bg-gray-400"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-24 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col space-y-8"
                        >
                            <div className="inline-flex items-center justify-center lg:justify-start mt-5">
                                <div className="relative inline-block">
                                    <h1 className="relative z-10 text-3xl sm:text-4xl font-bold bg-gray-700 dark:bg-gray-800 text-gray-100 py-3 px-8 rounded-full">
                                        About Me
                                    </h1>
                                    <motion.div
                                        animate={{ rotate: [0, -2, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="absolute inset-0 border-2 border-primary rounded-full transform -rotate-2"
                                    ></motion.div>
                                </div>
                            </div>

                            <div className="bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 shadow-lg">
                                <p className="text-primary font-mono mb-2">&lt;p&gt;</p>
                                <div className="pl-4 sm:pl-6 space-y-4">
                                    <h2 className="text-xl font-bold text-primary mb-4">Hello!</h2>
                                    <p>
                                        My name is Arman and I specialize in web development that utilizes <span className="text-primary font-semibold">HTML</span>, <span className="text-primary font-semibold">CSS</span>,{' '}
                                        <span className="text-primary font-semibold">JS</span>,{' '}
                                        <span className="text-primary font-semibold">React</span>,{' '}
                                        <span className="text-primary font-semibold">Express js</span>,{' '}
                                        <span className="text-primary font-semibold">Node js</span>,{' '}
                                        <span className="text-primary font-semibold">Next js</span>,{' '}
                                        <span className="text-primary font-semibold">Firebase</span>,{' '}
                                        and <span className="text-primary font-semibold">Mongodb</span>.
                                    </p>
                                    <p>
                                        I am a highly motivated individual and student optimist dedicated to writing clean, concise, robust code that works. Striving to never stop learning and improving.
                                    </p>
                                    {/* <p>
                                        When I'm not coding, I am <span className="text-primary font-semibold">writing blogs</span>, reading, or picking up some new hands-on IoT project like <span className="text-primary font-semibold">photograph</span>.
                                    </p> */}
                                    <p>
                                        I like to have my perspective and beliefs on systems challenged so that I see the world through new eyes.
                                    </p>
                                </div>
                                <p className="text-primary mt-4 font-mono">&lt;/p&gt;</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex justify-center items-center"
                        >
                            <div className="hidden md:block p-2 bg-white/20 dark:bg-white/10 rounded-lg backdrop-blur-sm shadow-2xl">
                                <img
                                    alt="A developer coding on a laptop"
                                    className="rounded-md w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkHaR3BJ6rSrW0wO_9tnkywq8-acTYXKVcWqSnTSqZzhF73GafAkrQnIh1mpXfIQi-mOwtDsKayuuD0GEfSyXM1lg6ulWVvb4ikB2AOUwvBeZ5BOHB0GAkYDnFSvb92yLdRhN-McFFOUxu3kpcMUYceqRK74BNExskewaEukqrw1POu8cgGLEvP0o_M8CHRkeKJ2jUpRrtsaWSUApNoBNjZmh0SmwphFV2kWyMdz80xy4Q4kXPqZPZtoaOEr662j3pU2ON107QdaE"
                                />
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default About;
