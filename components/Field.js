const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    return (
      <button className = 'field' disabled = {!!this.props.player} onClick={this.props.onClick}>
        {this.props.player}
      </button>
    );
  }
}

module.exports = Field;
