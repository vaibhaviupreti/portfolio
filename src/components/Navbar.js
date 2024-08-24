"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrollBg, setScrollBg] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };
    console.log("scroll...",scrollBg)

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // <nav className="bg-white-500">
    // <nav className={`bg-${scrollBg ? 'white' : 'transpaprent'} shadow-lg sticky top-0 z-50`}>
    <nav className="bg-transparent sticky top-0 z-50">
     <div className='container mx-auto flex justify-between items-center nav-padding'>
       {/* Logo */}
       <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer"><button>Logo</button></span>
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 nav-items">
        <li>
          <Link href="/home">
            <span className="text-lg hover:text-gray-700 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-lg hover:text-gray-700 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <span className="text-lg hover:text-gray-700 cursor-pointer">Services</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="text-lg hover:text-gray-700 cursor-pointer">Contact</span>
          </Link>
        </li>
      </ul>

      {/* Button */}
      <div className="hidden md:block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-2xl">
          {/* Hamburger icon */}
          <span>&#9776;</span>
        </button>
      </div>
     </div>
    </nav>
  );
};

export default Navbar;
