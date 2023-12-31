import React, {useState, useEffect} from 'react';


function Labels(props) {
    const [tagsCountArray, setTagsCountArray] = useState([]);

    const tagsArray = ['Unity', 'Flutter', 'React', 'Other', 'All'];

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
        <div className="app__work-filter curvy-border">
            {
                tagsArray.map((tag, index) => (
                <div
                    key={index}
                    onClick={() => props.onClick(tag)}
                    className={`app__work-filter-item app__flex curvy-border p-text ${props.tag === tag ? 'item-active' : ''}`}
                >
                    {tag}&nbsp;<p style={{ color: 'var(--dark-blue-color)' }}>{'(' + tagsCountArray[index] + ')'}</p>
                </div>
            ))}
        </div>
    )
};



export default Labels;