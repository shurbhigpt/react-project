import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="./home" className="navbar-brand" onClick={()=>window.location.href = '/home'} >
          Product List
        </Link>
        <div>
          <Link to ="./" className="btn btn-light ml-auto" onClick={()=>logout()}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};
  
export default NavBar;
