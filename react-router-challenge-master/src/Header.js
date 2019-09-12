import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Header