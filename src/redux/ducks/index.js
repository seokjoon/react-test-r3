import { combineReducers } from 'redux'
import articleCreateRedux from './article/articleCreateRedux'
import articleReadRedux from './article/articleReadRedux'
import articlesReadRedux from './article/articlesReadRedux'
import middlewareCounterRedux from './middleware/middlewareCounterRedux'
import middlewareCounterThunkRedux from './middleware/middlewareCounterThunkRedux'
import middlewareCounterSagaRedux from './middleware/middlewareCounterSagaRedux'
import reduxCounterRedux from './redux/reduxCounterRedux'
import reduxTodoRedux from './redux/reduxTodoRedux'
import middlewareApiThunkRedux from './middleware/middlewareApiThunkRedux'
import middlewareApiSagaRedux from './middleware/middlewareApiSagaRedux'
import r3ApiLoadingRedux from './r3ApiLoadingRedux'
import userCreateRedux from './user/userCreateRedux'
import userRedux from './user/userRedux'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  articleCreateRedux,
  articleReadRedux,
  articlesReadRedux,
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
    articleCreateRedux.createSaga(),
    articleReadRedux.readSaga(),
    articlesReadRedux.readSaga(),
    middlewareCounterSagaRedux.middlewareCounterSaga(),
    middlewareApiSagaRedux.middlewareApiSaga(),
    userCreateRedux.userCreateSaga(),
    userRedux.userSaga(),
  ])
}

export default rootReducer