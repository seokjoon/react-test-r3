import React from 'react'
import { ContextDynamicProvider } from '../../contexts/ContextDynamicCtx'
import ContextDynamicComV from './ContextDynamicComV'
import ContextDynamicComActionV from './ContextDynamicComActionV'

const ContextDynamicV = () => {
  return (
    <ContextDynamicProvider>
      <ContextDynamicComActionV />
      <ContextDynamicComV />
    </ContextDynamicProvider>
  )
}

export default ContextDynamicV