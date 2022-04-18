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

const ListArea = ({tasks, setTasks, deleteTask}) => {
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
        const newTask = tasks.map(task => {
            if (task.key === checked.key) 
                task.complete = !task.complete;
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
                    style={{ border: "1px solid #fff", borderRadius: "5px", width: "100%" }}
                >
                    {tasks && tasks.map((item, index) =>
                        <Draggable draggableId={item.key} key={item.key} index={index}>
                            {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <Task key={item.key} task={item}  onMarked={handleChecked} deleteTask={deleteTask} />
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