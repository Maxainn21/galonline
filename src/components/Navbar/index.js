import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#393E46]  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="relative w-full lg:max-w-sm">
                <select className="w-1/2 p-2.5 text-white bg-transparent rounded-md outline-none">
                  <option>SERVICE</option>
                  <option>Laravel 9 with React</option>
                  <option>React with Tailwind CSS</option>
                  <option>React With Headless UI</option>
                </select>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="hover:text-blue-500">
                  <a href="/">Home</a>
                </li>
                <li className="hover:text-blue-500">
                  <a href="#services">Services</a>
                </li>
                <li className="hover:text-blue-500">
                  <a href="#review">Review</a>
                </li>
                <li className="hover:text-blue-500">
                  <a href="#about-us">About Us</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                <Link
                  to={'/sign-in'}
                  className="w-full inline-block px-6 py-2 border-2 border-black font-medium text-xs leading-normal uppercase rounded hover:bg-blue-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/sign-in"
              className="px-8 py-3 outline outline-1 hover:bg-blue-400 rounded-md">
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
