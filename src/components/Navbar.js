// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Logo</a>
        </Link>
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link href="/home">
            <a className="text-lg hover:text-gray-700">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-lg hover:text-gray-700">About</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a className="text-lg hover:text-gray-700">Services</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-lg hover:text-gray-700">Contact</a>
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
