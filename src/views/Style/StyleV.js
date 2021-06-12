import React from 'react'
import { Link, Route } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import StyleCssV from './StyleCssV'
import StyleCssModV from './StyleCssModV'

const StyleV = () => {

  const path = r3Const.pathPublic + '/style'

  return (
    <div>
      <h3>StyleV</h3>
      <ul>
        <li><Link to={path + '/css'}>css</Link></li>
        <li><Link to={path + '/cssMod'}>css module</Link></li>
      </ul>
      <div>
        <Route path={path + '/css'} component={StyleCssV} />
        <Route path={path + '/cssMod'} component={StyleCssModV} />
      </div>
    </div>
  )
}

export default StyleV