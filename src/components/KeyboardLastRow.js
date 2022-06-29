import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardLastRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleStateChange(e) {
    const { handleStateChange } = this.props;
    const { value } = e.target;
    handleStateChange(value);
  }

  render() {
    const { data, calc } = this.props;
    return (
      <tr>
        <td colSpan="2">
          <KeyButton handleStateChange={this.handleStateChange} calc={calc} keyValue={data[0]} />
        </td>
        <td>
          <KeyButton handleStateChange={this.handleStateChange} calc={calc} keyValue={data[1]} />
        </td>
        <td className="orange">
          <KeyButton handleStateChange={this.handleStateChange} calc={calc} keyValue={data[2]} />
        </td>
      </tr>
    );
  }
}

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
