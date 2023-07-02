import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <p>The Grand Oasis Retreat</p>

      <ul>
        <li>
          {' '}
          <NavLink to="/"> Home</NavLink>{' '}
        </li>
        <li>
          {' '}
          <NavLink to="/rooms"> Rooms </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/contact"> Contact </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to="/dashboard"> Dashboard</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
