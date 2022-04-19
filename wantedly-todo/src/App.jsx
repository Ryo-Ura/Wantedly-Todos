import './app.scss';
import React from 'react';
import TaskManager from './components/taskManager/TaskManager';
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