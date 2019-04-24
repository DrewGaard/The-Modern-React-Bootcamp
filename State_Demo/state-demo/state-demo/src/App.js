import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import './App.css';
import Button from './Button';
import BrokenClick from './BrokenClick';
import Click from './Click';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Rando maxNum={7}/>
        <Button />
        <BrokenClick />
        <Click />
      </div>
    );
  }
}

export default App;
