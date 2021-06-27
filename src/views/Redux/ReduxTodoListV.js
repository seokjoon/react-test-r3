import React from 'react'
import ReduxTodoListItemV from './ReduxTodoListItemV'

const ReduxTodoListV = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle,
}) => {

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit">add</button>
      </form>
      <div>
        <ReduxTodoListItemV />
      </div>
    </div>
  )
}

export default ReduxTodoListV