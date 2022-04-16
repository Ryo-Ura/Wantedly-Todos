// import React from 'react'
// import './listArea.scss';
import Task from '../task-list/task/Task';
// function ListArea() {
//     const generateID = () => Math.random().toString(36).substring(5);
    // const handleChecked = (checked) => {
    //     const newTask = tasks.map(task => {
    //         if (task.id === checked.id) {
    //             task.complete = !task.complete;
    //         }
    //         return task;
    //         });
    //         setTasks(newTask);
    // }
//     const [tasks, setTasks] = React.useState([
//         {id: generateID(), name: 'Task 1', dueDate: '2020-01-01', complete: false},
//         {id: generateID(), name: 'Task 2', dueDate: '2020-02-03', complete: false},
//         {id: generateID(), name: 'Task 3', dueDate: '2020-05-05', complete: true},
//         {id: generateID(), name: 'Task 4', dueDate: '2020-05-05', complete: true},
//     ])
//     return (
//         <div className="panel">
//             <div className="panel-heading">
//                 ⚛️ React ToDo
//             </div>
            // {tasks.map(task => (
            //     <Task key={task.id}
            //         task={task} 
            //         onMarked={handleChecked}
            //     />
            // ))}
//             <div className="panel-block">
//                 {tasks.length} tasks
//             </div>
//         </div>
//     );
// }

// export default ListArea


import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const ListArea = ({tasks}) => {
    const [project, setProject] = useState(tasks)
    const onDragEnd = (result) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index) return;
            const projects = reorder(project,result.source.index, result.destination.index);
        //store reordered state.
        setProject(projects)
    }
    const handleChecked = (checked) => {
        const newTask = tasks.map(project => {
            if (project.id === checked.id) {
                project.complete = !project.complete;
            }
            return project;
            });
            setProject(newTask);
    }
    return (

        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
            {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ border: "1px solid #242424", borderRadius: "5px" }}
            >
                {project && project.map((item, index) =>
                    <Draggable draggableId={item.key} key={item.key} index={index}>
                        {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <p style={{ color: "white"}}>
                            
                                <Task key={item.id}
                                task={item} 
                                onMarked={handleChecked}
                                />
                            
                            </p>
                        </div>
                        )}
                    </Draggable>)}
                {provided.placeholder}
            </div>
            )}
        </Droppable>
        </DragDropContext>
    )
}
export default ListArea