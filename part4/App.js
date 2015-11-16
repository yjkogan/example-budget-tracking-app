var axios = require('axios');
var React = require('react');
var connect = require('react-redux').connect;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var categoryActions = require('./actions/categoryActions');
var spendingActions = require('./actions/spendingActions');

var App = React.createClass({
  componentWillMount: function() {
    this.props.getSpendingItems();
    this.props.getCategories();
  },

  render: function() {
    return (
      <div className="main-app">
        <ul className="nav-bar">
          <li className="nav-item"><Link to="/">Spending</Link></li>
          <li className="nav-item"><Link to="/categories">Categories</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
  };
}

var actions = {
  getCategories: categoryActions.getCategories,
  getSpendingItems: spendingActions.getSpendingItems,
}

module.exports = connect(mapStateToProps, actions)(App);
