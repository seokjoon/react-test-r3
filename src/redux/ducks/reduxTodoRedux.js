const CHANGE_INPUT = 'reduxTodoRedux/CHANGE_INPUT'
const INSERT = 'reduxTodoRedux/INSERT'
const REMOVE = 'reduxTodoRedux/REMOVE'
const TOGGLE = 'reduxTodoRedux/TOGGLE'

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
})

let id = 2

export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  }
})

export const remove = id => ({
  type: REMOVE,
  id,
})

export const toggle = id => ({
  type: TOGGLE,
  id,
})

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

function reduxTodoRedux(state = initState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      }
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo),
      }
    default:
      return state
  }
}

export default reduxTodoRedux