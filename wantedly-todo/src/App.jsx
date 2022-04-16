import './app.scss';
import React from 'react';
import PopupWindow from './components/popup/popup-window/PopupWindow';
import ListArea from './components/list-area/ListArea';
function App() {
    return (
    <div className="App">
        <header className="App-header">
        <h1>Wantedly Todo</h1>
        <ListArea/>
        <PopupWindow/>
        </header>
    </div>
    );
}

export default App;