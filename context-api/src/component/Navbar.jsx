import React from "react";
import { Link } from 'react-router-dom'
import { useTheme } from "../contextApi";
const Navbar = () => {
    const {toggleTheme} = useTheme()
  return (
    <div className="navbar">
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
        </ul>
      </div>
      <div>
        <button className="btn" onClick={()=>toggleTheme()}>toggle theme</button>
      </div>
    </div>
  );
};

export default Navbar;
