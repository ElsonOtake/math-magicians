import React from 'react';
import './Calculator.css';

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
          <tr>
            <td>AC</td>
            <td>&plusmn;</td>
            <td>%</td>
            <td className="orange">&divide;</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className="orange">&times;</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className="orange">&minus;</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="orange">+</td>
          </tr>
          <tr>
            <td colSpan="2">0</td>
            <td>.</td>
            <td className="orange">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;
