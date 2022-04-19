import React from 'react';
import './stat.scss';
function Stat({tasks}) {
    const total = tasks.length;
    const done = tasks.filter(task => task.complete).length;
    return (
        <div className='stat-container'>
            <div className="header">
                overview
            </div>
            <div className="stat">
                <ul>
                    <li className='total' >Total: {total}</li>
                    <li>Done: {done}</li>
                    <li>Todo: {total - done}</li>
                </ul>

            </div>
        </div>

    )
}

export default Stat