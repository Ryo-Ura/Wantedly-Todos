import './app.scss';
import React from 'react';
import PopupWindow from './components/popup/popup-window/PopupWindow';
import ListArea from './components/list-area/ListArea';
import TaskManager from './components/taskManager/TaskManager';
// import Tasks from './components/task-list/tasks/Tasks';
function App() {
    return (
    <div className="App">
        <header className="App-header">
        <h1>Wantedly Todo</h1>
        <TaskManager className="task-manager" />
        </header>
    </div>
    );
}

export default App;