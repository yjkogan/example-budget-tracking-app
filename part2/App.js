var React = require('react');

var AddNewSpendingForm = require('./AddNewSpendingForm');
var SpendingItem = require('./SpendingItem');

var App = React.createClass({
  getInitialState: function() {
    return {
      spending: [],
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    alert('Form submitted but nothing happened');
  },

  render: function() {
    return (
      <div className="spending-screen">
        <h1 className="spending-screen__title">Spending</h1>
        <AddNewSpendingForm onSubmit={this.handleSubmit} />
        <div className="spending-screen__items">
          {this.state.spending.map(function(item, idx) {
            return (
              <SpendingItem key={idx} amountCents={item.amountCents} category={item.category} />
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = App;
