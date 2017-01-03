const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className = 'board'>
      { this.props.board.map((val, i) =>
             <Field key={i} player={val} onClick={this.props.onClick.bind(val,i)} />
           )
       }
      </div>
    );
  }
}

module.exports = Board;
