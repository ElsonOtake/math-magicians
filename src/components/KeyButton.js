import React, { Component } from 'react';
import PropTypes from 'prop-types';

class KeyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  keyClicked = (event) => {
    console.log(event.target.textContent);
  }

  render() {
    const { keyValue } = this.props;
    return (
      <button type="button" onClick={this.keyClicked}>
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
