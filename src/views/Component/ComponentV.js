import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'

const ComponentV = () => {

  const path = r3Const.pathPublic + '/component'

  return (
    <div>
      <h3>ComponentV</h3>
      <ul>
        <Link to={path + '/props'}>ComponentPropsV</Link>
      </ul>
      <div>
        <div><Route path={path + '/props'} /></div>
      </div>
    </div>
  )
}

export default ComponentV