import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4 text-lg">© 2024 DesignGX. All rights reserved.</p>
                <div className="flex justify-center gap-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-2xl hover:text-gray-400" />
                    </a>
                </div>
                <p className="text-sm">DesignGX is a registered trademark.</p>
            </div>
        </footer>
    );
}

export default Footer;
