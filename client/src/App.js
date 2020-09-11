import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components/dist';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="dark" >PLease work</Navbar>
        <h1>Happily Woke!</h1>
      </div>
    );
  }
}

export default App;
