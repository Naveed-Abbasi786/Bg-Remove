import React, { useState } from "react";
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navigations = [
    { PageName: 'Remove Background', path: 'Upload' },
    { PageName: 'How to use', path: '/', Icon: true },
    { PageName: 'Tools & API', path: '/' },
    { PageName: 'Pricing', path: '/' },
  ];

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 mt-2">
              <img src={logo} alt="logo" />
            </div>
            <span className="text-3xl font-bold text-gray-800" style={{ color: '#54616C' }}>
              Remove <span style={{ color: '#BAC0C4' }}>bg</span>
            </span>
          </div>
        </div>

        {/* Desktop View: Full Navigation Menu */}
        <div className="hidden lg:flex  space-x-2">
          {Navigations.map((val, ind) => (
            <a
              key={ind}
              href={val.path}
              className="text-gray-600 text-lg font-semibold py-1 hover:bg-gray-300 px-5 hover:rounded-full flex items-center"
            >
              {val.PageName}
              {val.Icon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4 mt-1 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right Section: Sign Up and Login Buttons */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full py-2 px-4 transition duration-300"
          >
            Log in
          </a>

          <a
            href="#"
            className="bg-gray-100 text-gray-900 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Sign up
          </a>
        </div>

        {/* Tablet and Mobile View: Sign Up and Login only */}
        <div className="lg:hidden flex space-x-4">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown on tablet and mobile view) */}
      <div
        className={`lg:hidden bg-white shadow-md w-full overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="flex flex-col items-start px-4 py-4">
          {/* Navigation Links (Tablet and Mobile view) */}
          {Navigations.map((val, ind) => (
            <div key={ind} className="w-full">
              <a
                href={val.path}
                className="block w-full text-left py-2 text-gray-600 hover:bg-gray-100 hover:rounded-md"
              >
                {val.PageName}
              </a>
              <hr className="my-2"/>
            </div>
          ))}
          
          {/* Mobile Login & Sign up */}
          <a href="#" className="block w-full text-left py-2 text-gray-600 hover:bg-gray-100 hover:rounded-md">
            Log in
          </a>
          <a
            href="#"
            className="block w-full text-center py-3 mt-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition duration-300"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
