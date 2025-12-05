import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const BuyMeCoffee = () => {
    return (
        <section id='sponsor' className="bg-background-light dark:bg-background-dark font-display py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/30 overflow-hidden"
                >
                    {/* Decorative coffee cup background */}
                    <div className="absolute top-0 right-0 opacity-5 dark:opacity-10">
                        <FaCoffee className="text-primary" style={{ fontSize: '200px' }} />
                    </div>

                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg">
                                <FaCoffee className="text-primary text-5xl" />
                            </div>
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Buy Me a Coffee
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                            If you like my work and want to support me, you can buy me a coffee! ☕
                            Your support helps me create more awesome projects.
                        </p>

                        <motion.a
                            href="https://ko-fi.com/armanislam"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-primary text-background-dark font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                        >
                            <FaCoffee className="text-2xl" />
                            <span>Buy Me a Coffee</span>
                        </motion.a>

                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                            Every coffee counts! 💚
                        </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default BuyMeCoffee;
