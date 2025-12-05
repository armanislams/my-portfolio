import React from 'react';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="w-full border-t border-gray-300 dark:border-gray-700 mt-auto bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-600 dark:text-gray-400">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()}, All rights reserved.
          </p>

          <p className="hidden md:block ml-4">
            Design By{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              Arman
            </span>
          </p>
        </div>
      </footer>
    );
};

export default Footer;
