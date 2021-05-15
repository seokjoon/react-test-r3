import React from 'react'
import HookUseInputsCustomCom from './HookUseInputsCustomCom'

const HookUseCustomCom = () => {

  const [state, onChange] = HookUseInputsCustomCom({
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

export default HookUseCustomCom