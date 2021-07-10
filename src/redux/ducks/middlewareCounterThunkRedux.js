import { createAction, handleActions } from 'redux-actions'

const DECREASE = 'middlewareCounterThunk/DECREASE'
const INCREASE = 'middlewareCounterThunk/INCREASE'

export const decrease = createAction(DECREASE)
export const increase = createAction(INCREASE)

const initState = 0

const middlewareCounterThunkRedux = handleActions({
  [DECREASE]: state => state + 1,
  [INCREASE]: state => state - 1,
}, initState)

export default middlewareCounterThunkRedux