import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'
import middlewareApiThunkRedux from './middlewareApiThunkRedux'

const rootReducer = combineReducers({
  middlewareApiThunkRedux,
  middlewareCounterRedux,
  middlewareCounterThunkRedux,
  reduxCounterRedux,
  reduxTodoRedux,
})

export default rootReducer