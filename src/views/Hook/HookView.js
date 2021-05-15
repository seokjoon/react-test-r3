import React from 'react'
import HookUseStateCom from '../../coms/Hook/HookUseStateCom'
import HookUseEffectCom from '../../coms/Hook/HookUseEffectCom'
import HookUseReducerCom from '../../coms/Hook/HookUseReducerCom'
import HookUseReducerInputCom from '../../coms/Hook/HookUseReducerInputCom'
import HookUseMemoCom from '../../coms/Hook/HookUseMemoCom'

const HookView = () => {

  return (
    <div>
      <HookUseMemoCom />
      <HookUseReducerInputCom />
      <HookUseReducerCom />
      <HookUseEffectCom />
      <HookUseStateCom />
    </div>
  )
}

export default HookView