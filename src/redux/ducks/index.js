import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'
import middlewareApiThunkRedux from './middlewareApiThunkRedux'
import r3ApiLoadingRedux from './r3ApiLoadingRedux'

const rootReducer = combineReducers({
  middlewareApiThunkRedux,
  middlewareCounterRedux,
  middlewareCounterThunkRedux,
  r3ApiLoadingRedux,
  reduxCounterRedux,
  reduxTodoRedux,
})

export default rootReducer