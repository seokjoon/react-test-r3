import React, { useState } from 'react'
import produce from 'immer'

const ImmutableImmerV = () => {

  const foo = {
    a: {
      c: {
        e: [1, 2],
        f: 3,
      },
      d: 2,
    },
    b: 1,
  }

  const [bar, setBar] = useState(foo)

  const onSetBar = () => {
    setBar({
      ...foo,
    })
  }

  const onSetBarImmer = () => {
    setBar(produce(foo, param => {
      param.a.c.f = Date.now()
    }))
  }

  return (
    <div>
      <h3>ImmutableImmerV</h3>
      <div>{JSON.stringify(foo)}</div>
      <div>{JSON.stringify(bar)}</div>
      <div> <button onClick={onSetBar}>setBar</button> </div>
      <div> <button onClick={onSetBarImmer}>setBarImmer</button> </div>
    </div>
  )
}

export default ImmutableImmerV