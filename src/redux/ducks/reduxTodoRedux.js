import { createAction, handleActions } from 'redux-actions'

const CHANGE_INPUT = 'reduxTodoRedux/CHANGE_INPUT'
const INSERT = 'reduxTodoRedux/INSERT'
const REMOVE = 'reduxTodoRedux/REMOVE'
const TOGGLE = 'reduxTodoRedux/TOGGLE'

// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input,
// })
export const changeInput = createAction(CHANGE_INPUT, input => input)

let id = 2

// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   }
// })
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}))

// export const remove = id => ({
//   type: REMOVE,
//   id,
// })
export const remove = createAction(REMOVE, id => id)

// export const toggle = id => ({
//   type: TOGGLE,
//   id,
// })
export const toggle = createAction(TOGGLE, id => id)

const initState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'foo',
      done: true,
    },
  ],
}

// function reduxTodoRedux(state = initState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       }
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       }
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id),
//       }
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo),
//       }
//     default:
//       return state
//   }
// }
const reduxTodoRedux = handleActions({
  [CHANGE_INPUT]: (state, { payload: input }) => ({
    ...state,
    input
  }),
  [INSERT]: (state, { payload: todo }) => ({
    ...state,
    todos: state.todos.concat(todo)
  }),
  [REMOVE]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }),
  [TOGGLE]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)
  }),
}, initState)

export default reduxTodoRedux