import { createAction, handleActions } from 'redux-actions'
import r3Saga from '../../../helpers/r3Saga'
import r3Api from '../../../helpers/r3Api'
import { takeLatest } from 'redux-saga/effects'


const INIT = 'articleCreate/INIT'
const CHANGE_FIELD = 'articleCreate/CHANGE_FIELD'
const CREATE = 'articleCreate/CREATE'
const CREATE_FAIL = 'articleCreate/CREATE_FAIL'
const CREATE_SUCCESS = 'articleCreate/CREATE_SUCCESS'


const initState = {
  content: '',
  create: null,
  createErr: null,
  tags: [],
  title: '',
}

const articleCreateRedux = handleActions({
  [INIT]: state => initState,
  [CHANGE_FIELD]: (state, { payload: { key, val } }) => ({
    ...state,
    [key]: val,
  }),
  [CREATE]: state => ({
    ...state,
    create: null,
    createErr: null,
  }),
  [CREATE_FAIL]: (state, { payload: createErr }) => ({
    ...state,
    createErr,
  }),
  [CREATE_SUCCESS]: (state, { payload: create }) => ({
    ...state,
    create,
  }),
}, initState)


articleCreateRedux.init = createAction(INIT)
articleCreateRedux.changeField = createAction(CHANGE_FIELD, ({ key, val }) => ({ key, val, }))
articleCreateRedux.create = createAction(CREATE, ({ content, title, tags }) => ({ content, title, tags, }))

const createSaga = r3Saga.createReq(CREATE, r3Api.article.createItem)
articleCreateRedux.createSaga = function* () {
  yield takeLatest(CREATE, createSaga)
}


export default articleCreateRedux