import React, { useState } from "react";
import "./style.css";
import positive from "../images/positive.png";
import Input from "../Input";
import Modal from "../Modal";


function SavedNav() {
  const [isActive, setisActive] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  return (
    <div>
     <Modal show={modalOpen} close={() => setmodalOpen(false)}>hello</Modal>
     
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
            onClick={() => {setmodalOpen(true)}}
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
