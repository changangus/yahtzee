import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    let checkScore = this.props.score === undefined;
    return (
      <tr className={`RuleRow RuleRow-${checkScore ? 'active' : 'disabled'}`} onClick={ checkScore ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{ this.props.score !== undefined ? this.props.score : this.props.description}</td>
      </tr>
    )
  }
}

export default RuleRow;