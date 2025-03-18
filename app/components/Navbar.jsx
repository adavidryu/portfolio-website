'use client'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'
import { useState, useEffect } from 'react';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#121212]/80 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <ul className="flex space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    href={link.path} 
                    title={link.title}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="bg-[#121212]/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                href={link.path}
                title={link.title}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;