import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Active.css'

const Active = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
        fetch('active.json')
        .then(res=> res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='act'>
             <h1>Active Life</h1>
            <h4>Select Your Activities</h4>
          <div className='active-container'>
          <div className='card-grid'>
            {
                activities.map(active => <Card key={active.img} active={active}></Card>)
            }
           </div>
           <div>
               <h2>info</h2>
           </div>
          </div>
        </div>
    );
};

export default Active;