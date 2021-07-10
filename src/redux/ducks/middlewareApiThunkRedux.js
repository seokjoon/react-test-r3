import r3Api from '../../helpers/r3Api'
import { handleActions } from 'redux-actions'
import r3Thunk from '../../helpers/r3Thunk'

const GET_POST = 'middlewareApiThunk/GET_POST'
// const GET_POST_FAIL = 'middlewareApiThunk/GET_POST_FAIL'
const GET_POST_SUCCESS = 'middlewareApiThunk/GET_POST_SUCCESS'

const GET_USERS = 'middlewareApiThunk/GET_USERS'
// const GET_USERS_FAIL = 'middlewareApiThunk/GET_USERS_FAIL'
const GET_USERS_SUCCESS = 'middlewareApiThunk/GET_USERS_SUCCESS'

/* export const getPost = id => async dispatch => {
  dispatch({ type: GET_POST })
  try {
    const res = await r3Api.middleware.getPost(id)
    dispatch({
      payload: res.data,
      type: GET_POST_SUCCESS,
    })
  } catch (e) {
    dispatch({
      type: GET_POST_FAIL,
      payload: e,
      error: true,
    })
    throw e
  }
} */
export const getPost = r3Thunk.createReg(GET_POST, r3Api.middleware.getPost)

/* export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS })
  try {
    const res = await r3Api.middleware.getUsers()
    dispatch({
      payload: res.data,
      type: GET_USERS_SUCCESS,
    })
  } catch (e) {
    dispatch({
      error: true,
      payload: e,
      type: GET_USERS_FAIL,
    })
    throw  e
  }
} */
export const getUsers = r3Thunk.createReg(GET_USERS, r3Api.middleware.getUsers)

const initState = {
  // loading: {
  //   GET_POST: false,
  //   GET_USERS: false,
  // },
  post: null,
  users: null,
}

const middlewareApiThunkRedux = handleActions({
  // [GET_POST]: state => ({
  //   ...state,
  //   loading: {
  //     ...state.loading,
  //     GET_POST: true,
  //   },
  // }),
  // [GET_POST_FAIL]: (state, action) => ({
  //   ...state,
  //   loading: {
  //     ...state.loading,
  //     GET_POST: false,
  //   },
  // }),
  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    // loading: {
    //   ...state.loading,
    //   GET_POST: false,
    // },
    post: action.payload,
  }),

  // [GET_USERS]: (state) => ({
  //   ...state,
  //   loading: {
  //     ...state.loading,
  //     GET_USERS: true,
  //   },
  // }),
  // [GET_USERS_FAIL]: (state, action) => ({
  //   ...state,
  //   loading: {
  //     ...state.loading,
  //     GET_USERS: false,
  //   },
  // }),
  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    // loading: {
    //   ...state.loading,
    //   GET_USERS: false,
    // },
    users: action.payload,
  }),
}, initState)

export default middlewareApiThunkRedux