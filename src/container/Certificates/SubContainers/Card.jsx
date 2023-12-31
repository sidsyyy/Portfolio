import React from 'react';
import '../Certificates.scss';
import { urlFor } from '../../../client';
import moment from 'moment';


function Card(props) {
    return (
        <div className="app__certificates-item app__flex curvy-border">
            <div className="app__certificates-content">

                <h1 className='bold-text'>{props.id + 1} / {props.items.length} </h1>
                <h2 >{props.items[props.id].name}</h2>

                <div>
                    <h4 className="bold-text">{props.items[props.id].by}</h4>
                    <h5 className="p-text">
                        Issue Date : {moment(props.items[props.id].issueDate, "YYYY-MM-DD").format("D MMM YYYY")}
                        </h5>
                </div>

            </div>

            <img 
                src={urlFor(props.items[props.id].imgurl)} 
                alt={props.items[props.id].name} 
            />

        </div>
    );
}

export default Card;