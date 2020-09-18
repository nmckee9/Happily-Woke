import React from "react";
import "./style.css";

function Input(props) {
    return (
        <div className="field is-grouped is-expanded">
            <p className="control is-expanded">
                <input {...props} className="input is-expanded wide-input" type="text" placeholder="Become happily Woke" />
            </p>
            <p class="control">
                <a className="button is-light search-btn" { ...props }>
                    Search
    </a>
            </p>
        </div>
    )
};


export default Input;
