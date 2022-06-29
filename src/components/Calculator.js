import React from 'react';
import './Calculator.css';
import KeyboardRow from './KeyboardRow';
// import KeyboardLastRow from './KeyboardLastRow';
import KeyButton from './KeyButton';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      calc: {
        total: 0,
        next: null,
        operation: null,
      },
    };
  }

  handleStateChange() {
    const { calc } = this.state;
    this.setState(() => ({ ...calc }));
  }

  render() {
    const { calc } = this.state;
    const { total } = calc;
    return (
      <table>
        <thead>
          <tr>
            <th className="total" colSpan="4">{total}</th>
          </tr>
        </thead>
        <tbody>
          <KeyboardRow data={['AC', '+/-', '%', '÷']} />
          <KeyboardRow data={['7', '8', '9', 'x']} />
          <KeyboardRow data={['4', '5', '6', '-']} />
          <KeyboardRow data={['1', '2', '3', '+']} />
          {/* <KeyboardLastRow data={['0', '.', '=']} /> */}
          <tr>
            <td colSpan="2"><KeyButton handleStateChange={this.handleStateChange} keyValue="0" /></td>
            <td><KeyButton handleStateChange={this.handleStateChange} keyValue="." /></td>
            <td className="orange"><KeyButton handleStateChange={this.handleStateChange} keyValue="=" /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
