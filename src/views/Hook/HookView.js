import React from 'react'
import HookUseStateView from './HookUseStateView'
import HookUseEffectView from './HookUseEffectView'
import HookUseReducerView from './HookUseReducerView'
import HookUseReducerInputView from './HookUseReducerInputView'
import HookUseMemoView from './HookUseMemoView'
import HookUseCallbackView from './HookUseCallbackView'
import HookUseCustomView from './HookUseCustomView'

const HookView = () => {

  return (
    <div>
      <HookUseCustomView />
      <HookUseCallbackView />
      <HookUseMemoView />
      <HookUseReducerInputView />
      <HookUseReducerView />
      <HookUseEffectView />
      <HookUseStateView />
    </div>
  )
}

export default HookView