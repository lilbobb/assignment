import React from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

  return (
    <div className="navbar">
      <div className="navlink">
        <NavLink className="toggle-btn">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </NavLink>
      </div>

      <nav>
        <Link to="/" className="pages">
          Home
        </Link>
        <Link to="/About" className="pages">
          About
        </Link>
        <Link to="/SignUp" className="pages">
          Signup
        </Link>
        <Link to="/Login" className="pages">
          Login
        </Link>
        <Link to="/Users" className="pages">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
