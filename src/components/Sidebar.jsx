import React, { useState } from 'react';
import { MdQrCode2, MdPersonOutline, MdCode, MdChatBubbleOutline, MdEditNote, MdMailOutline, MdHome } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaSchool } from 'react-icons/fa';

const Sidebar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItems = [
        { icon: MdHome, active: true, href: '#home', label: 'Home' },
        { icon: MdPersonOutline, href: '#about', label: 'About Me' },
        { icon: MdCode, href: '#skills', label: 'My Skills' },
        { icon: MdChatBubbleOutline, href: '#works', label: 'My Works' },
        { icon: MdMailOutline, href: '#contact', label: 'Contact Me' },
        { icon: FaCoffee, href: '#sponsor', label: 'Support Me' },
        { icon: FaSchool, href: '#education', label: 'Education' },
    ];

    return (
        <aside className="flex flex-col items-center justify-start py-8 px-4 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 bg-background-light dark:bg-background-dark z-50">
            <nav className="flex flex-col items-center">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <motion.a
                            href={item.href}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-2 rounded-full transition-colors ${item.active
                                ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            <item.icon className="text-xl" />
                        </motion.a>

                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
                                >
                                    <div className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg border border-gray-700">
                                        <span className="text-sm font-medium">{item.label}</span>
                                        {/* Arrow pointing to the icon */}
                                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900 dark:border-r-gray-800"></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
