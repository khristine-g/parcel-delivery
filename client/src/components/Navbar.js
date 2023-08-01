import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'

const Navbar = () => {
  return (
    
        <nav className="navbar-container">
          <ul className="navbar-links">
            <li>
              <Link  to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/parcel">Create parcel</Link>
            </li> 
            <li>
              <Link to="/about">About </Link>
              <li>
              <Link to="/tracking">Track </Link>
            </li> 
            <li>
              <Link to="/services">Services</Link>
            </li> 
            </li> 
          </ul> 
        </nav>
      );
    };
export default Navbar;
