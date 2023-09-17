import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Card from './Components/Card/Card';

class App extends React.Component {

  constructor() {
    super()
  }
  render() {
  return (
    <div className="App">
        <Card />
    </div>
  );
}
}

export default App;
