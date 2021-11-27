import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const OptimaV = () => {
  return (
    <div>
      <h3>OptimaV</h3>
      <ul>
        {/*<li> <Link to={'scroll'}>OptimaScroll</Link></li>*/}
        <li><s>OptimaScroll</s></li>
        <li> <Link to={'list'}>OptimaList</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default OptimaV