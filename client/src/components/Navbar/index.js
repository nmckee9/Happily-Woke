import React, { Component } from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components/dist';


class Navbar extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="primary" >PLease work</Navbar>
        <h1>Happily Woke!</h1>
      </div>
    );
  }
}

export default Navbar;