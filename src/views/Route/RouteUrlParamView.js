import React from 'react'

const RouteUrlParamView = ({match}) => {

  const {foo} = match.params

  return (
    <div>
      <h3>RouteUrlParamView</h3>
      {foo}
    </div>
  )
}

export default RouteUrlParamView