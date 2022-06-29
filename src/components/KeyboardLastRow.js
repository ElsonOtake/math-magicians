import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardLastRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td colSpan="2"><KeyButton keyValue={data[0]} /></td>
        <td><KeyButton keyValue={data[1]} /></td>
        <td className="orange"><KeyButton keyValue={data[2]} /></td>
      </tr>
    );
  }
}

KeyboardLastRow.defaultProps = {
  data: [],
};

KeyboardLastRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

export default KeyboardLastRow;
