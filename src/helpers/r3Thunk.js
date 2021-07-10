import { r3ApiLoadingReduxStart, r3ApiLoadingReduxStop } from '../redux/ducks/r3ApiLoadingRedux'

const r3Thunk = {
  /**
   * @param type
   * @param req: axios req
   */
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return params => async dispatch => {
      dispatch({ type })
      dispatch(r3ApiLoadingReduxStart(type))
      try {
        const res = await req(params)
        dispatch({
          payload: res.data,
          type: SUCCESS,
        })
        dispatch(r3ApiLoadingReduxStop(type))
      } catch (e) {
        dispatch({
          error: true,
          payload: e,
          type: FAIL,
        })
        dispatch(r3ApiLoadingReduxStart(type))
        throw e
      }
    }
  },
}

export default r3Thunk