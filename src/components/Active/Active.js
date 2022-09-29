import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
import './Active.css'
import { faCocktail, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Active = () => {
    const [activities,setActivities]=useState([])
    const [card,setCard]=useState([])
    useEffect(()=>{
        fetch('active.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    },[])
    const handle = (active)=>{
        // console.log(active.timeRequired);
        const Newcard = [...card,active]
        setCard(Newcard)
        // console.log(Newcard);
    }
    return (
        <div className='act'>
             <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>Active Life</h1>
            <h4>Select Your Activities</h4>
          <div className='active-container'>
          <div className='card-grid'>
            {
                activities.map(active => <Card key={active.img} active={active} handle={handle}></Card>)
            }
           </div>
           <div className='right-container'>
            {/* <h1>{card.length}</h1> */}
               <Sidebar card ={card}></Sidebar>
           </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam non eum, optio ratione quo illo atque placeat, alias eligendi harum ex laborum quos quam id a nihil cupiditate perspiciatis?</p>
        </div>
    );
};

export default Active;