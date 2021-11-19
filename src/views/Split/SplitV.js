import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SplitV = () => {
  return (
    <div>
      <ul>
        <li><Link to={'state'}>SplitStateV</Link></li>
        <li><Link to={'lazy'}>SplitLazyV</Link></li>
        <li><Link to={'loadableComponent'}>SplitLoadableComponentV</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SplitV