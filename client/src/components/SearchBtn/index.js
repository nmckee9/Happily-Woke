import React from 'react';

import './style.css';

function Search(props) {
    return (
        <button className="button" onClick={ props.onClick }>Search</button>
    )
};

export default Search;