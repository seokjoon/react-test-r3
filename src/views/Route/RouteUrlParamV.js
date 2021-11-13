import React from 'react'
import { useParams } from 'react-router-dom'

const RouteUrlParamV = () => {

  const { foo } = useParams()

  return (
    <div>
      <h3>RouteUrlParamV</h3>
      {foo}
    </div>
  )
}

export default RouteUrlParamV