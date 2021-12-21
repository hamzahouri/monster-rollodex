import React from 'react' ;
import './card-list.style.css';
import Card from '../card/card'

 const CardList = (props) => {
    
    return (
        <div className='card-list'>
         {props.name.map(a=> (<Card key={a.id} monster={a}/>))}
        </div>
    )
};

export default CardList;