import React from 'react'
import ReduxCounterComV from './ReduxCounterComV'
import ReduxCounterContainerV from './ReduxCounterContainerV'

const ReduxCounterV = () => {
  return (
    <div>
      <h3>ReduxCounterV</h3>
      <div>
        <ReduxCounterComV num={0} />
        <ReduxCounterContainerV />
      </div>
    </div>
  )
}

export default ReduxCounterV