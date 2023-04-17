import React from 'react';
import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.svg';

const Header: React.FC = () => {
  const [blur, setBlur] = useState(false);

  const handleScroll = () => {
    setBlur(window.scrollY > 10); // Adjust the value for the desired scroll position to trigger the blur
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-zinc-950 fixed w-full top-0 z-50 transition-all duration-300 ${
        blur ? 'backdrop-blur-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="logo">
          {/* Replace with your logo */}
          <span className="text-zinc-500 text-2xl font-bold">Logo</span>
        </div>

        <nav className="space-x-4 font-medium">
          <a
            href="#"
            className="font-normal text-zinc-500 hover:text-slate-200 space-x-4 rounded-md px-3 py-2"
          >
            Home
          </a>
          <a href="#" className="font-normal text-zinc-500 hover:text-slate-200">
            Features
          </a>
          <a href="#" className="font-normal text-zinc-500 hover:text-slate-200">
            Pricing
          </a>
          <a href="#" className="font-normal text-zinc-500 hover:text-slate-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
