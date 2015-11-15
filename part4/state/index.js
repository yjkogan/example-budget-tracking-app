import { combineReducers } from 'redux';

import categories from './categories';
import spending from './spending';

module.exports = combineReducers({
  categories: categories,
  spending: spending,
});
