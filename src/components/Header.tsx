//components/Header.tsx
import React, { useState } from "react";
import Image from "next/image"; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={"relative"}>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text:sm leading-6 dark:text-slate-200">
          {/* Replace with your logo */}
          <Image
            className="w-auto h-6"
            width={117}
            height={26}
            src="/logo.svg"
            alt="Logo"
          />

          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="-my-1 ml-2 -mr-1 md:hidden">
              <button
                type="button"
                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                <span className="sr-only">Navigation</span>

                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>

            <div className={`absolute top-12 bg-black right-4 shadow-md overflow-hidden mt-2 py-1 z-50 md:flex items-center ${isMenuOpen ? '' : 'hidden'} md:relative md:top-0 md:bg-transparent md:shadow-none md:placeholder:overflow-visible md:py-0 md:placeholder:mt-0 md:z-0 `}>
              <nav className="navbar_nav">
                <ul className="flex flex-col md:flex-row md:items-center selection:md: gap-x-6">
                <a href="#" className="block px-4 py-2 hover:text-gray-500 rounded-md">
                    Home
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md">
                    Docs
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md">
                    Pricing
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md">
                    Contact
                  </a>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
