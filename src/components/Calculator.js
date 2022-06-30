import React from 'react';
import './Calculator.css';
import KeyboardRow from './KeyboardRow';
import KeyboardLastRow from './KeyboardLastRow';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.state = {
      calc: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  handleStateChange(newCalc) {
    const calcState = { calc: newCalc };
    this.setState(calcState);
  }

  render() {
    const { calc } = this.state;
    const { next, total } = calc;
    return (
      <table>
        <thead>
          <tr>
            <th className="total" colSpan="4">{ next || total }</th>
          </tr>
        </thead>
        <tbody>
          <KeyboardRow handleStateChange={this.handleStateChange} calc={calc} data={['AC', '+/-', '%', '÷']} />
          <KeyboardRow handleStateChange={this.handleStateChange} calc={calc} data={['7', '8', '9', 'x']} />
          <KeyboardRow handleStateChange={this.handleStateChange} calc={calc} data={['4', '5', '6', '-']} />
          <KeyboardRow handleStateChange={this.handleStateChange} calc={calc} data={['1', '2', '3', '+']} />
          <KeyboardLastRow handleStateChange={this.handleStateChange} calc={calc} data={['0', '.', '=']} />
        </tbody>
      </table>
    );
  }
}

export default Calculator;
