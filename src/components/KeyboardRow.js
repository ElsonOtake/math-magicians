import React from 'react';
import PropTypes from 'prop-types';
import KeyButton from './KeyButton';

class KeyboardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      col1, col2, col3, col4,
    } = this.props;
    return (
      <tr>
        <td><KeyButton keyValue={col1} /></td>
        <td><KeyButton keyValue={col2} /></td>
        <td><KeyButton keyValue={col3} /></td>
        <td className="orange"><KeyButton keyValue={col4} /></td>
      </tr>
    );
  }
}

KeyboardRow.defaultProps = {
  col1: '',
  col2: '',
  col3: '',
  col4: '',
};

KeyboardRow.propTypes = {
  col1: PropTypes.string,
  col2: PropTypes.string,
  col3: PropTypes.string,
  col4: PropTypes.string,
};

export default KeyboardRow;
