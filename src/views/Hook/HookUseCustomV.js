import React from 'react'
import useInputsCustomHook from '../../hooks/useInputsCustomHook'

const HookUseCustomV = () => {

  const [state, onChange] = useInputsCustomHook({
    foo: '',
    bar: '',
  })

  const { foo, bar } = state

  return (
    <div>
      <h3>HookUseCustomV</h3>
      <input name="foo" value={foo} onChange={onChange} />
      <div>{foo}</div>
      <input name="bar" value={bar} onChange={onChange} />
      <div>{bar}</div>
    </div>
  )
}

export default HookUseCustomV