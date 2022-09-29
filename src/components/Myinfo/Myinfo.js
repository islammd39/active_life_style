import React from 'react';
import './Myinfo.css'

const Myinfo = () => {
    return (
        <div>
            <div>
           <h3>MD RAHAT ISLAM</h3>
            <small>Jessore, Bangladesh</small>
           </div>
           <div className='info'>
            <div>
            <h3>80<small>kg</small></h3>
            <p>Weight</p>
            </div>
            <div>
            <h3>180<small>cm</small></h3>
            <p>Height</p>
            </div>
            <div>
            <h3>29<small>yrs</small></h3>
            <p>Age</p>
            </div>
           </div>
        </div>
    );
};

export default Myinfo;