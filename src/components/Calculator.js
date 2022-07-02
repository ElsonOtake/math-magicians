import React, { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

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

const KeyboardRow = ({ handleStateChange, data, calc }) => (
  <tr>
    <td>
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[0]} />
    </td>
    <td>
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[1]} />
    </td>
    <td>
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[2]} />
    </td>
    <td className="orange">
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[3]} />
    </td>
  </tr>
);

KeyboardRow.defaultProps = {
  data: [],
  handleStateChange: () => {},
  calc: {},
};

KeyboardRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleStateChange: PropTypes.func,
  calc: PropTypes.objectOf(PropTypes.string),
};

const KeyboardLastRow = ({ handleStateChange, data, calc }) => (
  <tr>
    <td colSpan="2">
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[0]} />
    </td>
    <td>
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[1]} />
    </td>
    <td className="orange">
      <KeyButton handleStateChange={handleStateChange} calc={calc} keyValue={data[2]} />
    </td>
  </tr>
);

KeyboardLastRow.defaultProps = {
  data: [],
  handleStateChange: () => {},
  calc: {},
};

KeyboardLastRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleStateChange: PropTypes.func,
  calc: PropTypes.objectOf(PropTypes.string),
};

const KeyButton = ({ keyValue, handleStateChange, calc }) => (
  <button
    type="button"
    onClick={(event) => {
      handleStateChange(calculate(calc, event.target.textContent));
    }}
  >
    {keyValue}
  </button>
);

KeyButton.defaultProps = {
  keyValue: '',
  handleStateChange: () => {},
  calc: {},
};

KeyButton.propTypes = {
  keyValue: PropTypes.string,
  handleStateChange: PropTypes.func,
  calc: PropTypes.objectOf(PropTypes.string),
};

export default Calculator;
