import React from 'react'
import HookUseStateContCom from '../../Cont/Hook/HookUseStateContCom'
import HookUseEffectContCom from '../../Cont/Hook/HookUseEffectContCom'
import HookUseReducerContCom from '../../Cont/Hook/HookUseReducerContCom'

const HookViewCom = () => {

  return (
    <div>
      <HookUseReducerContCom />
      <HookUseEffectContCom />
      <HookUseStateContCom />
    </div>
  )
}

export default HookViewCom