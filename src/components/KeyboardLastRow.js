import React from 'react';
import PropTypes from 'prop-types';

class KeyboardLastRow extends React.Component {
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
        <td colSpan="2">{col1}</td>
        <td>{col2}</td>
        <td className="orange">{col3}</td>
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
