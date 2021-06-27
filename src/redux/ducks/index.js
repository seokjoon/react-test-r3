import { combineReducers } from 'redux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'

const rootReducer = combineReducers({
  reduxCounterRedux,
  reduxTodoRedux,
})

export default rootReducer