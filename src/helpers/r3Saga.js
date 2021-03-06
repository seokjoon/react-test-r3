import { call, put } from 'redux-saga/effects'
import r3ApiLoadingRedux from '../redux/ducks/r3ApiLoadingRedux'


const r3Saga = {
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return function*(action) {
      yield put(r3ApiLoadingRedux.start(type))
      try {
        const res = yield call(req, action.payload)
        yield put({
          meta: res,
          payload: res.data,
          type: SUCCESS,
        })
      } catch (e) {
        yield put({
          error: true,
          payload: e,
          type: FAIL,
        })
      }
      yield put(r3ApiLoadingRedux.stop(type))
    }
  }
}


export default r3Saga