import React from 'react';
import { MdSend } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-background-light dark:bg-background-dark font-display text-gray-500 dark:text-gray-400 min-h-screen flex flex-col">
            <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
                <div className="w-full max-w-4xl text-center">
                    <div className="flex flex-col items-center mb-8">
                        <FaPaperPlane className="w-8 h-8 text-primary transform -rotate-45" />
                        <div className="border-l-2 border-dotted border-gray-600 dark:border-gray-500 h-12 w-0 my-2"></div>
                        <div className="w-2 h-2 bg-gray-600 dark:bg-gray-500 rounded-full"></div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">Contact</h1>

                    <div className="relative inline-block mt-4 mb-8">
                        <p className="text-lg text-gray-600 dark:text-gray-300">I'm currently available for freelance work</p>
                        <div className="absolute bottom-[-8px] left-1/4 w-1/2 h-0.5 bg-primary"></div>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 rounded-full text-lg tracking-wider hover:bg-primary hover:text-background-dark transition-all duration-300 mb-20"
                        href="#contact-form"
                    >
                        Send Me A Message
                    </motion.a>

                    <form className="space-y-12 max-w-2xl mx-auto text-left" id="contact-form">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative group">
                                <label className="block text-sm font-medium text-primary mb-2" htmlFor="name">Your name *</label>
                                <input
                                    className="w-full bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 focus:ring-0 focus:border-primary text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 transition-colors outline-none py-2"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    type="text"
                                />
                            </div>
                            <div className="relative group">
                                <label className="block text-sm font-medium text-primary mb-2" htmlFor="email">Your email *</label>
                                <input
                                    className="w-full bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 focus:ring-0 focus:border-primary text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 transition-colors outline-none py-2"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                            <label className="block text-sm font-medium text-primary mb-2" htmlFor="message">Your message *</label>
                            <input
                                className="w-full bg-transparent border-0 border-b-2 border-gray-400 dark:border-gray-600 focus:ring-0 focus:border-primary text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-500 transition-colors outline-none py-2"
                                id="message"
                                name="message"
                                placeholder="Enter your needs"
                                type="text"
                            />
                        </div>

                        <div className="text-center pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-primary text-background-dark font-bold py-3 px-8 rounded-full text-lg tracking-wider hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-primary/20"
                                type="submit"
                            >
                                Send Message
                                <MdSend className="text-xl" />
                            </motion.button>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Contact;
