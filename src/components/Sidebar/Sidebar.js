import React from 'react';
import Break from '../Break/Break';
import Myinfo from '../Myinfo/Myinfo';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='side-bar'>
           <Myinfo></Myinfo>
           <Break></Break>

        </div>
    );
};

export default Sidebar;