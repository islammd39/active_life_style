import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h4>Add A Break</h4>
            <div className='break-container'>
                <button><span>10s</span></button>
                <button><span>15s</span></button>
                <button><span>20s</span></button>
                <button><span>25s</span></button>
            </div>
        </div>
    );
};

export default Break;