import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
    <div className="brand">BobTech</div>
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
          Signin
        </Link>
        <Link to="/Users" className="pages">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
