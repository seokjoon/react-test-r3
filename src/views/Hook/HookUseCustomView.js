import React from 'react'
import HookUseInputsCustomHook from '../../hooks/HookUseInputsCustomHook'

const HookUseCustomView = () => {

  const [state, onChange] = HookUseInputsCustomHook({
    foo: '',
    bar: '',
  })

  const { foo, bar } = state

  return (
    <div>
      <h3>HookUseCustomView</h3>
      <input name="foo" value={foo} onChange={onChange} />
      <div>{foo}</div>
      <input name="bar" value={bar} onChange={onChange} />
      <div>{bar}</div>
    </div>
  )
}

export default HookUseCustomView