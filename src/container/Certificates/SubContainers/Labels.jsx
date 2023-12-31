import React, { useEffect, useState } from 'react';
import '../Certificates.scss';


function Labels(props) {
    const [tagsCountArray, setTagsCountArray] = useState([]);
    const tagsArray = ["Unity", "Cyber Security", "Programming", "Internship", "Other", "All"];

    async function countTags() {
        let temp = [];

        for (const tag of tagsArray) {
            let cnt = 0;

            for (const item of props.items) {
                if (item.tags.includes(tag)) cnt++;
            }

            console.log(tag + " " + cnt);
            temp.push(cnt);
        }

        await setTagsCountArray(temp);
    }

    useEffect(() => { 
        countTags();
     }, []);


    return (
        <div className="app__certificates-filter curvy-border">
            {
                tagsArray.map((tag, index) => (
                    <div
                        key={index}
                        onClick={async () => await props.onClick(tag)}
                        className={`app__certificates-filter-item app__flex p-text curvy-border ${props.activeTag === tag ? 'item-active' : ''}`}
                    >
                        {tag}&nbsp;<p style={{ color: 'var(--dark-blue-color)' }}>{'(' + tagsCountArray[index] + ')'}</p>
                    </div>
                ))
            }
        </div>
    )
};


export default Labels;