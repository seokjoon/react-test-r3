import React, { useReducer } from 'react'
import hookUseReducerReducer from '../../hooks/reducers/Hook/hookUseReducerReducer'

const HookUseReducerV = () => {

  const [state, dispatch] = useReducer(hookUseReducerReducer, { value: 0 })

  return (
    <div>
      <h3>HookUseReducerV</h3>
      { state.value }
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> + 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> - 1</button>
    </div>
  )
}

export default HookUseReducerV