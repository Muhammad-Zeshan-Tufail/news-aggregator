import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          News Aggregator
        </Link>

        {/* Menu items */}
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'font-bold underline' : ''
              } hover:text-gray-200 text-white`}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/settings"
              className={`${
                location.pathname === '/settings' ? 'font-bold underline' : ''
              } hover:text-gray-200 text-white`}
            >
              Settings
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
