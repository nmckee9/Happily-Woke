import React, { Component } from "react";
import {BrowserRouter as Router, Route, } from "react-router-dom"
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar color="dark" >PLease work</Navbar>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <h1>Happily Woke!</h1>
          <Footer />
        </div>
      </Router>  
    );
  }
}

export default App;
