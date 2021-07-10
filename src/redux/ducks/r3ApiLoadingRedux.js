import { createAction, handleActions } from 'redux-actions'

const START = 'r3ApiLoading/START'
const STOP = 'r3ApiLoading/STOP'

export const r3ApiLoadingReduxStart = createAction(
  START,
  reqType => reqType
)

export const r3ApiLoadingReduxStop = createAction(
  STOP,
  reqType => reqType
)

const initState = {}

const r3ApiLoadingRedux = handleActions({
  [START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [STOP]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
}, initState)

export default r3ApiLoadingRedux