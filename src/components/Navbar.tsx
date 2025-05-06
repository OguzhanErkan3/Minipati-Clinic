'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '/', label: 'Anasayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/services', label: 'Hizmetler' },
    { href: '/contact', label: 'İletişim' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-colors duration-300 px-4 lg:px-16 py-3 flex items-center justify-between ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
      }`}
      role="banner"
    >
      {/* Logo */}
      <Link href="/" aria-label="Anasayfa">
        <div className="flex items-center cursor-pointer">
          <Image
            src={scrolled ? '/logoSlider.png' : '/logo.png'}
            alt="MiniPati Veteriner Kliniği Logo"
            width={100}
            height={100}
            className=""
          />
          
        </div>
      </Link>

      {/* Masaüstü Menü */}
      <nav aria-label="Ana navigasyon" className="hidden md:flex space-x-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? 'page' : undefined}
              className={`px-4 py-2 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8d010c] ${
                isActive
                  ? 'bg-[#8d010c] text-white'
                  : scrolled
                  ? 'text-gray-800 hover:bg-gray-100 hover:text-[#8d010c]'
                  : 'text-white hover:bg-white/20 hover:text-white'
              }`}
            >
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Mobil Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menüyü Aç"
        className={`items-center md:hidden absolute right-4 top-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8d010c] ${
          scrolled ? 'text-gray-800' : 'text-white'
        }`}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobil Menü */}
      {menuOpen && (
        <nav
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-end p-4 md:hidden"
          aria-label="Mobil navigasyon"
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Menüyü Kapat"
            className="text-white text-6xl mb-6 focus:outline-none"
          >
            &times;
          </button>
          <div className="bg-white rounded-lg p-6 w-64">
            {links.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-center block py-6 font-semibold rounded-md text-xl ${
                    isActive ? 'bg-[#8d010c] text-white' : 'text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
