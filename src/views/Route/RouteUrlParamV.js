import React from 'react'

const RouteUrlParamV = ({match}) => {

  const {foo} = match.params

  return (
    <div>
      <h3>RouteUrlParamV</h3>
      {foo}
    </div>
  )
}

export default RouteUrlParamV