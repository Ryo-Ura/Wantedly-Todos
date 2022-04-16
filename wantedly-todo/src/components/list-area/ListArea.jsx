import './listArea.scss';
import Task from '../task-list/task/Task';
import React from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const ListArea = () => {
    const generateID = () => Math.random().toString(36).substring(5);
    
    const [tasks, setTasks] = React.useState([
        {key: generateID(), name: 'Task 1', dueDate: '2020-01-01', complete: false},
        {key: generateID(), name: 'Task 2', dueDate: '2020-02-03', complete: false},
        {key: generateID(), name: 'Task 3', dueDate: '2020-05-05', complete: true},
        {key: generateID(), name: 'Task 4', dueDate: '2020-05-05', complete: true},
    ])
    const onDragEnd = (result) => {
        if (!result.destination) 
            return;
        if (result.destination.index === result.source.index) 
            return;
        const projects = reorder(tasks,result.source.index, result.destination.index);
        //store reordered state.
        setTasks(projects)
    }
    const handleChecked = (checked) => {
        // console.log('clicked')
        const newTask = tasks.map(task => {

            if (task.key === checked.key) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTasks(newTask);
    }

    return (
        <div className="container">

            <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                <div
                    className='panel'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{ border: "1px solid #242424", borderRadius: "5px" }}
                >
                    {tasks && tasks.map((item, index) =>
                        <Draggable draggableId={item.key} key={item.key} index={index}>
                            {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Task key={item.key} task={item}  onMarked={handleChecked}/>
                            </div>
                            )}
                        </Draggable>)}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
            </DragDropContext>
        </div>
    )
}
export default ListArea