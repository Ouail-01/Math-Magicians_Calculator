import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },

    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },

    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <div className="navbar">
      <nav>

        <h1>Math Magicians</h1>
        <ul>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.path}
                exact="true"
              >
                {nav.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
