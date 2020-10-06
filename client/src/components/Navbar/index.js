import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import "./style.css";
import positive from "../images/positive.png";
import Modal from "../Modal";


function Navbar({ onChange, value, onClick, preference, setpreference, active, setActive }) {
  const [isActive, setisActive] = useState(false);

  return (
    <div>
      <Modal setpreference={setpreference} preference={preference} active={active} onClick={() => { setActive(false) }} />
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand ">
          <a className="navbar-item brand-name nav-link" href="/">
            <img src={positive} className="brand-image" alt="logo" /> happily Woke
          </a>
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarExampleTransparentExample navbar-toggle " className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
              </a>
              <div className="navbar-dropdown">
              <a className="navbar-item" href="/signup">
                  <strong>Sign Up</strong>
                </a>
                <a className="navbar-item" href="/login">
                  Login
             </a>
             <div className="navbar-item ">
                  Logout
             </div>
                       
              </div>
            </div>
            <p className="navbar-item button mood-btn " role="button"
              onClick={() => { setActive(!active) }}
            >Mood
            </p>
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="/saved">
              Saved
             </a>
          </div>
          <div className="field is-grouped is-expanded search-bar">
            <p className="control is-expanded">
              <input value={value} onChange={onChange} className="input is-expanded wide-input" type="text" placeholder="Stay informed... happily" />
            </p>
            <p className="control">
              <a className="button is-light search-btn" onClick={onClick}>
                Search
              </a>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;