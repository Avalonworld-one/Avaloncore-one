//components: Header.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header>
        <div className="sm:px-6 md:px-8">
          <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text:sm leading-6 dark:text-slate-200">
            <Image
              className="w-auto h-7"
              width={117}
              height={26}
              src="/logo.svg"
              alt="Logo"
            />

            <div className="flex items-center">
              <div className="-my-1 ml-2 -mr-1 md:hidden">
                <button
                  type="button"
                  className="text-gray-300 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  onClick={() => setIsOpen(!isOpen)}
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

              <div className="hidden md:flex items-center space-x-1">
                <nav className="navbar_nav">
                  <ul className="flex flex-col md:flex-row md:items-center md:gap-x-6">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md"
                    >
                      Docs
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-300 hover:text-gray-500 rounded-md"
                    >
                      Contact
                    </a>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className="fixed z-50 inset-0 md:hidden"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          aria-modal="true"
        ></div>
        <div className="block md:flex items-center space-x-1">
          <nav className="fixed bg-neutral-950 w-full rounded-lg max-w-xs top-4 right-4 shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
            <button
              type="button"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300"
              tabIndex={0}
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close Navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-3 h-3 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <ul className="space-y-6">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-500 rounded-md dark:hover-text-gray-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-500 dark:hover-text-gray-400 rounded-md"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-500 dark:hover-text-gray-400 rounded-md"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-gray-500 dark:hover-text-gray-400 rounded-md"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10"></div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
