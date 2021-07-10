import { createAction, handleActions } from 'redux-actions'

const DECREASE = 'middlewareCounterAsync/DECREASE'
const INCREASE = 'middlewareCounterAsync/INCREASE'

export const decrease = createAction(DECREASE)
export const increase = createAction(INCREASE)

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease())
  }, 1000)
}

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  }, 1000)
}

const initState = 0

const middlewareCounterThunkRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, initState)

export default middlewareCounterThunkRedux