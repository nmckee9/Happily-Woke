
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";

const App = () => {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <PrivateRoute path="/saved" component={Saved} />
        <Route exact path="/home" component={Saved} />
      </Router>
    </AuthContext.Provider>
  );

}

export default App;