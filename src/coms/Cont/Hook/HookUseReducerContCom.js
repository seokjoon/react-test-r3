import React, { useReducer } from 'react'
import HookReducer from '../../../reducers/Hook/HookReducer'

const HookUseReducerContCom = () => {

  const [state, dispatch] = useReducer(HookReducer, { value: 0 })

  return (
    <div>
      { state.value }
      <button onClick={() => dispatch({ type: 'INCREMENT' })}> + 1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}> - 1</button>
    </div>
  )
}

export default HookUseReducerContCom