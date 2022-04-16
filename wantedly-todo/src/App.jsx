import './app.scss';
import React from 'react';
import PopupWindow from './components/popup/popup-window/PopupWindow';
// import ListArea from './components/list-area/ListArea';
import Tasks from './components/task-list/tasks/Tasks';
function App() {
    return (
    <div className="App">
        <header className="App-header">
        <h1>Wantedly Todo</h1>
        <Tasks/>
        <PopupWindow/>
        </header>
    </div>
    );
}

export default App;