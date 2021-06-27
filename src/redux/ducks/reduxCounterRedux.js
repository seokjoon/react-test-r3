const DECREASE = 'reduxCounterRedux/DECREASE'
const INCREASE = 'reduxCounterRedux/INCREASE'

export const decrease = () => ({ type: DECREASE })
export const increase = () => ({ type: INCREASE })

const initState = {
  num: 0,
}

function reduxCounterRedux(state = initState, action) {
  switch (action.type) {
    case DECREASE:
      return {
        num: state.num - 1
      }
    case INCREASE:
      return {
        num: state.num + 1
      }
    default:
      return state
  }
}

export default reduxCounterRedux
