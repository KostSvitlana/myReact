import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== '-' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export class Square extends Component {
  render() {
    return (
      <td>
      <button onClick={() => this.props.onClick()}> {this.props.value} </button>
      </td>
    )
  }
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill('-'),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i] !== '-') {
      return;
    }
    squares[i] =  this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
  return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <React.Fragment>
        <p> {status} </p>
        <table>
          <tr>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </tr>
          <tr>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </tr>
          <tr>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </tr>
        </table>
      </React.Fragment>
    )
  }
}
class App extends Component {
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
        <Table/>
      </div>
    );
  }
}

export default App;