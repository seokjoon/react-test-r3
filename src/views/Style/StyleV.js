import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const StyleV = () => {
  return (
    <div>
      <h3>StyleV</h3>
      <ul>
        <li><Link to={'css'}>css</Link></li>
        <li><Link to={'cssMod'}>css module</Link></li>
        <li><Link to={'responsive'}>responsive</Link></li>
        <li><Link to={'userCreate'}>user create</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default StyleV