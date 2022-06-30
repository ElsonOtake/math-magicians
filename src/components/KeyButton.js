import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

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

export default KeyButton;
