import logo from '../logo.svg';
import React, { Component } from 'react';
import './App.css';

class Welcome extends Component {
  buttonHendler = () => {
    alert("Good boy")
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
          Hello, {this.props.name}.
        </p>
        <button onClick={this.buttonHendler}> Push me </button>
      </div>
    )
  }
}

export default Welcome;
