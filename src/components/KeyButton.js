import React, { Component } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

class KeyButton extends Component {
  constructor(props) {
    super(props);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleStateChange(e) {
    const { handleStateChange } = this.props;
    const { value } = e.target;
    handleStateChange(value);
  }

  render() {
    const {
      keyValue, calc,
    } = this.props;
    return (
      <button
        type="button"
        onClick={(event) => {
          this.handleStateChange(calculate({ calc }, event.target.textContent));
        }}
      >
        {keyValue}
      </button>
    );
  }
}

KeyButton.defaultProps = {
  keyValue: '',
  handleStateChange: () => {},
  calc: {},
};

KeyButton.propTypes = {
  keyValue: PropTypes.string,
  handleStateChange: PropTypes.func,
  calc: PropTypes.objectOf(PropTypes.string),
};

export default KeyButton;
