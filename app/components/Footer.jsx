import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "/public/images/github-icon.svg";
import LinkedinIcon from "/public/images/linkedin-icon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Building the future of technology, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/adavidryu"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                  <Image 
                    src={GithubIcon} 
                    alt="Github Icon" 
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/adamryu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative w-10 h-10 bg-[#2a2a2a] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                  <Image 
                    src={LinkedinIcon} 
                    alt="Linkedin Icon" 
                    className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors duration-300">
                  your.email@example.com
                </a>
              </li>
              <li className="text-gray-400">
                College Station, TX
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Adam Ryu. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer