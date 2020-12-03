import React, { Component } from 'react';
import FeatureName from '../FeatureName/FeatureName';
import './MainForm.css';

class MainForm extends Component {
  render() {      
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeatureName
          selected={this.props.selected}
          currentFeatures={this.props.currentFeatures}
          currencyFormat={this.props.currencyFormat}
          onUpdate={this.props.onUpdate}
        />
      </form>
    )
  }
}

export default MainForm;