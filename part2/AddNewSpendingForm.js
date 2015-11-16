var React = require('react');

var AddNewSpendingForm = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      amountCents: 0,
      category: '',
    };
  },

  render: function() {
    return (
      <form className='form add-spending-form' onSubmit={this.props.onSubmit}>
        <div className='input-group'>
          <div>Amount (in Cents):</div>
          <input type="number" name='amountCents' value={this.state.amountCents} />
        </div>
        <div className='input-group'>
          <div>Category:</div>
          <select  name='category' value={this.state.category}>
            <option value=''>None</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <button className='submit-btn' type="submit">Add</button>
      </form>
    );
  }
});

module.exports = AddNewSpendingForm;