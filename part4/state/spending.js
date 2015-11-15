const initialState = {
  isLoading: false,
  spending:[]
};

export default function spending(state = initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case 'FETCHING_SPENDING_ITEMS':
    case 'ADD_SPENDING_ITEM': // Deliberate fallthrough
      return Object.assign({}, state, {isLoading: true});
    case 'FETCHING_SPENDING_ITEMS_DONE':
    case 'ADD_SPENDING_ITEM_DONE': // Deliberate fallthrough
      return {isLoading: false, spending: payload};
    default:
      return state;
  }
}