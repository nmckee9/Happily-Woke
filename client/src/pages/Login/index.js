import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import positive from "../../components/images/positive.png";
import "./style.css";
import { StoreProvider } from "../../utils/GlobalState";

function Login() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login email", email);
  };

  return (
    <div className="container">
      <a className="navbar-item brand-name nav-link center-it" href="/home">
        <img src={positive} className="brand-image " alt="logo" /> happily Woke
      </a>
      <br></br>
      <div className="box">
        <header className="modal-card-head ">
          <div className="brand-name">Login</div>
        </header>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button
              className="button is-light"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
            <Link to="/signup" className="switch-page">
              {" "}
              Don't have an account?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
