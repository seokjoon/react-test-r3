import React from 'react'
import { ContextDynamicConsumer } from '../../contexts/ContextDynamicCtx'

const ContextDynamicComV = () => {
  return (
    <ContextDynamicConsumer>
      {({state}) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.colorSub,
            }}
          />
        </>
      )}
    </ContextDynamicConsumer>
  )
}

export default ContextDynamicComV