import React from 'react'
import ListArea from '../list-area/ListArea';
import PopupWindow from '../popup/popup-window/PopupWindow';
import './taskManager.scss'
function TaskManager() {
    const generateID = () => Math.random().toString(36).substring(5);
    const [tasks, setTasks] = React.useState([
        {key: generateID(), name: 'Task 1', dueDate: '2020/01/01', complete: false},
        {key: generateID(), name: 'Task 2', dueDate: '2020/02/03', complete: false},
        {key: generateID(), name: 'Task 3', dueDate: '2020/05/05', complete: true},
        {key: generateID(), name: 'Task 4', dueDate: '2020/11/05', complete: true},
    ])
    const deleteTask = (key) => {
        const newTask = tasks.filter(task => task.key !== key);
        setTasks(newTask);
    }
    const handleAddTask = (name, date) => {
        const newTask = {
            key: generateID(),
            name: name,
            dueDate: date,
            complete: false
        }
        setTasks([...tasks, newTask]);
    }

    React.useEffect(() => {
        console.log('tasks', tasks);
    }, [tasks])

    return (
        <div className="task-manager">
            {/* this adds a new task but the task will not be draggable or droppable */}
            {/* <div className="test" onClick={handleAddTask} style={{cursor: 'pointer'}} >add</div> */}
            <ListArea className="list-area" tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
            <PopupWindow setTasks={handleAddTask}/>
        </div>
    )
}

export default TaskManager