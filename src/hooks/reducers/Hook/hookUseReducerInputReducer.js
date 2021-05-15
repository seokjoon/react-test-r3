function hookUseReducerInputReducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default hookUseReducerInputReducer