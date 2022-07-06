import React, { useState, createContext, useContext } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const UserContext = createContext();

const Calculator = () => {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleStateChange = (newCalc) => setCalc(newCalc);

  const { total, next, operation } = calc;
  return (
    <UserContext.Provider value={calc}>
      <section className="calculator">
        <h2>Let&apos;s do some math!</h2>
        <table>
          <thead>
            <tr>
              <th className="total" colSpan="4">{ next || operation || total || 0 }</th>
            </tr>
          </thead>
          <tbody>
            <KeyboardRow handleStateChange={handleStateChange} data={['AC', '+/-', '%', '÷']} />
            <KeyboardRow handleStateChange={handleStateChange} data={['7', '8', '9', 'x']} />
            <KeyboardRow handleStateChange={handleStateChange} data={['4', '5', '6', '-']} />
            <KeyboardRow handleStateChange={handleStateChange} data={['1', '2', '3', '+']} />
            <KeyboardRow handleStateChange={handleStateChange} data={['0', '.', '=']} />
          </tbody>
        </table>
      </section>
    </UserContext.Provider>

  );
};

const KeyboardRow = ({ handleStateChange, data }) => {
  if (data.length === 4) {
    return (
      <tr>
        <td>
          <KeyButton handleStateChange={handleStateChange} keyValue={data[0]} />
        </td>
        <td>
          <KeyButton handleStateChange={handleStateChange} keyValue={data[1]} />
        </td>
        <td>
          <KeyButton handleStateChange={handleStateChange} keyValue={data[2]} />
        </td>
        <td className="orange">
          <KeyButton handleStateChange={handleStateChange} keyValue={data[3]} />
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td colSpan="2">
        <KeyButton handleStateChange={handleStateChange} keyValue={data[0]} />
      </td>
      <td>
        <KeyButton handleStateChange={handleStateChange} keyValue={data[1]} />
      </td>
      <td className="orange">
        <KeyButton handleStateChange={handleStateChange} keyValue={data[2]} />
      </td>
    </tr>
  );
};

KeyboardRow.defaultProps = {
  data: [],
  handleStateChange: () => {},
};

KeyboardRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  handleStateChange: PropTypes.func,
};

const KeyButton = ({ keyValue, handleStateChange }) => {
  const calc = useContext(UserContext);
  return (
    <button
      type="button"
      onClick={(event) => {
        handleStateChange(calculate(calc, event.target.textContent));
      }}
    >
      {keyValue}
    </button>
  );
};

KeyButton.defaultProps = {
  keyValue: '',
  handleStateChange: () => {},
};

KeyButton.propTypes = {
  keyValue: PropTypes.string,
  handleStateChange: PropTypes.func,
};

export default Calculator;
