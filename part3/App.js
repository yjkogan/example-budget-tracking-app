var axios = require('axios');
var React = require('react');

var AddNewSpendingForm = require('./AddNewSpendingForm');
var SpendingItem = require('./SpendingItem');

var App = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false,
      spending: [],
    };
  },

  componentWillMount: function() {
    var self = this;
    /* This is an example AJAX request. We're tapping into a React lifecycle
     * method to fetch any items that exist on the server with we first load up.
     */
    axios.get('//localhost:3002/items')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.data;
      })
      .then(function(result) {
        // Use the result to update the component's state
        // Note that if you want to access tho class, you need to use `self` here
        // because of weird javascript scoping of the keywoard `this`
      });
  },

  handleSubmit: function(formData) {
    var self = this;
    var newSpendingItem = {amountCents: formData.amountCents, category: formData.category};
    // Do an axios.post here.
    // Check out the example at this link: https://github.com/mzabriskie/axios#example
  },

  render: function() {
    return (
      <div className="spending-screen">
        {/* Using `&&` inside javascript here conditionally shows/hides the following div because of "short circuiting". */}
        {this.state.isLoading && <div className='overlay'>Loading...</div>}
        <h1 className="spending-screen__title">Spending</h1>
        <AddNewSpendingForm onSubmit={this.handleSubmit} />
        <div className="spending-screen__items">
          {this.state.spending.map(function(item) {
            return (
              <SpendingItem key={item.id} amountCents={item.amountCents} category={item.category} />
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = App;
