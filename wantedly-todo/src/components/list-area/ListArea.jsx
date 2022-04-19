import './listArea.scss';
import Task from '../task-list/task/Task';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//TODO: since "react-beautiful-dnd" doesn't support matrix, use "react-dnd"

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const ListArea = ({tasks, setTasks, deleteTask, showTasks, handleEditTask}) => {
    const onDragEnd = (result) => {
        if (!result.destination) 
            return;
        if (result.destination.index === result.source.index) 
            return;
        const projects = reorder(tasks,result.source.index, result.destination.index);
        setTasks(projects)
    }
    const handleChecked = (checked) => {
        const newTask = tasks.map(task => {
            if (task.key === checked.key) 
                task.complete = !task.complete;
            return task;
        });
        setTasks(newTask);
    }

    return (
        <div className="listarea-container">
            <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                <div
                    className='listarea-panel'
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {tasks && showTasks.map((item, index) =>
                        <Draggable draggableId={item.key} key={item.key} index={index}>
                            {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="listarea-task">
                                
                                <Task 
                                    task={item}  
                                    onMarked={handleChecked} 
                                    deleteTask={deleteTask} 
                                    handleEditTask={handleEditTask}
                                />
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