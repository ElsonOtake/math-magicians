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
    // this.props.handleStateChange(e.target.value);
  }

  render() {
    const {
      keyValue, total, next, operation,
    } = this.props;
    console.log(total);
    return (
      <button
        type="button"
        onClick={(event) => {
          const totalProps = total;
          const nextProps = next;
          const operationProps = operation;
          calculate({ totalProps, nextProps, operationProps }, event.target.textContent);
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
  total: '',
  next: '',
  operation: '',
};

KeyButton.propTypes = {
  keyValue: PropTypes.string,
  handleStateChange: PropTypes.func,
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default KeyButton;
