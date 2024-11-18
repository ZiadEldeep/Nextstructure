import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 lg:mb-0">
            <Link href="/" className="text-blue-400">MyBrand
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <Link href="/" className="text-gray-400 hover:text-white">Home
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">About
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white">Services
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
