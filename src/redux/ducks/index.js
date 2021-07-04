import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'

const rootReducer = combineReducers({
  middlewareCounterRedux,
  reduxCounterRedux,
  reduxTodoRedux,
})

export default rootReducer