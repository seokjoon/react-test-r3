import React from 'react'
import { Link, Outlet, } from 'react-router-dom'

const ArticleV = () => {
  return (
    <div>
      <h3>ArticleV</h3>
      <ul>
        <li><Link to={'editor'}>ArticleEditor</Link></li>
        <li><Link to={'1'}>ArticleItem</Link></li>
        <li><Link to={'set/1'}>ArticleItemSet</Link></li>
        <li><Link to={''}>ArticleList</Link></li>
        <li><Link to={'user/foo'}>ArticleList by username</Link></li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ArticleV