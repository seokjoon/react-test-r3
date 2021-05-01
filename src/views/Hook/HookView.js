import React from 'react'
import HookUseStateCom from '../../coms/Hook/HookUseStateCom'
import HookUseEffectCom from '../../coms/Hook/HookUseEffectCom'
import HookUseReducerCom from '../../coms/Hook/HookUseReducerCom'
import HookUseReducerInputCom from '../../coms/Hook/HookUseReducerInputCom'

const HookView = () => {

  return (
    <div>
      <HookUseReducerInputCom />
      <HookUseReducerCom />
      <HookUseEffectCom />
      <HookUseStateCom />
    </div>
  )
}

export default HookView