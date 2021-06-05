import React from 'react'
import qs from 'qs'

const RouteUrlQueryView = ({ location }) => {

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // '?' 생략
  })

  return (
    <div>
      <h3>RouteUrlQueryView</h3>
      {query.foo}
    </div>
  )
}

export default RouteUrlQueryView