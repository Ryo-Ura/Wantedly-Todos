import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import './taskform.scss';
import "react-datepicker/dist/react-datepicker.css";
export default function TaskForm() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [date, setDate] = useState(new Date());
    return (
        <form className="task-form" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <section>
                <label className="task-form-input-title">Name</label>
                <input className="task-form-name" {...register("taskname")}  placeholder="// @TODO " />
            </section>
            <section>
                <label className="task-form-input-title">Date</label>
                <ReactDatePicker selected={date} onChange={(date) => setDate(date)} />

            </section>
            <textarea className="task-form-note" {...register("Note")} placeholder="Note" />
            <p>{data}</p>
            <input className="task-form-input-button-submit" type="submit"  />
        </form>
    );
}
