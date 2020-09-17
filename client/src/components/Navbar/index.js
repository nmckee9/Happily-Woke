import React from "react";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar is-info nav__padding">
      <div className="navbar-brand">
        <a className="navbar-item" href="/"></a>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/home">
            Home
          </a>
          <a className="navbar-item" href="/saved">
            Saved
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
