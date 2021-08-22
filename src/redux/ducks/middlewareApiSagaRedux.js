import r3Api from '../../helpers/r3Api'
import { createAction, handleActions } from 'redux-actions'
import r3Saga from '../../helpers/r3Saga'
import { takeLatest } from 'redux-saga/effects'


const GET_POST = 'middlewareApiSaga/GET_POST'
const GET_POST_SUCCESS = 'middlewareApiSaga/GET_POST_SUCCESS'
const GET_USERS = 'middlewareApiSaga/GET_USERS'
const GET_USERS_SUCCESS = 'middlewareApiSaga/GET_USERS_SUCCESS'


const initState = {
  post: null,
  users: null,
}

const middlewareApiSagaRedux = handleActions({
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    post: action.payload,
  }),

  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    users: action.payload,
  }),
}, initState)



middlewareApiSagaRedux.getPost = createAction(GET_POST, id => id)
middlewareApiSagaRedux.getUsers = createAction(GET_USERS)

const getPostSaga = r3Saga.createReq(GET_POST, r3Api.middleware.getPost)
const getUsersSaga = r3Saga.createReq(GET_USERS, r3Api.middleware.getUsers)

middlewareApiSagaRedux.middlewareApiSaga = function* () {
  yield takeLatest(GET_POST, getPostSaga)
  yield takeLatest(GET_USERS, getUsersSaga)
}



export default middlewareApiSagaRedux