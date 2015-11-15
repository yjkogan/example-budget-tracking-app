var axios = require('axios');

const API_BASE = '//localhost:3002';

export function getSpendingItems() {
  return (dispatch) => {
    dispatch({type: 'FETCHING_SPENDING_ITEMS'});
    return axios.get(API_BASE + '/items')
      .then(function(response) {
        if (response.status >= 400) {
          dispatch({type: 'FETCHING_SPENDING_ITEMS_FAILED', payload: 'Bad response from server'});
        }
        dispatch({type: 'FETCHING_SPENDING_ITEMS_DONE', payload: response.data});
      })
  };
}

export function addSpendingItem(newItem) {
  return (dispatch) => {
    dispatch({type: 'ADD_SPENDING_ITEM'});
    axios.put(API_BASE + '/items', newItem)
      .then(function(response) {
        if (response.status >= 400) {
          dispatch({type: 'ADD_SPENDING_ITEM_FAILED', payload: 'Bad response from server'});
        }
        dispatch({type: 'ADD_SPENDING_ITEM_DONE', payload: response.data});
      })
  }
}
