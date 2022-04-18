import React from 'react'
import ListArea from '../list-area/ListArea';
import PopupWindow from '../popup/popup-window/PopupWindow';
import Filter from '../filter/Filter';
import './taskManager.scss'

function TaskManager() {
    const generateID = () => Math.random().toString(36).substring(5);
    const [tasks, setTasks] = React.useState([
        {key: generateID(), name: 'Task 1', dueDate: '2020/01/01', complete: false},
        {key: generateID(), name: 'Task 2', dueDate: '2020/02/03', complete: false},
        {key: generateID(), name: 'Task 3', dueDate: '2020/05/05', complete: true},
        {key: generateID(), name: 'Task 4', dueDate: '2020/11/05', complete: true},
    ])

    const [filter, setFilter] = React.useState('ALL');
    const handleFilterChange = value => setFilter(value);
    const showTasks = tasks.filter(task =>  {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !task.complete;
        if (filter === 'DONE') return task.complete;
        return null;
    });

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

    const handleEditTask =(name, date, task) => {
        task.name = name;
        task.dueDate = date;
    }

    React.useEffect(() => {
        console.log('tasks', tasks);
    }, [tasks])

    return (
        <div className="task-manager">
            <Filter
                filter={filter}
                onChange={handleFilterChange}
            />
            <PopupWindow setTasks={handleAddTask} />
            <ListArea className="list-area" 
                tasks={tasks} 
                setTasks={setTasks} 
                deleteTask={deleteTask}
                showTasks={showTasks} 
                handleEditTask={handleEditTask}
            />
        </div>
    )
}

export default TaskManager