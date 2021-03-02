import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt={'Monster' + props.monzter.id + ''} src={'https://robohash.org/' + props.monzter.id + '?set=set2&size=180x180'} />
        <h2> {props.monzter.name} </h2>
        <p>{props.monzter.email}</p>
    </div>
);
