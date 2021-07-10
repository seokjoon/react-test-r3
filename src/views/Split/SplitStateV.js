import React, { useState } from 'react'

const SplitStateV = () => {

  const [foo, setFoo] = useState()

  const handleClick = async () => {
    setFoo((await import('./SplitStateFooV')).default)
  }

  return (
    <div>
      <h3>SplitStateV</h3>
      <div>
        <button onClick={handleClick}>setFoo</button>
        <div>{ foo && foo }</div>
      </div>
    </div>
  )
}

export default SplitStateV