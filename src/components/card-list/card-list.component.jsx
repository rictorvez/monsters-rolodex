import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.monsterz.map(monster => (<Card key={ monster.id } monzter={monster} />))
        }
    </div>
);
