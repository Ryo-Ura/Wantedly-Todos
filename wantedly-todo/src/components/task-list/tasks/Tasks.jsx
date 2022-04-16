import React from 'react'
import ListArea from '../../list-area/ListArea';
function Tasks() {
    const generateID = () => Math.random().toString(36).substring(5);
    
    const [tasks, setTasks] = React.useState([
        {key: generateID(), name: 'Task 1', dueDate: '2020-01-01', complete: false},
        {key: generateID(), name: 'Task 2', dueDate: '2020-02-03', complete: false},
        {key: generateID(), name: 'Task 3', dueDate: '2020-05-05', complete: true},
        {key: generateID(), name: 'Task 4', dueDate: '2020-05-05', complete: true},
    ])
    const handleChecked = (checked) => {
        const newTask = tasks.map(task => {
            if (task.id === checked.id) {
                task.complete = !task.complete;
            }
            return task;
            });
            setTasks(newTask);
    }
    return (
        <div>
            <ListArea 
                tasks={tasks} 
                
                // onChecked={handleChecked}
                // setTasks={setTasks}
            />
        </div>
    )
}

export default Tasks