import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Outlet, } from 'react-router-dom'

const ArticleV = () => {
  const path = r3Const.pathPublic + '/article'

  return (
    <div>
      <h3>ArticleV</h3>
      <ul>
        <li><Link to={path + '/editor'}>ArticleEditor</Link></li>
        <li><Link to={path + '/1'}>ArticleItem</Link></li>
        <li><Link to={path + '/set/1'}>ArticleItemSet</Link></li>
        <li><Link to={path + '/'}>ArticleList</Link></li>
        <li><Link to={path + '/user/foo'}>ArticleList by username</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ArticleV