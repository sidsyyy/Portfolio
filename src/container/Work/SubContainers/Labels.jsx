import React from 'react';


function Labels(props) {
    return (
        <div className="app__work-filter curvy-border">
            {['Unity', 'Flutter', 'React', 'Other', 'All'].map((tag, index) => (
                <div
                    key={index}
                    onClick={() => props.onClick(tag)}
                    className={`app__work-filter-item app__flex p-text ${props.tag === tag ? 'item-active' : ''}`}
                >
                    {tag}
                </div>
            ))}
        </div>
    )
};



export default Labels;