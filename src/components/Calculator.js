import React from 'react';
import './Calculator.css';
import KeyboardRow from './KeyboardRow';
import KeyboardLastRow from './KeyboardLastRow';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className="total" colSpan="4">0</th>
          </tr>
        </thead>
        <tbody>
          <KeyboardRow col1="AC" col2="±" col3="%" col4="÷" />
          <KeyboardRow col1="7" col2="8" col3="9" col4="x" />
          <KeyboardRow col1="4" col2="5" col3="6" col4="-" />
          <KeyboardRow col1="1" col2="2" col3="3" col4="+" />
          <KeyboardLastRow col1="0" col2="•" col3="=" />
          {/* <tr>
            <td colSpan="2">0</td>
            <td>•</td>
            <td className="orange">=</td>
          </tr> */}
        </tbody>
      </table>
    );
  }
}

export default Calculator;
