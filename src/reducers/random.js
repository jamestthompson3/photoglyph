const randomReducer = function(state=[],action) {
  switch (action.type) {
    case 'RANDOM_LIST':
      return action.list
  }
  return state;
}
export default randomReducer
