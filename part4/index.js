require('../main.scss');
var React = require('react');
var ReactDOM = require('react-dom');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var thunkMiddleware = require('redux-thunk');
var Redux = require('redux');
var compose = Redux.compose;
var applyMiddleware = Redux.applyMiddleware;
var createStore = Redux.createStore;
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Provider = require('react-redux').Provider

var App = require('./App');
var Categories = require('./components/Categories');
var Spending = require('./components/Spending');

var appReducer = require('./state');

var store = compose(
  applyMiddleware(
    thunkMiddleware,
  ),
)(createStore)(appReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Spending} />
        <Route path="/categories" component={Categories} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
