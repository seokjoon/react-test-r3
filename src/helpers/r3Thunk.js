import r3ApiLoadingRedux from '../redux/ducks/r3ApiLoadingRedux'


const r3Thunk = {
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return params => async dispatch => {
      dispatch({ type })
      dispatch(r3ApiLoadingRedux.start(type))
      try {
        const res = await req(params)
        dispatch({
          payload: res.data,
          type: SUCCESS,
        })
        dispatch(r3ApiLoadingRedux.stop(type))
      } catch (e) {
        dispatch({
          error: true,
          payload: e,
          type: FAIL,
        })
        dispatch(r3ApiLoadingRedux.start(type))
        //throw e
      }
    }
  },
}


export default r3Thunk
