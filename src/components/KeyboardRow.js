import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

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

export default KeyboardRow;
