import React from 'react'
import ContextFooComV from './ContextFooComV'
import ContextFooCtx from '../../contexts/ContextFooCtx'
import ContextFooComHookV from './ContextFooComHookV'

const ContextFooV = () => {
  return (
    <div>
      <h3>ContextFooV</h3>
      <div>
        <ContextFooComV />
        <ContextFooComHookV />
      </div>
      <div>
        <ContextFooCtx.Provider value={{color: 'green'}}>
          <ContextFooComV />
        </ContextFooCtx.Provider>
      </div>
    </div>
  )
}

export default ContextFooV