import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="brand">BobTech</div>
      <nav  className="nav">
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
    <button id="navbar-btn" onClick={()=>setShowMenu(!showMenu)} >Open Menu</button>
  {
    showMenu && (
      <nav className="mobileNav">
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
    )
  }

    </div>
  );
};

export default NavBar;
