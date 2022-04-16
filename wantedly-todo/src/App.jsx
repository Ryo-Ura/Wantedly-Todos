import './app.scss';
import React from 'react';
import PopupWindow from './components/popup/popup-window/PopupWindow';
import Task from './components/task-list/task/Task';
function App() {
    return (
    <div className="App">
        <header className="App-header">
        <h1>Wantedly Todo</h1>
        <Task/>
        <PopupWindow/>
        </header>
    </div>
    );
}

export default App;