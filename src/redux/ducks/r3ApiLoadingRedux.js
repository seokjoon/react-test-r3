import { createAction, handleActions } from 'redux-actions'


const START = 'r3ApiLoading/START'
const STOP = 'r3ApiLoading/STOP'


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



r3ApiLoadingRedux.start = createAction(
  START,
  reqType => reqType
)

r3ApiLoadingRedux.stop = createAction(
  STOP,
  reqType => reqType
)


export default r3ApiLoadingRedux