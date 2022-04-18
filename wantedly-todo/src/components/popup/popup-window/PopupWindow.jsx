import React from "react";
import Modal from "react-modal";
import './popupWindow.scss';
import PopupContent from '../popup-content/PopupContent';

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

export default function PopupWindow({setTasks, task}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    return (
        <div className="Popup">
            <button className="new-task" onClick={() => {setIsOpen(true)}} >New Task</button>
            <Modal 
                style={modalStyle}
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                closeTimeoutMS={500}
                shouldCloseOnEsc={true}
            >
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <PopupContent
                    setTasks={setTasks}
                    setIsOpen={setIsOpen}
                    task={task}
                />
            </Modal>
        </div>
    );
}