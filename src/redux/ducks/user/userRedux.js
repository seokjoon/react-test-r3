import { createAction, handleActions } from 'redux-actions'
import r3Api from '../../../helpers/r3Api'
import r3Saga from '../../../helpers/r3Saga'
import { call, takeLatest } from 'redux-saga/effects'


const CHECK = 'user/CHECK'
const CHECK_FAIL = 'user/CHECK_FAIL'
const CHECK_SUCCESS = 'user/CHECK_SUCCESS'
const CREATE_TOKEN_TMP = 'user/CREATE_TOKEN_TMP'
const DESTROY_TOKEN = 'user/DESTROY_TOKEN'


const initState = {
  checkError: null,
  user: null,
}

const userRedux = handleActions({
  [CHECK_FAIL]: (state, { payload: error }) => ({
    ...state,
    checkError: error,
    user: null,
  }),
  [CHECK_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    checkError: null,
    user,
  }),
  [CREATE_TOKEN_TMP]: (state, { payload: user }) => ({
    ...state,
    user,
  }),
  [DESTROY_TOKEN]: (state) => ({
    ...state,
    user: null,
  }),
}, initState)


userRedux.check = createAction(CHECK)

userRedux.checkFailSaga = function () {
  try {
    localStorage.removeItem('user')
  } catch (e) {
    console.log('localStorage is not working')
  }
}

userRedux.checkSaga = r3Saga.createReq(CHECK, r3Api.user.checkToken)

userRedux.createTokenTmp = createAction(CREATE_TOKEN_TMP, user => user)

userRedux.destroyToken = createAction(DESTROY_TOKEN)

userRedux.destroyTokenSaga = function* () {
  try {
    yield call(r3Api.user.destroyToken)
    localStorage.removeItem('user')
  } catch (e) {
    console.log(e)
  }
}

userRedux.userSaga = function* () {
  yield takeLatest(CHECK, userRedux.checkSaga)
  yield takeLatest(CHECK_FAIL, userRedux.checkFailSaga)
  yield takeLatest(DESTROY_TOKEN, userRedux.destroyTokenSaga)
}


export default userRedux