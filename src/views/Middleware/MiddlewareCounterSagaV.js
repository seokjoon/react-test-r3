import React from 'react'

const MiddlewareCounterSagaV = ({ onDecrease, onIncrease, num }) => {

  return (
    <div>
      <h3>MiddlewareCounterSagaV</h3>
      <div>
        <div>{num}</div>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease}>+1</button>
      </div>
    </div>
  )
}

export default MiddlewareCounterSagaV