import React from "react";
import PropTypes from "prop-types";

class NumberInput extends React.Component {
  onChange = (event) => {
    const value = event.target.value;
    this.props.onChange(parseFloat(value));
  }

  render() {
    return (<div className="form-group">
      <label>{this.props.label}</label>
      <input
        type="number"
        className={this.props.className || "form-control"}
        id={this.props.id}
        value={this.props.value}
        onChange={this.onChange}
        required
        min={this.props.min}
        step={this.props.step}
      />
  </div>);
  }
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  min: PropTypes.string,
  step: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
export default NumberInput;