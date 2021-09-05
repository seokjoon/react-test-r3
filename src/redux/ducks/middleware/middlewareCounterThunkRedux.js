import { createAction, handleActions } from 'redux-actions'


const DECREASE = 'middlewareCounterThunk/DECREASE'
const INCREASE = 'middlewareCounterThunk/INCREASE'


const stateInit = 0

const middlewareCounterThunkRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, stateInit)


const decrease = createAction(DECREASE)
const increase = createAction(INCREASE)

middlewareCounterThunkRedux.decreaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease())
  }, 1000)
}

middlewareCounterThunkRedux.increaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  }, 1000)
}


export default middlewareCounterThunkRedux