import React from 'react'
import ContextFooComV from './ContextFooComV'
import FooCtx from '../../contexts/ContextFooCtx'

const ContextFooV = () => {
  return (
    <div>
      <h3>ContextFooV</h3>
      <div>
        <ContextFooComV />
      </div>
      <div>
        <FooCtx.Provider value={{color: 'green'}}>
          <ContextFooComV />
        </FooCtx.Provider>
      </div>
    </div>
  )
}

export default ContextFooV