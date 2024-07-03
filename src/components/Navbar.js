// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Logo</span>
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8">
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
    </nav>
  );
};

export default Navbar;
