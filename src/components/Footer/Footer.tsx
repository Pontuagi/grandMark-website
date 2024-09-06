"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center px-8 py-4 bg-green-800/80 text-white w-full rounded-t-lg">
      <div className="flex justify-between items-center w-full max-w-[1200px] flex-col md:flex-row gap-5 md:gap-0">
        <nav className="flex">
          <ul className="flex list-none p-0 mr-8">
            <li className="ml-8">
              <a
                href="/"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                Home
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/#about"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                About
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/#services"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                Services
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex">
          <ul className="flex list-none p-0">
            <li className="ml-8">
              <a
                href="/privacy"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                Privacy
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/terms"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                Terms
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/#contact"
                className="text-white font-bold hover:text-blue-900 relative hover:after:content-[''] hover:after:absolute hover:after:left-[-10%] hover:after:bottom-[-2px] hover:after:w-[120%] hover:after:h-[3px] hover:after:bg-blue-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
