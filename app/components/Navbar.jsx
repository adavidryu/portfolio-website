import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import Image from 'next/image'

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Project",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }

]

const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-2">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <div className="relative w-14 h-14 md:w-20 md:h-20">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  object-contain
                />
              </div>
            </a>
          </Link>
          <div className="menu block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;