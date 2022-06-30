import React, { useState } from 'react';
import './Calculator.css';
import KeyboardRow from './KeyboardRow';
import KeyboardLastRow from './KeyboardLastRow';

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleStateChange = (newCalc) => setCalc(newCalc);

  const { next, total, operation } = calc;
  return (
    <table>
      <thead>
        <tr>
          <th className="total" colSpan="4">{ next || operation || total || 0 }</th>
        </tr>
      </thead>
      <tbody>
        <KeyboardRow handleStateChange={handleStateChange} calc={calc} data={['AC', '+/-', '%', '÷']} />
        <KeyboardRow handleStateChange={handleStateChange} calc={calc} data={['7', '8', '9', 'x']} />
        <KeyboardRow handleStateChange={handleStateChange} calc={calc} data={['4', '5', '6', '-']} />
        <KeyboardRow handleStateChange={handleStateChange} calc={calc} data={['1', '2', '3', '+']} />
        <KeyboardLastRow handleStateChange={handleStateChange} calc={calc} data={['0', '.', '=']} />
      </tbody>
    </table>
  );
};

export default Calculator;
