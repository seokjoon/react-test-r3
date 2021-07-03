import React from 'react'
import ReduxTodoListItemV from './ReduxTodoListItemV'

const ReduxTodoListV = ({
  input,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle,
  todos,
}) => {

  const onChange = e => onChangeInput(e.target.value)

  const onSubmit = e => { console.log(input)
    e.preventDefault()
    onInsert(input)
    onChangeInput('')
  }

  const outTodoItems = todos.map(todo => (
    <ReduxTodoListItemV
      key={todo.id}
      onRemove={onRemove}
      onToggle={onToggle}
      todo={todo}
    />
  ))

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">add</button>
      </form>
      <div>
        { outTodoItems }
      </div>
    </div>
  )
}

export default ReduxTodoListV