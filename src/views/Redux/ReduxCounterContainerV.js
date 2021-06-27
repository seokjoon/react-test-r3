import React from 'react'
import ReduxCounterComV from './ReduxCounterComV'

const ReduxCounterContainerV = ({ num, decrease, increase }) => {
  return (
    <ReduxCounterComV num={num} onDecrease={decrease} onIncrease={increase} />
  )
}



export default ReduxCounterContainerV