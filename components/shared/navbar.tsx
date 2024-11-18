"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
         
          <div className="text-2xl font-bold text-blue-500">
            <Link href="/">MyLogo</Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button
              className="text-gray-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col space-y-4 mt-2">
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-500">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-blue-500">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
