import React from 'react'

const ReduxCounterComV = ({ num, onDecrease, onIncrease }) => {
  return (
    <div>
      <div>{num}</div>
      <div>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease}>+1</button>
      </div>
    </div>
  )
}

export default ReduxCounterComV