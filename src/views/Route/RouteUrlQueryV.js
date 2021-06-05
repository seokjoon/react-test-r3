import React from 'react'
import qs from 'qs'

const RouteUrlQueryV = ({ location }) => {

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // '?' 생략
  })

  return (
    <div>
      <h3>RouteUrlQueryV</h3>
      {query.foo}
    </div>
  )
}

export default RouteUrlQueryV