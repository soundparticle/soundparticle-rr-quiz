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
    selectedColor: PropTypes.array
  };
  // componentDidMount() {
  //   this.props.load();
  // }

  handleSubmit = () => {
    const { on } = this.props;
    this.props.handleSubmit({ on: true });
    
  }
  render() {
    const { selectedColor } = this.state;

    return (
      <div>
        <button onCLick={this.handleSubmit}></button>

      </div>
    );
  }

}

export default connect(
  state => ({
    on: selectedColor(state)
  }),

)