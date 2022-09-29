
import React, { useState } from 'react';
import './Break.css'

const Break = () => {
    const [second,setSecond]=useState();

    const breakHandler = (value) =>{
     const setValue = value
     setSecond(setValue)
    //   console.log(value);
       
       
    }
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-container'>
                <button onClick={()=>breakHandler('10s')}>10s</button>
                <button onClick={()=>breakHandler('15s')}>15s</button>
                <button onClick={()=>breakHandler('20s')}>20s</button>
                <button onClick={()=>breakHandler('25s')}>25s</button>
            </div>
            <p>Break Time : {second}</p>
        </div>
    );
};

export default Break;