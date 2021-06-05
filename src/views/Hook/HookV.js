import React from 'react'
import HookUseStateV from './HookUseStateV'
import HookUseEffectV from './HookUseEffectV'
import HookUseReducerV from './HookUseReducerV'
import HookUseReducerInputV from './HookUseReducerInputV'
import HookUseMemoV from './HookUseMemoV'
import HookUseCallbackV from './HookUseCallbackV'
import HookUseCustomV from './HookUseCustomV'

const HookV = () => {

  return (
    <div>
      <HookUseCustomV />
      <HookUseCallbackV />
      <HookUseMemoV />
      <HookUseReducerInputV />
      <HookUseReducerV />
      <HookUseEffectV />
      <HookUseStateV />
    </div>
  )
}

export default HookV