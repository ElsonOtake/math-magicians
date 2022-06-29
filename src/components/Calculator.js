import React from 'react';
import './Calculator.css';
import KeyboardRow from './KeyboardRow';
import KeyboardLastRow from './KeyboardLastRow';
// import KeyButton from './KeyButton';
// import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.calculate = this.calculate.bind(this);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <KeyButton calculate={this.calculate} /> */}
        <table>
          <thead>
            <tr>
              <th className="total" colSpan="4">0</th>
            </tr>
          </thead>
          <tbody>
            <KeyboardRow data={['AC', '+/-', '%', '÷']} />
            <KeyboardRow data={['7', '8', '9', 'x']} />
            <KeyboardRow data={['4', '5', '6', '-']} />
            <KeyboardRow data={['1', '2', '3', '+']} />
            <KeyboardLastRow data={['0', '.', '=']} />
          </tbody>
        </table>
      </>
    );
  }
}

export default Calculator;
