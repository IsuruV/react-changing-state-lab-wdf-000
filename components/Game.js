const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    })
  }


  handleClick (i, ev) {
    ev.preventDefault();
    const board = this.state.board;
    board.splice(i, 1, this.state.turn);
    const turn = this.state.turn === 'X' ? 'O' : 'X';
    this.setState({board: board, turn: turn});
  }

  getWinner () {
    const results = solutions.map(
  (solution) => solution.map((i) => this.state.board[i]).join('')
      );
      const row = results.find(
        (result) => result === 'XXX' || result === 'OOO'
      );
      return row && row[0];

  }

  isComplete () {
    var counter = 0;
    var bool = false;
    const board = this.state.board
    for( var i=0; i< board.length; i++){
      if(board[i]){
        counter++;
    }
  }
  if(counter == 9){
    bool = true;
  }else{
    bool = false;
  }
  return bool;
}

  render () {
    return (
      <div className ='game'>
        <Board board = {this.state.board} onClick = {this.handleClick}/>
        {this.isComplete() ?  <Status winner={this.getWinner()} /> : '' }
        <button className= 'game__reset' onClick = {this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
