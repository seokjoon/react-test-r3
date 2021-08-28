import React from 'react'
import r3Const from '../../helpers/r3Const'
import { Link, Route } from 'react-router-dom'
import ArticleListV from './ArticleListV'
import ArticleItemV from './ArticleItemV'
import ArticleItemSetV from './ArticleItemSetV'
import ArticleEditorV from './ArticleEditorV'

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
        <Route path={path + '/editor'} component={ArticleEditorV} exact />
        <Route path={path + '/:id'} component={ArticleItemV} exact />
        <Route path={path + '/set/:id'} component={ArticleItemSetV} exact />
        <Route path={[
          path + '/',
          path + '/user/:username',
        ]} component={ArticleListV} exact />
      </div>
    </div>
  )
}

export default ArticleV