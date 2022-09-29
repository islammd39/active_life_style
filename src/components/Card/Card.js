import React from 'react';
import './Card.css'

const Card = (props) => {
    const {img,name,timeRequired} = props.active
    const {handle}=props
    return (
        <div className='card'>
             
            <img src={img} alt=".." />
            <h4>{name}</h4>
            <p>Time Required : {timeRequired}</p>
            <button onClick={()=>handle(props.active)} className='card-btn'><p>Add To list</p></button>
        </div>
    );
};

export default Card;