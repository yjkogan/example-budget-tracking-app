var React = require('react');

var AddNewSpendingForm = React.createClass({
  getInitialState: function() {
    return {
      amountCents: 0,
      category: '',
    };
  },

  isValid: function(state) {
    if (!state.category) {
      return 'Please select a category';
    }
    return null;
  },

  handleInputChanged: function(event) {
    var stateUpdate = {};
    stateUpdate[event.target.name] = event.target.value;
    this.setState(stateUpdate);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var validationError = this.isValid(this.state);
    if (validationError) {
      alert(validationError);
      return;
    }
    this.props.onSubmit(this.state);
  },

  render: function() {
    var self = this;
    var categories = [
      {value: '', text: 'None'},
      {value: 'Food', text: 'Food'},
      {value: 'Home', text: 'Home'},
    ];
    return (
      <form className='form add-spending-form' onSubmit={this.handleSubmit}>
        <div className='input-group'>
          <div>Amount (Cents):</div>
          <input type="number" name='amountCents' value={this.state.amountCents} onChange={this.handleInputChanged} />
        </div>
        <div className='input-group'>
          <div>Category:</div>
          <select value={this.state.category} name='category' onChange={this.handleInputChanged}>
            {categories.map(function(category) {
              return (
                <option key={category.value} value={category.value}>{category.text}</option>
              );
            })}
          </select>
        </div>
        <button className='submit-btn' type="submit">Add</button>
      </form>
    );
  }
});

module.exports = AddNewSpendingForm;