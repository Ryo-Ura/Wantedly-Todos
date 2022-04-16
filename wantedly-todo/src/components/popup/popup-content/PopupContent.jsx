import React from 'react'
import './popupContent.scss';
import { useForm } from 'react-hook-form'


export default function PopupContent() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    function validate(value) {
        // this validator is not working
        if (value === '') {
            console.log('Please enter a value');
            return 'Required';
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <div>Task Name</div>
                <input {...register("TaskName")} />
            </div>
            <div className="input-field">
                <div>Due date</div>
                <input {...register("TaskDueDate")}  />
            </div>
            <input type="submit"
                onClick={()=>{
                    console.log('submit');
                    validate(handleSubmit('TaskName'))
                }}
            />
        </form>
    );
}