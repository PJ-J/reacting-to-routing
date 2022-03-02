import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-around', borderBottom: '2px solid black'}}>
      
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >Home</NavLink>
      
      <NavLink to="/films" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >Films</NavLink>

      <NavLink to="/people" style={({ isActive }) => ({ color: isActive ? 'black' : 'blue', textDecoration: isActive? 'none' : 'none' })} className={({ isActive }) => `nav_link${isActive ? " active" : ""}`} >People</NavLink>


    </nav>
  );
}

export default Navbar;