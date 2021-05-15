import React, { useReducer } from 'react'
import hookUseReducerInputReducer from '../../reducers/Hook/hookUseReducerInputReducer'

const HookUseReducerInputCom = () => { //useState, setState 다수 반복과 동일 효과
  const [state, dispatch] = useReducer(hookUseReducerInputReducer, {
    foo: '',
    bar: '',
  })

  const onChange = e => {
    dispatch(e.target)
  }

  return (
    <div>
      <input name="foo" value={state.foo} onChange={onChange} />
      <input name="bar" value={state.bar} onChange={onChange} />
      <p>{ state.foo }</p>
      <p>{ state.bar }</p>
    </div>
  )
}

export default HookUseReducerInputCom