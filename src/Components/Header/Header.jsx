import React from 'react'
import { Link } from "react-router-dom"
import Logo from './cooking.png'
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    {
      path: "/",
      pageName: "Home"
    },
    {
      path: "/about",
      pageName: "About Us"
    },
    {
      path: "/contact-us",
      pageName: "Contact Us"
    }
  ]
  return (
    <>

      <div className="relative w-full bg-red-500 text-white font-semibold">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img width={35} src={Logo} alt="error" />
            </span>
            <span className="font-bold">Dr’s. Kitchen</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {routes.map(({ pageName, path }, index) => {
                return <li key={index}><Link className='text-white hover:bla hover:text-gray-700' to={path}>{pageName}</Link></li>
              })}
            </ul>
          </div>
          <div className="hidden lg:block">
          </div>
          <div className="lg:hidden">
            <button className='bg-transparent' onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-red-500">
            <ul className="flex flex-col space-y-4 px-4 py-2">
              {routes.map(({ pageName, path }, index) => (
                <li key={index}>
                  <Link
                    className='text-white hover:text-gray-700 block'
                    to={path}
                    onClick={() => setIsOpen(false)} // Close dropdown on link click
                  >
                    {pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </>
  )
}

export default Header