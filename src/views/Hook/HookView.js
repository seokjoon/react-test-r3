import React from 'react'
import HookUseStateCom from '../../coms/Hook/HookUseStateCom'
import HookUseEffectCom from '../../coms/Hook/HookUseEffectCom'
import HookUseReducerCom from '../../coms/Hook/HookUseReducerCom'

const HookView = () => {

  return (
    <div>
      <HookUseReducerCom />
      <HookUseEffectCom />
      <HookUseStateCom />
    </div>
  )
}

export default HookView