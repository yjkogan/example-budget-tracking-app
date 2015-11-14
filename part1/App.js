var React = require('react');

var SpendingItem = require('./SpendingItem');

var App = React.createClass({
  getInitialState: function() {
    return {
      // This is just dummy data
      spending: [
        {id: 1, amountCents: 1000, category: 'Food'},
        {id: 2, amountCents: 2000, category: 'Food'},
        {id: 3, amountCents: 10000, category: 'Gifts & Charity'},
        {id: 4, amountCents: 500, category: 'Home'},
      ],
    };
  },

  render: function() {
    return (
      <div className="spending-screen">
        <h1 className="spending-screen__title">Spending</h1>
        <div className="spending-screen__items">
          {/* We'll need to change this to show a spending item
            * for each item in our "spending" state.
            */}
          <SpendingItem />
        </div>
      </div>
    );
  }
});

module.exports = App;
