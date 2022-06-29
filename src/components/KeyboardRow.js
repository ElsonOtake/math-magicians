import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td><KeyButton keyValue={data[0]} /></td>
        <td><KeyButton keyValue={data[1]} /></td>
        <td><KeyButton keyValue={data[2]} /></td>
        <td className="orange"><KeyButton keyValue={data[3]} /></td>
      </tr>
    );
  }
}

KeyboardRow.defaultProps = {
  data: [],
};

KeyboardRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default KeyboardRow;
