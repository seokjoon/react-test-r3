import React from 'react'
// import { withRouter } from 'react-router-dom'

const RouteWithRouterV = ({ location, match, history }) => {
  return (
    <div>
      <br /> <br /> <br />
      <h3>RouteWithRouter</h3>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
    </div>
  )
}

// export default withRouter(RouteWithRouterV)
export default RouteWithRouterV

