import React from "react";
import "./style.css";

function Input() {
  return (
    // {<div className="field column is-four-fifths">
    //     <div className="control">
    //         <input className="input is-warning is-rounded is-medium" type="text" placeholder="This is a search bar" />
    //     </div>
    // </div>}
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input is-warning is-rounded is-medium" type="text" placeholder="Find a repository" />
      </p>
      <p class="control">
        <a class="button is-info">Search</a>
      </p>
    </div>
  );
}

export default Input;
