import React, { useContext } from 'react'
import ContextFooCtx from '../../contexts/ContextFooCtx'

const ContextFooComHookV = () => {
  const { color } = useContext(ContextFooCtx)

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: color
        }}
      />
    </>
  )
}

export default ContextFooComHookV