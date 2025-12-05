import React from 'react';
import { FaPaperPlane, FaGithub, FaLinkedinIn, FaDiscord, FaEnvelope, FaWhatsapp, FaWeixin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const socialLinks = [
        {
            name: 'Email',
            icon: FaEnvelope,
            href: 'mailto:armanislam988@gmail.com',
            color: '#EA4335',
            label: 'armanislam988@gmail.com'
        },
        {
            name: 'GitHub',
            icon: FaGithub,
            href: 'https://github.com/armanislams',
            color: '#ffffff',
            label: '@armanislams'
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedinIn,
            href: 'https://www.linkedin.com/in/mdarman-islam/',
            color: '#0A66C2',
            label: 'Md Arman Islam'
        },
        {
            name: 'Discord',
            icon: FaDiscord,
            href: 'https://discord.gg/vQcNXsTDz4',
            color: '#5865F2',
            label: 'Join Server'
        },
        {
            name: 'WhatsApp',
            icon: FaWhatsapp,
            href: 'https://wa.me/message/K4ZZDXHYDH3EK1',
            color: '#25D366',
            label: 'Chat on WhatsApp'
        },
        {
            name: 'WeChat',
            icon: FaWeixin,
            href: '#',
            color: '#09B83E',
            label: 'Add on WeChat'
        }
    ];

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
                        <p className="text-lg text-gray-600 dark:text-gray-300">Feel Free To Contact Me</p>
                        <div className="absolute bottom-[-8px] left-1/4 w-1/2 h-0.5 bg-primary"></div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative bg-white dark:bg-gray-800/50 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/20"
                            >
                                <div className="flex items-center space-x-4">
                                    <div
                                        className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-primary/10 transition-colors"
                                        style={{ color: link.color }}
                                    >
                                        <link.icon className="text-3xl group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {link.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors">
                                            {link.label}
                                        </p>
                                    </div>
                                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Contact;
