import React from 'react';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-300 dark:border-gray-700 mt-auto bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-4 md:mb-0">© 2023 SinanTokmak, All rights reserved.</p>

                <div className="flex items-center gap-6 mb-4 md:mb-0">
                    <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="#">Terms & Conditions</a>
                </div>

                <div className="flex items-center gap-2">
                    <a className="social-icon p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-primary hover:bg-primary hover:text-white transition-all duration-300" href="#">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a className="social-icon p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-primary hover:bg-primary hover:text-white transition-all duration-300" href="#">
                        <FaDiscord className="w-5 h-5" />
                    </a>
                    <a className="social-icon p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-primary hover:bg-primary hover:text-white transition-all duration-300" href="#">
                        <FaGithub className="w-5 h-5" />
                    </a>
                </div>

                <p className="hidden md:block ml-4">Design By <span className="text-gray-900 dark:text-white font-semibold">JohannLeon</span></p>
            </div>
        </footer>
    );
};

export default Footer;
