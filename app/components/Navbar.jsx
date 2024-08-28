'use client'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import { useState } from 'react';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }

]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-85 backdrop-blur-sm">
      <div className="mx-4 px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
              />
            </div>
          </Link>
          <div className="hidden sm:block">
            <ul className="flex space-x-4 sm:space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:hidden">
            {/* Hamburger menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.path}
                title={link.title}
                className="block px-3 py-2 rounded-md text-base font-medium"
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;