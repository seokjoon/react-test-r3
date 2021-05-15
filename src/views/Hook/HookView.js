import React from 'react'
import HookUseStateCom from '../../coms/Hook/HookUseStateCom'
import HookUseEffectCom from '../../coms/Hook/HookUseEffectCom'
import HookUseReducerCom from '../../coms/Hook/HookUseReducerCom'
import HookUseReducerInputCom from '../../coms/Hook/HookUseReducerInputCom'
import HookUseMemoCom from '../../coms/Hook/HookUseMemoCom'
import HookUseCallbackCom from '../../coms/Hook/HookUseCallbackCom'
import HookUseCustomCom from '../../coms/Hook/HookUseCustomCom'

const HookView = () => {

  return (
    <div>
      <HookUseCustomCom />
      <HookUseCallbackCom />
      <HookUseMemoCom />
      <HookUseReducerInputCom />
      <HookUseReducerCom />
      <HookUseEffectCom />
      <HookUseStateCom />
    </div>
  )
}

export default HookView