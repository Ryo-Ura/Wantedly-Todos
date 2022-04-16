import React from 'react';
import './task.scss';
export default function Task({task, onMarked}) {
    const handleChange = () => {
        onMarked(task);
    };
    return (
        <label className="panel-block">
            <div className="container">
                <input 
                    className='check-box'
                    type="checkbox"
                    checked={task.complete}
                    onChange={handleChange}
                />
                <div className='task-name'>
                    {task.name}
                </div>
                <div className='task-due-date'>
                    {task.dueDate}
                </div>

            </div>
        </label>
    );
}

