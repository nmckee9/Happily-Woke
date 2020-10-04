import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import positive from "../../components/images/positive.png";
import "./style.css";
import { useAuth } from "../../context/auth";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { setAuthTokens } = useAuth();
  
  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log("SignUp username", username);

    //request to server
    axios.post('/signup', {
      username,
      password
    }).then(res => {
      if (res.status === 200) {
        setAuthTokens(res.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <a className="navbar-item brand-name nav-link center-it" href="/home">
        <img src={positive} className="brand-image " alt="logo" /> happily Woke
          </a>
<br></br>
      <div className="box">
        <header className="modal-card-head ">
          <h3 class="brand-name">Sign Up</h3>
        </header>
        <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input name="name" className="input" type="name" placeholder="Name" value={name} onChange={handleNameChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        <div className="field">
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input name="username" className="input" type="username" placeholder="Email" value={username} onChange={handleUsernameChange} />
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
              <input name="password" className="input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-light" type="submit" onClick={handleSubmit}>
                Sign Up
    </button>
    <Link to="/login" className="switch-page"> Already have an account?</Link>
        
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
