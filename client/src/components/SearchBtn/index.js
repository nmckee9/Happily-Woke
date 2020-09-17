import React from 'react';

import './style.css';

function Search(props) {
    return (
        <button className="button is-medium">{props.children}</button>
    )
};

export default Search;