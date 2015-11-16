var axios = require('axios');
var React = require('react');

var connect = require('react-redux').connect;

var spendingActions = require('../actions/spendingActions');

var AddNewSpendingForm = require('./AddNewSpendingForm');
var SpendingItem = require('./SpendingItem');

var Spending = React.createClass({
  propTypes: {
    isLoading: React.PropTypes.bool,
    spending: React.PropTypes.array, // Better to specify the type too
  },

  handleSubmit: function(formData) {
    var self = this;
    var newSpendingItem = {amountCents: formData.amountCents, category: formData.category};
    this.props.addSpendingItem(newSpendingItem);
  },

  render: function() {
    return (
      <div className="spending-screen">
        {this.props.isLoading && <div className='overlay'>Loading...</div>}
        <h1 className="spending-screen__title">Spending</h1>
        <AddNewSpendingForm onSubmit={this.handleSubmit} />
        <div className="spending-screen__items">
          {this.props.spending.map(function(item, idx) {
            return (
              <SpendingItem key={idx} amountCents={item.amountCents} category={item.category} />
            );
          })}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    isLoading: state.spending.isLoading,
    spending: state.spending.spending,
  };
}

var actions = {
  addSpendingItem: spendingActions.addSpendingItem,
}

module.exports = connect(mapStateToProps, actions)(Spending);
