import React from "react";
import "./style.css";

function Input(props) {
    return (
        <div className="field">
            <div className="control">
                <input className="input is-warning input is-rounded input is-medium" { ...props } type="text" placeholder="This is a search bar" />
            </div>
        </div>
    )
};


export default Input;
