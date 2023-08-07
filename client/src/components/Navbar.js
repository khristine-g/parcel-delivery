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
              <Link to="/Login">Login</Link>
            </li> 
            <li>
              <Link to="/register">Register </Link>
               
           
            </li> 

            <li>
              <Link to="/my-shipments">my shipments </Link>
               
           
            </li> 

            <li>
              <Link to="/admin">Admin </Link>
               
           
            </li> 
          </ul> 
        </nav>
      );
    };
export default Navbar;
