import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal.js';
import './MainSummary.css';

class MainSummary extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption 
          selected={this.props.selected}
          currencyFormat={this.props.currencyFormat}
        />
        <SummaryTotal
          selected={this.props.selected}
          currencyFormat={this.props.currencyFormat}
        />
      </section> 
    );
  }
}
  
export default MainSummary;