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
      <input name="foo" value={foo} onChange={onChange} />
      <div>{foo}</div>
      <input name="bar" value={bar} onChange={onChange} />
      <div>{bar}</div>
    </div>
  )
}

export default HookUseCustomView