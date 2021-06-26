import React from 'react'
import ContextFooComV from './ContextFooComV'
import ContextFooCtx from '../../contexts/ContextFooCtx'

const ContextFooV = () => {
  return (
    <div>
      <h3>ContextFooV</h3>
      <div>
        <ContextFooComV />
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