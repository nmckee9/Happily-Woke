import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./pages/Home";
import Saved from "./pages/Saved";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

const App = () => {
   
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>  
    );
  
}

export default App;
