import { createAction, handleActions } from 'redux-actions'

const INIT = 'articleCreate/INIT'
const CHANGE_FIELD = 'articleCreate/CHANGE_FIELD'

const initState = {
  body: '',
  tags: [],
  title: '',
}

const articleCreateRedux = handleActions({
  [INIT]: state => initState,
  [CHANGE_FIELD]: (state, { payload: { key, val } }) => ({
    ...state,
    [key]: val,
  }),
}, initState)

articleCreateRedux.init = createAction(INIT)
articleCreateRedux.changeField = createAction(CHANGE_FIELD, ({ key, val }) => ({ key, val, }))

export default articleCreateRedux