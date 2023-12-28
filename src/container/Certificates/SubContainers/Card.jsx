import React from 'react';
import '../Certificates.scss';
import { urlFor } from '../../../client';


function Card(props) {
    return (
        <div className="app__certificates-item app__flex">
            <div className="app__certificates-content">

                <h1 className='bold-text'>{props.id + 1} / {props.items.length} </h1>
                <h2 >{props.items[props.id].name}</h2>

                <div>
                    <h4 className="bold-text">{props.items[props.id].by}</h4>
                    <h5 className="p-text">Issue Date : {props.items[props.id].issueDate}</h5>
                </div>

            </div>

            <img src={urlFor(props.items[props.id].imgurl)} alt={props.items[props.id].name} />

        </div>
    );
}

export default Card;