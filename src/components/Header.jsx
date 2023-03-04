import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeLogo from '../assets/home1.png'

function Header() {
  return (
    <div className="mb-2 p-3 ">
      <nav className=" col-6 mx-auto mb-1">
        <NavLink to="/"><img className="rounded d-flex" src={HomeLogo} alt="" /></NavLink>
      </nav>
    </div>
  )
}

export default Header;