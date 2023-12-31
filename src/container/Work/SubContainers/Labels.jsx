import React, {useState, useEffect} from 'react';


function Labels(props) {
    return (
        <div className="app__work-filter curvy-border">
            {
                props.tags.map((tag, index) => (
                <div
                    key={index}
                    onClick={() => props.onClick(tag)}
                    className={`app__work-filter-item app__flex curvy-border p-text ${props.tag === tag ? 'item-active' : ''}`}
                >
                    {tag}&nbsp;<p style={{ color: 'var(--dark-blue-color)' }}>{'(' + props.tagsCount[index] + ')'}</p>
                </div>
            ))}
        </div>
    )
};



export default Labels;