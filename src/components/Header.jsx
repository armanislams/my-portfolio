import React from "react";
import { MdSearch } from "react-icons/md";
import {
  FaInstagram,
  FaDiscord,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: "Whatsapp",
      href: "https://wa.me/message/K4ZZDXHYDH3EK1",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/armanislam.shuvo/",
    },
    {
      icon: <FaDiscord />,
      label: "Discord",
      href: "https://discord.gg/vQcNXsTDz4",
    },
    {
      icon: <FaGithub />,
      label: "Github",
      href: "https://github.com/armanislams",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdarman-islam/",
    },
  ];

  return (
    <header className="flex flex-row justify-between items-center mb-10 md:mb-16 gap-4 px- md:px-8">
      {/* Brand */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <a
          href="#"
          className="flex items-center gap-1 hover:scale-105 transition-transform"
        >
          <span className="text-primary">&lt;&gt;</span> Arman
          <span className="text-primary">&lt;/&gt;</span>
        </a>
      </div>

      {/* Social Links */}
      <nav className="hidden md:flex items-center space-x-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
          >
            {link.icon}
            <span className="hidden lg:inline">{link.label}</span>
          </motion.a>
        ))}
      </nav>
      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-black px-4 md:px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all font-semibold text-sm md:text-base"
      >
        Hire Me
      </motion.a>
    </header>
  );
};

export default Header;
