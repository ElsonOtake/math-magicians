import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { keyValue } = this.props;
    return (
      <button type="button">
        {keyValue}
      </button>
    );
  }
}

KeyButton.defaultProps = {
  keyValue: '',
};

KeyButton.propTypes = {
  keyValue: PropTypes.string,
};

export default KeyButton;
