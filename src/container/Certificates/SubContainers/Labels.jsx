import React, { useEffect, useState } from 'react';
import '../Certificates.scss';


function Labels(props) {


    return (
        <div className="app__certificates-filter curvy-border">
            {
                props.tags.map((tag, index) => (
                    <div
                        key={index}
                        onClick={async () => await props.onClick(tag)}
                        className={`app__certificates-filter-item app__flex p-text curvy-border ${props.activeTag === tag ? 'item-active' : ''}`}
                    >
                        {tag}&nbsp;<p style={{ color: 'var(--dark-blue-color)' }}>{'(' + props.tagsCount.at(index) + ')'}</p>
                    </div>
                ))
            }
        </div>
    )
};


export default Labels;