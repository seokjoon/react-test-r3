import React from 'react'
import ContextFooCtx from '../../contexts/ContextFooCtx'

const ContextFooComV = () => {
  return (
    <ContextFooCtx.Consumer>
      {value => (
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color
          }}
        />
      )}
    </ContextFooCtx.Consumer>
  )
}

export default ContextFooComV