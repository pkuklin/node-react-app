import React from 'react';
import './App.css';
import PhoneListContainer from './containers/phones/list/PhoneListContainer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Phones list</h1>
    </header>
    <div className="App-content">
      <div className="content">
        <PhoneListContainer />
      </div>
    </div>
  </div>
);

export default App;
