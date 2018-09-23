import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export class RainbowLightBulb extends Component {

  state = {
    editing: false,
    // selectedColor: false,
    on: true
  };

  static propTypes = {
    selectedColor: PropTypes.array,
    color: PropTypes.array
  };
  
  // componentDidMount() {
  //   this.props.load();
  // }

  handleComplete = color => {
    const { selectedColor } = this.props;
    selectedColor(color);
    this.handleEndEdit();
  };


  // handleSubmit = () => {
  //   const { on } = this.props;
  //   this.props.handleSubmit({ on: true });
    
  // };
  render() {
    
    const { editing } = this.state;
    const { selectedColor } = this.state;

    return (
      <div>
        <button onCLick={this.handleSubmit}></button>

      </div>
    );
  }

}

export default connect(
  state => (
  null,
  
  { selectedColor }

)(RainbowLightBulb);