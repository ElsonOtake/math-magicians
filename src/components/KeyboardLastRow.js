import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardLastRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      col1, col2, col3,
    } = this.props;
    return (
      <tr>
        <td colSpan="2"><KeyButton keyValue={col1} /></td>
        <td><KeyButton keyValue={col2} /></td>
        <td className="orange"><KeyButton keyValue={col3} /></td>
      </tr>
    );
  }
}

KeyboardLastRow.defaultProps = {
  col1: '',
  col2: '',
  col3: '',
};

KeyboardLastRow.propTypes = {
  col1: PropTypes.string,
  col2: PropTypes.string,
  col3: PropTypes.string,
};

export default KeyboardLastRow;
