import React, { useReducer } from 'react'
import hookUseReducerReducer from '../../reducers/Hook/hookUseReducerReducer'

const HookUseReducerCom = () => {

  const [state, dispatch] = useReducer(hookUseReducerReducer, { value: 0 })

  return (
    <div>
      { state.value }
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> + 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> - 1</button>
    </div>
  )
}

export default HookUseReducerCom