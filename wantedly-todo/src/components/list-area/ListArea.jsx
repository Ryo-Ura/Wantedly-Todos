import React from 'react'
import './listArea.scss';
import Task from '../task-list/task/Task';
function ListArea() {
    const generateID = () => Math.random().toString(36).substring(5);
    const handleChecked = (checked) => {
        const newTask = tasks.map(task => {
            if (task.id === checked.id) {
                task.complete = !task.complete;
            }
            return task;
            });
            setTasks(newTask);
    }
    const [tasks, setTasks] = React.useState([
        {id: generateID(), name: 'Task 1', dueDate: '2020-01-01', complete: false},
        {id: generateID(), name: 'Task 2', dueDate: '2020-02-03', complete: false},
        {id: generateID(), name: 'Task 3', dueDate: '2020-05-05', complete: true},
        {id: generateID(), name: 'Task 4', dueDate: '2020-05-05', complete: true},
    ])
    return (
        <div className="panel">
            <div className="panel-heading">
                ⚛️ React ToDo
            </div>
            {tasks.map(task => (
                <Task key={task.id}
                    task={task} 
                    onMarked={handleChecked}
                />
            ))}
            <div className="panel-block">
                {tasks.length} tasks
            </div>
        </div>
    );
}

export default ListArea