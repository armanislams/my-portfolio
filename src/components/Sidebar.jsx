import React from 'react';
import { MdQrCode2, MdPersonOutline, MdCode, MdChatBubbleOutline, MdEditNote, MdMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const menuItems = [
        { icon: MdQrCode2, active: true, href: '#home' },
        { icon: MdPersonOutline, href: '#about' },
        { icon: MdCode, href: '#skills' },
        { icon: MdChatBubbleOutline, href: '#works' },
        { icon: MdEditNote, href: '#' },
        { icon: MdMailOutline, href: '#contact' },
    ];

    return (
        <aside className="flex flex-col items-center justify-start py-8 px-4 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 bg-background-light dark:bg-background-dark z-50">
            <nav className="flex flex-col items-center space-y-6">
                {menuItems.map((item, index) => (
                    <motion.a
                        key={index}
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
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
