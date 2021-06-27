import React from 'react'

const ReduxTodoListItemV = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>text</span>
      <button>del</button>
    </div>
  )
}

export default ReduxTodoListItemV