import React from 'react'
import { Link, Route, Routes, } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import OptimaV from '../Optima/OptimaV'
import HookV from '../Hook/HookV'
import RouteIndexV from './RouteIndexV'
import RouteRouteV from './RouteRouteV'
import StyleV from '../Style/StyleV'
import ImmutableV from '../Immutable/ImmutableV'
import AsyncV from '../Async/AsyncV'
import ContextV from '../Context/ContextV'
import ReduxV from '../Redux/ReduxV'
import MiddlewareV from '../Middleware/MiddlewareV'
import SplitV from '../Split/SplitV'
import UserV from '../User/UserV'
import ArticleV from '../Article/ArticleV'
import AsyncAwaitAxiosV from '../Async/AsyncAwaitAxiosV'
import AsyncHookPromiseV from '../Async/AsyncHookPromiseV'
import ArticleEditorV from '../Article/Editor/ArticleEditorV'
import ArticleItemContainerV from '../Article/Item/ArticleItemContainerV'
import ArticleItemSetV from '../Article/Item/Set/ArticleItemSetV'
import ArticleListContainerV from '../Article/List/ArticleListContainerV'
import ContextFooV from '../Context/ContextFooV'
import ContextDynamicV from '../Context/ContextDynamicV'

const RouteV = () => {

  const path = r3Const.pathPublic
  const pathArticle = `${path}/article`
  const pathAsync = `${path}/async`
  const pathContext = `${path}/context`
  const pathHook = `${path}/hook`
  const pathImmutable = `${path}/immutable`
  const pathMiddleware = `${path}/middleware`
  const pathOptima = `${path}/optima`
  const pathRedux = `${path}/redux`
  const pathRoute = `${path}/route`
  const pathSplit = `${path}/split`
  const pathStyle = `${path}/style`
  const pathUser = `${path}/user`

  return (
    <div>
      <div style={{ float: 'left', width: '30%', }}>
        <ul>
          <li><Link to={path}>Index</Link></li>
          <li><Link to={pathArticle}>Article</Link></li>
          <li><Link to={pathAsync}>Async</Link></li>
          <li><Link to={pathContext}>Context</Link></li>
          <li><Link to={pathHook}>Hook</Link></li>
          <li><Link to={pathImmutable}>Immutable</Link></li>
          <li><Link to={pathMiddleware}>Middleware</Link></li>
          <li><Link to={pathOptima}>Optima</Link></li>
          <li><Link to={pathRedux}>Redux</Link></li>
          <li><Link to={pathRoute}>Route</Link></li>
          <li><Link to={pathSplit}>Split</Link></li>
          <li><Link to={pathStyle}>Style</Link></li>
          <li><Link to={pathUser}>User</Link></li>
        </ul>
      </div>
      <div style={{ float: 'left', width: '70%', }}>
        <Routes>
          <Route path={path + '/'} element={<RouteIndexV />}/>
          <Route path={pathArticle} element={<ArticleV />}>
            <Route path={pathArticle + '/editor'} element={<ArticleEditorV/>}/>
            <Route path={pathArticle + '/:id'} element={<ArticleItemContainerV/>}/>
            <Route path={pathArticle + '/set/:id'} element={<ArticleItemSetV/>}/>
            {/*<Route path={[ pathArticle + '/', pathArticle + '/user/:username', ]} element={<ArticleListContainerV/>}/>*/}
            <Route path={pathArticle + '/'} element={<ArticleListContainerV />}/>
            <Route path={pathArticle + '/user/:username'} element={<ArticleListContainerV />}/>
          </Route>
          <Route path={pathAsync} element={<AsyncV />}>
            <Route path={pathAsync + '/asyncAwaitAxios'} element={<AsyncAwaitAxiosV />} />
            <Route path={pathAsync + '/asyncHookPromise'} element={<AsyncHookPromiseV />} />
          </Route>
          <Route path={pathContext} element={<ContextV />}>
            <Route path={pathContext + '/contextFoo'} element={<ContextFooV />} />
            <Route path={pathContext + '/contextDynamic'} element={<ContextDynamicV />} />
          </Route>
          <Route path={path + '/hook'} element={<HookV />}/>
          <Route path={path + '/immutable'} element={<ImmutableV />}/>
          <Route path={path + '/middleware'} element={<MiddlewareV />}/>
          <Route path={path + '/optima'} element={<OptimaV />}/>
          <Route path={path + '/redux'} element={<ReduxV />}/>
          <Route path={path + '/route'} element={<RouteRouteV />}/>
          <Route path={path + '/split'} element={<SplitV />}/>
          <Route path={path + '/style'} element={<StyleV />}/>
          <Route path={path + '/user'} element={<UserV />}/>
        </Routes>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default RouteV