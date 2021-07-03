import React from 'react'

const ReduxTodoListItemV = ({
  onRemove,
  onToggle,
  todo,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>del</button>
    </div>
  )
}

export default ReduxTodoListItemV