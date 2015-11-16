var axios = require('axios');
var React = require('react');

var AddNewSpendingForm = require('./AddNewSpendingForm');
var SpendingItem = require('./SpendingItem');

var Categories = React.createClass({
  propTypes: {
    isLoading: React.PropTypes.bool,
    categories: React.PropTypes.array, // Better to specify the type too
  },
  render: function() {
    return (
      <div className="categories-screen">
        <h1 className="categories-screen__title">Categories</h1>
        <div>Put a way to create categories here.</div>
      </div>
    );
  }
});

module.exports = Categories;
