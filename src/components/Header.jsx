import React from 'react';
import { MdSearch } from 'react-icons/md';
import { FaInstagram, FaDiscord, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
    return (
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 gap-4">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          <button>
            <a href="/">
              <span className="text-primary">&lt;/&gt;</span> Arman
            </a>
          </button>
        </div>

        <nav className="hidden md:flex flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4 text-sm">
            <motion.a
              whileHover={{ y: -2 }}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
              href="#"
            >
              <FaWhatsapp />
              <span className="hidden lg:inline">
                <button>
                  <a
                    href="https://wa.me/message/K4ZZDXHYDH3EK1"
                    target="_blank"
                  >
                    Whatsapp
                  </a>
                </button>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
              href="#"
            >
              <FaInstagram />
              <span className="hidden lg:inline">
                <button>
                  <a
                    href="https://www.instagram.com/armanislam.shuvo/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </button>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
              href="#"
            >
              <FaDiscord />
              <span className="hidden lg:inline">
                {" "}
                <button>
                  <a href="https://discord.gg/vQcNXsTDz4" target="_blank">
                    Discord
                  </a>
                </button>
              </span>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
              href="#"
            >
              <FaGithub />
              <button>
                <a href="https://github.com/armanislams" target="_blank">
                  Github
                </a>
              </button>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              className="flex items-center space-x-1 hover:text-primary transition-colors text-gray-600 dark:text-gray-300"
              href="#"
            >
              <FaLinkedinIn />
              <button>
                <a
                  href="https://www.linkedin.com/in/mdarman-islam/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </button>
            </motion.a>
          </div>
        </nav>
      </header>
    );
};

export default Header;
