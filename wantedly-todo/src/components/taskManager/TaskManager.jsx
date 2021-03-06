import React from 'react'
import ListArea from '../list-area/ListArea';
import PopupWindow from '../popup/popup-window/PopupWindow';
import Filter from '../filter/Filter';
import Stat from '../stat/Stat';
import './taskManager.scss'

function TaskManager() {
    const generateID = () => Math.random().toString(36).substring(5);
    const [tasks, setTasks] = React.useState([
        {key: generateID(), name: 'Task 1', dueDate: '1/1/2022', complete: false},
        {key: generateID(), name: 'Task 2', dueDate: '4/14/2022', complete: false},
        {key: generateID(), name: 'Task 3', dueDate: '8/31/2022', complete: false},
        {key: generateID(), name: 'Task 4', dueDate: '3/11/2022', complete: false},
    ])

    const [filter, setFilter] = React.useState('ALL');
    const handleFilterChange = value => setFilter(value);
    const showTasks = tasks.filter(task =>  {
        if (filter === 'ALL') 
            return true;
        if (filter === 'TODO') 
            return !task.complete;
        if (filter === 'DONE') 
            return task.complete;
        return null;
    });
    
    React.useEffect(()=>{
        console.log('parents have changed');
    })
    
    const deleteTask = React.useCallback((key)=>{
        const newTask = tasks.filter(task => task.key !== key);
        setTasks(newTask);
    },[tasks])
    // const deleteTask = (key)=>{
    //     const newTask = tasks.filter(task => task.key !== key);
    //     setTasks(newTask);
    // }
    // const handleEditTask = (name, date, task) => {
    //     task.name = name;
    //     task.dueDate = date;
    // }
    const handleAddTask = React.useCallback((name, date) => {
        const newTask = {
            key: generateID(),
            name: name,
            dueDate: date,
            complete: false
        }
        setTasks([...tasks, newTask]);
    },[tasks])

    const handleEditTask =React.useCallback((name, date, task) => {
        task.name = name;
        task.dueDate = date;
    },[])

    const statMemo = React.useMemo(() => <Stat tasks={tasks} showTasks={showTasks} />, [tasks, showTasks]);
    const listAreaMemo = React.useMemo(() => <ListArea
                tasks={tasks} 
                setTasks={setTasks}
                showTasks={showTasks}
                deleteTask={deleteTask} 
                handleEditTask={handleEditTask} />, [tasks, showTasks, deleteTask, handleEditTask]
    );
    return (
        <div className="task-manager">
            <div className="left">
                {statMemo}
            </div>

            <div className="right">
                <Filter
                    filter={filter}
                    onChange={handleFilterChange}
                />
                <PopupWindow setTasks={handleAddTask} />
                <div className="list-area">
                    {listAreaMemo}
                </div>
            </div>
        </div>
    )
}

export default TaskManager