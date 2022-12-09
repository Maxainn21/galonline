import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Galonline } from '../../assets/Galonline.svg';
import { ReactComponent as Search } from '../../assets/search.svg';
import { ReactComponent as Profile } from '../../assets/profile.svg';
import { ReactComponent as Cart } from '../../assets/cart.svg';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#393E46]  ">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block max">
              <div className="relative w-full lg:max-w-sm">
                <select className="w-full p-2.5 text-white bg-transparent rounded-md outline-none ">
                  <option>SERVICE</option>
                  <option>Isi Ulang</option>
                  <option>Beli Galon</option>
                </select>
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
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
              <ul className="items-center justify-center space-y-8 mt-8 md:flex md:space-x-24 md:space-y-0">
                <Galonline />
                <img src="" alt="" />
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
          <div className="hidden space-x-2 md:inline-block ">
            <div className="flex space-x-2">
              <Search />
              <Profile />
              <Cart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
