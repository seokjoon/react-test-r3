import { createAction, handleActions } from 'redux-actions'
import r3Saga from '../../../helpers/r3Saga'
import r3Api from '../../../helpers/r3Api'
import { takeLatest } from 'redux-saga/effects'


const READ = 'articlesRead/READ'
const READ_FAIL = 'articlesRead/READ_FAIL'
const READ_SUCCESS = 'articlesRead/READ_SUCCESS'

const stateInit = {
  articles: null,
  error: null,
}

const articlesReadRedux = handleActions({
  [READ_FAIL]: (state, { payload: error }) => ({ ...state, error, }),
  [READ_SUCCESS]: (state, { payload: articles }) => ({ ...state, articles, }),
}, stateInit)

articlesReadRedux.read = createAction(READ, ({ page, tag, username, }) => ({ page, tag, username, }))

const readSaga = r3Saga.createReq(READ, r3Api.article.readItems)
articlesReadRedux.readSaga = function* () {
  yield takeLatest(READ, readSaga)
}


export default articlesReadRedux