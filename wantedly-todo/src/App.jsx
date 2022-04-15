import './app.scss';
import React from 'react';
import Popup from './components/form/popup-window/Popup.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wantedly Todo</h1>
        <Popup></Popup>
      </header>
    </div>
  );
}

export default App;
