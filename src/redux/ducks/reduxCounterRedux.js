import { createAction, handleAction } from 'redux-actions'

const DECREASE = 'reduxCounterRedux/DECREASE'
const INCREASE = 'reduxCounterRedux/INCREASE'

// export const decrease = () => ({ type: DECREASE })
// export const increase = () => ({ type: INCREASE })
export const decrease = createAction(DECREASE)
export const increase = createAction(INCREASE)

const initState = {
  num: 0,
}

// function reduxCounterRedux(state = initState, action) {
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
const reduxCounterRedux = handleAction(
  {
    [DECREASE]: (state, action) => ({ num: state.num - 1 }),
    [INCREASE]: (state, action) => ({ num: state.num + 1 }),
  },
  initState,
)

export default reduxCounterRedux
