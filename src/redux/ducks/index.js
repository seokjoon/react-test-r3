import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import middlewareCounterSagaRedux from './middlewareCounterSagaRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'
import middlewareApiThunkRedux from './middlewareApiThunkRedux'
import middlewareApiSagaRedux from './middlewareApiSagaRedux'
import r3ApiLoadingRedux from './r3ApiLoadingRedux'
import userCreateRedux from './userCreateRedux'
import userRedux from './userRedux'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  middlewareApiSagaRedux,
  middlewareApiThunkRedux,
  middlewareCounterRedux,
  middlewareCounterSagaRedux,
  middlewareCounterThunkRedux,
  r3ApiLoadingRedux,
  reduxCounterRedux,
  reduxTodoRedux,
  userCreateRedux,
  userRedux,
})

export function* rootSaga() {
  yield all([
    middlewareCounterSagaRedux.middlewareCounterSaga(),
    middlewareApiSagaRedux.middlewareApiSaga(),
    userCreateRedux.userCreateSaga(),
    userRedux.userSaga(),
  ])
}

export default rootReducer