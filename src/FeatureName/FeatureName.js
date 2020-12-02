import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './FeatureName.css';

class FeatureName extends Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureHash}>
      <legend className="feature__name">
        <h3>{this.props.feature}</h3>
      </legend>
        {this.props.options}
      </fieldset>
    )
  }
}

export default FeatureName;