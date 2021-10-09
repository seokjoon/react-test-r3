import { createAction, handleActions } from 'redux-actions'
import r3Saga from '../../../helpers/r3Saga'
import r3Api from '../../../helpers/r3Api'
import { takeLatest } from 'redux-saga/effects'


const READ = 'articleRead/READ'
const READ_FAIL = 'articleRead/READ_FAIL'
const READ_SUCCESS = 'articleRead/READ_SUCCESS'
const READ_UNLOAD = 'articleRead/READ_UNLOAD'


const stateInit = {
  article: null,
  error: null,
}

const articleReadRedux = handleActions({
  [READ_FAIL]: (state, { payload: error }) => ({ ...state, error, }),
  [READ_SUCCESS]: (state, { payload: article }) => ({ ...state, article, }),
  [READ_UNLOAD]: () => stateInit,
}, stateInit)

articleReadRedux.read = createAction(READ, id => id)
articleReadRedux.readUnload = createAction(READ_UNLOAD)

const readSaga = r3Saga.createReq(READ, r3Api.article.readItem)
articleReadRedux.readSaga = function* () {
  yield takeLatest(READ, readSaga)
}


export default articleReadRedux