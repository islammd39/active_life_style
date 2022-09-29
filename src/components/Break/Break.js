import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [second,setSecond]=useState(0);

    const breakHandler = () =>{
        const btn = document.getElementById('btn')
        setSecond(btn.innerHTML)
        console.log(btn.innerHTML);
    }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-container'>
                <button id='btn' onClick={breakHandler}>10s</button>
                <button><span>15s</span></button>
                <button><span>20s</span></button>
                <button><span>25s</span></button>
            </div>
            <p>Break Time : {second}</p>
        </div>
    );
};

export default Break;