function HookUseReducerInputReducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default HookUseReducerInputReducer