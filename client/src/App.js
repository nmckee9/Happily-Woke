import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { StoreProvider } from "./utils/GlobalState";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/saved" component={Saved} />
      </Router>
    </StoreProvider>
  );
};

export default App;
