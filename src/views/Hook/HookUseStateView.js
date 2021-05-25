import React, { Fragment, useState } from 'react'

const HookUseStateView = () => {

  const [ ctr, setCtr ] = useState(0)

  return (
    <Fragment>
      <h3>HookUseStateView</h3>
      <button onClick={() => setCtr(ctr + 1)}>setCtr</button>
      { ctr }
    </Fragment>
  )
}

export default HookUseStateView