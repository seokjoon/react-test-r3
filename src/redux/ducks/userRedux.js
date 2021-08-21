import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import r3Saga from '../../helpers/r3Saga'
import r3Api from '../../helpers/r3Api'
import { takeLatest } from 'redux-saga/effects'

const CHANGE_FIELD = 'user/CHANGE_FIELD'
const CREATE = 'user/CREATE'
const CREATE_FAIL = 'user/CREATE_FAIL'
const CREATE_SUCCESS = 'user/CREATE_SUCCESS'
const CREATE_TOKEN = 'user/CREATE_TOKEN'
const CREATE_TOKEN_FAIL = 'user/CREATE_TOKEN_FAIL'
const CREATE_TOKEN_SUCCESS = 'user/CREATE_TOKEN_SUCCESS'
const INIT_FORM = 'user/INIT_FORM'

const initState = {
  create: {
    password: '',
    passwordConfirm: '',
    username: '',
  },
  createToken: {
    password: '',
    username: '',
  },
  user: null,
  userError: null,
}

const userRedux = handleActions({
  [CHANGE_FIELD]: (state, { payload: { form, key, val } }) => (
    produce(state, draft => {
      draft[form][key] = val //ex: state.create.username 을 변경
    })
  ),
  [CREATE_FAIL]: (state, { payload: error }) => ({
    ...state,
    userError: error,
  }),
  [CREATE_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user,
    userError: null,
  }),
  [CREATE_TOKEN_FAIL]: (state, { payload: error }) => ({
    ...state,
    user: error,
  }),
  [CREATE_TOKEN_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user,
    userError: null,
  }),
  [INIT_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initState[form],
    userError: null, //폼 전환시 회원 인증 에러 초기화
  }),
}, initState)

userRedux.changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, val }) => ({
    form, //create, createToken
    key, //username, password, passwordConfirm
    val, //변경하려는 값
  })
)

userRedux.create = createAction(CREATE, ({ password, username }) => ({
  password,
  username,
}))

userRedux.createToken = createAction(CREATE_TOKEN, ({ password, username }) => ({
  password,
  username,
}))

userRedux.createSaga = r3Saga.createReq(CREATE, r3Api.user.create)

userRedux.createTokenSaga = r3Saga.createReq(CREATE_TOKEN, r3Api.user.createToken)

userRedux.userSaga = function* () {
  yield takeLatest(CREATE, userRedux.createSaga)
  yield takeLatest(CREATE_TOKEN, userRedux.createTokenSaga)
}

userRedux.initForm = createAction(INIT_FORM, form => form) //create, createToken

export default userRedux