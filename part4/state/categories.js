const initialState = {
  isLoading: false,
  categories: []
};

export default function categories(state = initialState, action) {
  const {type, payload} = action;
  switch(type) {
    default:
      return state;
  }
}