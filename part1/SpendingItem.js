var React = require('react');

/*
 * This is a new kind of react component that's "stateless".
 * Since the logic needed to display it is very simple, all we need
 * is a function that takes the components properties ("props") and
 * returns an JSX element.
 *
 * We'll be modifying this to display each "spending" that we've added.
 */
var SpendingItem = function(props) {
  return (
    <div>Put content here</div>
  );
};

module.exports = SpendingItem;
