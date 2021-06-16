import React from 'react'

const ImmutableLegacyV = () => {

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

  const setFoo = {
    ...foo,
    a: {
      ...foo.a,
      c: {
        ...foo.a.c,
        e: [3, 4],
      },
      d: 3,
    },
  }


  return (
    <div>
      <h3>ImmutableLegacyV</h3>
      <div> {JSON.stringify(foo)} </div>
      <div> {JSON.stringify(setFoo)} </div>
    </div>
  )
}

export default ImmutableLegacyV