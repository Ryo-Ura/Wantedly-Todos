import React from 'react';
import './task.scss';
import MailIcon from '@mui/icons-material/Mail';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

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
                <div className="items">
                    <div className="item-container">
                        {/* <MailIcon fontSize='medium'></MailIcon> */}
                    </div>
                    <div className="item-container">
                        <DeleteOutlineIcon fontSize='large' className='delete-icon' onClick={handleChange} ></DeleteOutlineIcon>
                    </div>
                    <div className="item-container">
                        <ModeEditIcon fontSize='medium' className='edit-icon' onClick={handleChange}></ModeEditIcon>
                    </div>

                </div>

            </div>
        </label>
    );
}

