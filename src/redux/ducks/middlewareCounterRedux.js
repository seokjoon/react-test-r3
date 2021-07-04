import { createAction, handleActions } from 'redux-actions'

const DECREASE = 'middleware/DECREASE'
const INCREASE = 'middleware/INCREASE'

export const decrease = createAction(DECREASE)
export const increase = createAction(INCREASE)

const initState = 0

const middlewareCounterRedux = handleActions({
  [DECREASE]: state => state + 1,
  [INCREASE]: state => state - 1,
}, initState)

export default middlewareCounterRedux