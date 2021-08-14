import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'

const CHANGE_FIELD = 'user/CHANGE_FIELD'
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
}

const userRedux = handleActions({
  [CHANGE_FIELD]: (state, { payload: { form, key, val } }) => (
    produce(state, draft => {
      draft[form][key] = val //ex: state.create.username 을 변경
    })
  ),
  [INIT_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initState[form]
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

userRedux.initForm = createAction(INIT_FORM, form => form) //create, createToken

export default userRedux