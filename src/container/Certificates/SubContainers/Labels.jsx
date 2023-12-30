import React from 'react';
import '../Certificates.scss';


function Labels(props) {
    return (<div className="app__certificates-filter curvy-border">
        {["Unity", "Cyber Security", "Programming", "Internship", "Other", "All"]
            .map((tag, index) => (
                <div
                    key={index}
                    onClick={async () => await props.onClick(tag)}
                    className={`app__certificates-filter-item app__flex p-text curvy-border ${props.activeTag === tag ? 'item-active' : ''}`}
                >
                    {tag}
                </div>
            ))}
    </div>)
};


export default Labels;