import { createAction, handleActions } from 'redux-actions'


const DECREASE = 'middlewareCounter/DECREASE'
const INCREASE = 'middlewareCounter/INCREASE'


const stateInit = 0

const middlewareCounterRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, stateInit)


middlewareCounterRedux.decrease = createAction(DECREASE)
middlewareCounterRedux.increase = createAction(INCREASE)


export default middlewareCounterRedux