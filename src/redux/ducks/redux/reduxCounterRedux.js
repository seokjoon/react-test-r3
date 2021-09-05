import { createAction, handleActions } from 'redux-actions'


const DECREASE = 'reduxCounterRedux/DECREASE'
const INCREASE = 'reduxCounterRedux/INCREASE'


const stateInit = {
  num: 0,
}

// function reduxCounterRedux(state = stateInit, action) {
//   switch (action.type) {
//     case DECREASE:
//       return {
//         num: state.num - 1
//       }
//     case INCREASE:
//       return {
//         num: state.num + 1
//       }
//     default:
//       return state
//   }
// }
const reduxCounterRedux = handleActions(
  {
    [DECREASE]: (state, action) => ({ num: state.num - 1 }),
    [INCREASE]: (state, action) => ({ num: state.num + 1 }),
  },
  stateInit,
)


// export const decrease = () => ({ type: DECREASE })
// export const increase = () => ({ type: INCREASE })
reduxCounterRedux.decrease = createAction(DECREASE)
reduxCounterRedux.increase = createAction(INCREASE)


export default reduxCounterRedux
