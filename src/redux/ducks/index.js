import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'

const rootReducer = combineReducers({
  middlewareCounterRedux,
  middlewareCounterThunkRedux,
  reduxCounterRedux,
  reduxTodoRedux,
})

export default rootReducer