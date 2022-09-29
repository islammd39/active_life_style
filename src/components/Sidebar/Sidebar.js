import React from 'react';
import Break from '../Break/Break';
import Myinfo from '../Myinfo/Myinfo';
import './Sidebar.css'

const Sidebar = ({card}) => {
    // console.log(card);
    let time = 0
    for(const active of card){
        time = time + active.timeRequired
    }
    return (
        <div className='side-bar'>
           <Myinfo></Myinfo>
           <Break></Break>
           <h4>Activities Details</h4>
            <p>Activities Time : {time}mins</p>
           <button className='completed-btn'><p>Activities Completed</p></button>
        </div>
    );
};

export default Sidebar;