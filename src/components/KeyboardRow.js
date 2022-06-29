import React from 'react';
import PropTypes from 'prop-types';

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
        <td>{col1}</td>
        <td>{col2}</td>
        <td>{col3}</td>
        <td className="orange">{col4}</td>
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
