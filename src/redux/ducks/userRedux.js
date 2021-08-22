import { createAction, handleActions } from 'redux-actions'
import r3Api from '../../helpers/r3Api'
import r3Saga from '../../helpers/r3Saga'
import { takeLatest } from 'redux-saga/effects'


const CHECK = 'user/CHECK'
const CHECK_FAIL = 'user/CHECK_FAIL'
const CHECK_SUCCESS = 'user/CHECK_SUCCESS'
const CREATE_TOKEN_TMP = 'user/CREATE_TOKEN_TMP'


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
}, initState)


userRedux.check = createAction(CHECK)

userRedux.checkSaga = r3Saga.createReq(CHECK, r3Api.user.checkToken)

userRedux.createTokenTmp = createAction(CREATE_TOKEN_TMP, user => user)

userRedux.userSaga = function* () {
  yield takeLatest(CHECK, userRedux.checkSaga)
}


export default userRedux