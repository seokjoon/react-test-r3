import React from 'react'
import ReduxTodoListV from './ReduxTodoListV'
import { changeInput, insert, remove, toggle, } from '../../redux/ducks/reduxTodoRedux'
import { connect } from 'react-redux'

const ReduxTodoContainerV = ({
  changeInput,
  input,
  insert,
  remove,
  todos,
  toggle,
}) => {
  return (
    <ReduxTodoListV
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onRemove={remove}
      onToggle={toggle}
    />
  )
}

export default connect(
  // state => ({
  ({reduxTodoRedux}) => ({
    input: reduxTodoRedux.input,
    todos: reduxTodoRedux.todos,
  }),
  {
    changeInput,
    insert,
    remove,
    toggle,
  }
)(ReduxTodoContainerV)