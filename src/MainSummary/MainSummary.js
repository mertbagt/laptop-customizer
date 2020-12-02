import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import './MainSummary.css';

class MainSummary extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption 
          selected={this.props.selected}
          currencyFormat={this.props.currencyFormat}
        />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currencyFormat.format(total)}
          </div>
        </div>
      </section> 
    );
  }
}
  
export default MainSummary;