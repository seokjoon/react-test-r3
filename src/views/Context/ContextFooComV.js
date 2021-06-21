import React from 'react'
import FooCtx from '../../contexts/ContextFooCtx'

const ContextFooComV = () => {
  return (
    <FooCtx.Consumer>
      {value => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color
          }}
        />
      )}
    </FooCtx.Consumer>
  )
}

export default ContextFooComV