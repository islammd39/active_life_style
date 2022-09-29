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
                <button id='btn' onClick={breakHandler}>15s</button>
                <button id='btn' onClick={breakHandler}>20s</button>
                <button id='btn' onClick={breakHandler}>25s</button>
            </div>
            <p>Break Time : {second}</p>
        </div>
    );
};

export default Break;