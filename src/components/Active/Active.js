import React, { useEffect, useState } from 'react';

const Active = () => {
    const [activities,setActivities]=useState([])
    useEffect(()=>{
        fetch('active.json')
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>Active Life</h1>
            <h4>Select Your Activities</h4>
        </div>
    );
};

export default Active;