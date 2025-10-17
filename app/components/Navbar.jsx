


/// -------------------- After SEO  ----------------


"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#FFD447] to-[#FF6F61] shadow-md z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Logo + Name */}
        <Link href="/" className="flex items-center space-x-2" aria-label="SLS Banquets Home">
          <Image
            src="/logo.png"
            alt="SLS Banquets Hall logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-xl font-bold text-white">SLS Banquets</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#home" className="hover:text-[#3498DB]" aria-label="Home section">Home</a></li>
          <li><a href="#about" className="hover:text-[#3498DB]" aria-label="About SLS Banquets Hall">About Us</a></li>
          <li><a href="#services" className="hover:text-[#3498DB]" aria-label="Function Hall Services">Services</a></li>
          <li><a href="#facilities" className="hover:text-[#3498DB]" aria-label="Facilities at SLS Banquets">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-[#3498DB]" aria-label="Event Gallery of SLS Banquets Hall">Gallery</a></li>
          <li><a href="#contact" className="hover:text-[#3498DB]" aria-label="Contact SLS Banquets Hall">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-gradient-to-r from-[#FFD447] to-[#FF6F61] px-6 pb-4"
        >
          <ul className="space-y-4 text-white font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">About Us</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Services</a></li>
            <li><a href="#facilities" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Facilities</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Gallery</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-[#3498DB]">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
