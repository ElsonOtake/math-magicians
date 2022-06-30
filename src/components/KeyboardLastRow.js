import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

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

export default KeyboardLastRow;
