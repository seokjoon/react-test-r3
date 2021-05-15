import React, { Fragment, useState } from 'react'

const HookUseStateCom = () => {

  const [ ctr, setCtr ] = useState(0)

  return (
    <Fragment>
      <button onClick={() => setCtr(ctr + 1)}>setCtr</button>
      { ctr }
    </Fragment>
  )
}

export default HookUseStateCom