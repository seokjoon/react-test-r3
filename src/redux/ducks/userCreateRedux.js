import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import r3Saga from '../../helpers/r3Saga'
import r3Api from '../../helpers/r3Api'
import { takeLatest } from 'redux-saga/effects'


const CHANGE_FIELD = 'userCreate/CHANGE_FIELD'
const CREATE = 'userCreate/CREATE'
const CREATE_FAIL = 'userCreate/CREATE_FAIL'
const CREATE_SUCCESS = 'userCreate/CREATE_SUCCESS'
const CREATE_TOKEN = 'userCreate/CREATE_TOKEN'
const CREATE_TOKEN_FAIL = 'userCreate/CREATE_TOKEN_FAIL'
const CREATE_TOKEN_SUCCESS = 'userCreate/CREATE_TOKEN_SUCCESS'
const INIT_FORM = 'userCreate/INIT_FORM'


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
  userCreate: null,
  userCreateError: null,
}

const userCreateRedux = handleActions({
  [CHANGE_FIELD]: (state, { payload: { form, key, val } }) => (
    produce(state, draft => {
      draft[form][key] = val //ex: state.create.username 을 변경
    })
  ),
  [CREATE_FAIL]: (state, { payload: error }) => ({
    ...state,
    userCreateError: error,
  }),
  [CREATE_SUCCESS]: (state, { payload: userCreate }) => ({
    ...state,
    userCreate,
    userCreateError: null,
  }),
  [CREATE_TOKEN_FAIL]: (state, { payload: error }) => ({
    ...state,
    userCreateError: error,
  }),
  [CREATE_TOKEN_SUCCESS]: (state, { payload: userCreate }) => ({
    ...state,
    userCreate,
    userCreateError: null,
  }),
  [INIT_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initState[form],
    userCreateError: null, //폼 전환시 회원 인증 에러 초기화
  }),
}, initState)


userCreateRedux.changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, val }) => ({
    form, //create, createToken
    key, //username, password, passwordConfirm
    val, //변경하려는 값
  })
)

userCreateRedux.create = createAction(CREATE, ({ password, username }) => ({
  password,
  username,
}))

userCreateRedux.createToken = createAction(CREATE_TOKEN, ({ password, username }) => ({
  password,
  username,
}))

userCreateRedux.createSaga = r3Saga.createReq(CREATE, r3Api.user.create)

userCreateRedux.createTokenSaga = r3Saga.createReq(CREATE_TOKEN, r3Api.user.createToken)

userCreateRedux.initForm = createAction(INIT_FORM, form => form) //create, createToken

userCreateRedux.userCreateSaga = function* () {
  yield takeLatest(CREATE, userCreateRedux.createSaga)
  yield takeLatest(CREATE_TOKEN, userCreateRedux.createTokenSaga)
}


export default userCreateRedux