import React from 'react';
import './task.scss';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box';
import Modal from "react-modal";
import PopupContent from '../../popup/popup-content/PopupContent';


Modal.setAppElement("#root");

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
        position: "absolute",
        overflow: "auto",
    }
};

export default function Task({key, task, onMarked, deleteTask, handleEditTask}) {
    const handleChange = () => {
        onMarked(task);
    };
    const handleDelete = () => {
        deleteTask(task.key);
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    return (
        <label className = {task.complete ?  "panel-block active" : "panel-block"}>
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
                <div className="item-container">
                    <div className="item">
                        <DeleteOutlineIcon fontSize='medium' className='delete-icon' onClick={handleDelete} ></DeleteOutlineIcon>
                    </div>
                    <div className="item">
                        <ModeEditIcon fontSize='medium' className='edit-icon' onClick={setIsOpen}></ModeEditIcon>
                        <Modal 
                            style={modalStyle}
                            isOpen={modalIsOpen}
                            onRequestClose={() => setIsOpen(false)}
                            closeTimeoutMS={500}
                            shouldCloseOnEsc={true}
                        >
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <p>Edit "{task.name}" </p>
                            <PopupContent
                                setTasks={handleEditTask}
                                setIsOpen={setIsOpen}
                                task={task}
                            />
                    </Modal>
                    </div>
                </div>
            </div>
        </label>
    );
}

