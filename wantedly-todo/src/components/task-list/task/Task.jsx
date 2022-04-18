import React from 'react';
import './task.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box';


export default function Task({task, onMarked, deleteTask}) {
    const handleChange = () => {
        onMarked(task);
    };
    const handleDelete = () => {
        deleteTask(task.key);
    }

    return (
        <label className="panel-block">
            <div className="container">
                
                    <Box 
                    className = {task.complete ?  "box active" : "box"}
                    sx={{
                        border: '1px solid grey',
                    }}
                    ></Box>
                
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
                        <DeleteOutlineIcon fontSize='large' className='delete-icon' onClick={handleDelete} ></DeleteOutlineIcon>
                    </div>
                    <div className="item-container">
                        <ModeEditIcon fontSize='medium' className='edit-icon' onClick={handleChange}></ModeEditIcon>
                    </div>

                </div>
                    

            </div>
        </label>
    );
}

