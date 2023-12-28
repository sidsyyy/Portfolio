import React from 'react';
import './Loader.scss';

function Loader(props) {
    return (
        <div style={{display: props.hidden ? "none": "inline"}} className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;