import React from 'react'
import './popupContent.scss';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function PopupContent({setTasks, setIsOpen}) {
    const [date, setDate] = React.useState(new Date());
    const [text, setText] = React.useState('');
    function submitHandler(e){
        e.preventDefault();
    }
    const handleChange = e => setText(e.target.value);
    return (
        <form onSubmit={submitHandler}>
            <div className="input-field">
                <div>Task Name</div>
                <input
                    class="input"
                    type="text"
                    placeholder="Enter to add"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                <section>
                    <label className="task-form-input-title">Date</label>
                    <ReactDatePicker selected={date} onChange={(date) => setDate(date)} />
                </section>
            </div>
            <input type="submit"
                onClick={()=>{
                    console.log('submit');

                    setTasks( text, date.toLocaleDateString());
                    setIsOpen(false)
                }}
                
            />
        </form>
    );
}