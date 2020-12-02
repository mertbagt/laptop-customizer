import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import FeatureItem from '../FeatureItem/FeatureItem';
import FeatureName from '../FeatureName/FeatureName';
import './MainForm.css';

class MainForm extends Component {
  render() {      
    const features = Object.keys(this.props.currentFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.currentFeatures[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem            
            key={itemHash}
            itemHash={itemHash}
            selected={this.props.selected}
            feature={feature}
            item={item}
            currencyFormat={this.props.currencyFormat}
            onUpdate={this.props.onUpdate}
          />
        );
      });
  
      return (
        <FeatureName 
          feature={feature}
          featureHash={featureHash}
          options={options}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default MainForm;