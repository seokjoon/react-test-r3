import React, { useState } from 'react'

const SplitStateV = () => {

  const [foo, setFoo] = useState()

  const handleClick = async () => {
    setFoo((await import('./SplitStateFooV')).default)
  }

  return (
    <div>
      <button onClick={handleClick}>setFoo</button>
      <div>{ foo && foo }</div>
    </div>
  )
}

export default SplitStateV