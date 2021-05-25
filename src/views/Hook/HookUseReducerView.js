import React, { useReducer } from 'react'
import hookUseReducerReducer from '../../hooks/reducers/Hook/hookUseReducerReducer'

const HookUseReducerView = () => {

  const [state, dispatch] = useReducer(hookUseReducerReducer, { value: 0 })

  return (
    <div>
      <h3>HookUseReducerView</h3>
      { state.value }
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> + 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> - 1</button>
    </div>
  )
}

export default HookUseReducerView