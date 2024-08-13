import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-10 flex justify-between">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  object-contain
                />
              </div>
            </a>
          </Link>
          <p className="text-slate-600">All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer