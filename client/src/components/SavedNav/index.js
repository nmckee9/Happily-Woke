import React, { useState } from "react";
import "./style.css";
import positive from "../images/positive.png";
import Modal from "../Modal";


function SavedNav({ setpreference, preference, active, setActive }) {
  const [isActive, setisActive] = useState(false);

  return (
    <div>
     <Modal setpreference={setpreference} preference={preference} active={active} onClick={() => {setActive(false)}} />
     
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand ">
        <a class="navbar-item brand-name nav-link" href="/home">
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
        </a>
      </div>
      <div id="navbarExampleTransparentExample navbar-toggle " className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
        <p className="navbar-item button mood-btn " role="button"
            onClick={() => {setActive(true)}}
            >Mood
          </p>
          <a className="navbar-item" href="/home">
            Home
          </a>
          <a className="navbar-item" href="/saved">
            Saved
          </a>
        </div>
      </div>
     
    </nav>
    </div>
  );
}

export default SavedNav;
