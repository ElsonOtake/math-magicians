import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardLastRow extends Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(calc) {
    const { handleStateChange } = this.props;
    handleStateChange(calc);
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
