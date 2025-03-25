import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 bg-gradient-to-r from-green-700 to-green-500">
      <nav className="px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Tree Plantation Logo"
            />
            <span className="text-white text-xl font-bold">Green Earth</span>
          </Link>

          {/* Login and Get Started Buttons */}
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition-all"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white hover:text-orange-300"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white hover:text-orange-300"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white hover:text-orange-300"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white hover:text-orange-300"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                    ${
                      isActive
                        ? "text-orange-300"
                        : "text-white hover:text-orange-300"
                    } lg:hover:bg-transparent lg:border-0 lg:p-0`
                  }
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
