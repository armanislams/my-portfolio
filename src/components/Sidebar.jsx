import React, { useState } from "react";
import {
  MdPersonOutline,
  MdCode,
  MdChatBubbleOutline,
  MdMailOutline,
  MdHome,
} from "react-icons/md";
import { FaCoffee, FaSchool } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: MdHome, label: "Home", href: "#home" },
    { icon: MdPersonOutline, label: "About Me", href: "#about" },
    { icon: FaSchool, label: "Education", href: "#education" },
    { icon: MdCode, label: "My Skills", href: "#skills" },
    { icon: MdChatBubbleOutline, label: "My Works", href: "#works" },
    { icon: MdMailOutline, label: "Contact Me", href: "#contact" },
    { icon: FaCoffee, label: "Support Me", href: "#sponsor" },
  ];

  return (
    <aside className="flex flex-col items-center py-8 px-4 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-lg z-50 rounded-tr-xl rounded-br-xl">
      <nav className="flex flex-col items-center space-y-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.a
              href={item.href}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-xl flex items-center justify-center transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
            >
              <item.icon className="text-2xl" />
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-3 w-1 h-10 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full shadow-md"
                />
              )}
            </motion.a>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2"
                >
                  <div className="bg-gray-900 dark:bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg relative whitespace-nowrap">
                    <span className="text-sm font-semibold">{item.label}</span>
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

