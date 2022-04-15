import React from "react";
import Modal from "react-modal";
import './popup.scss';
import TaskForm from '../popup-form/TaskForm';

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
}
export default function Popup() {
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <div className="Popup">
            <button onClick={() => setIsOpen(true)}>New Task</button>
            <Modal 
                style={modalStyle}
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnEsc={true}
            >
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <TaskForm></TaskForm>
            </Modal>
        </div>
    );
}