import React from 'react'
import { Link, Route, Routes, } from 'react-router-dom'
import r3Const from '../../helpers/r3Const'
import R3Route from '../../helpers/r3Route'

const RouteV = () => {

  const { path } = r3Const

  return (
    <div>

      <div style={{ float: 'left', width: '30%', }}>
        <ul>
          <li><Link to={path.index}>Index</Link></li>
          <li><Link to={path.article}>Article</Link></li>
          <li><Link to={path.async}>Async</Link></li>
          <li><Link to={path.context}>Context</Link></li>
          <li><Link to={path.hook}>Hook</Link></li>
          <li><Link to={path.immutable}>Immutable</Link></li>
          <li><Link to={path.middleware}>Middleware</Link></li>
          <li><Link to={path.optima}>Optima</Link></li>
          <li><Link to={path.redux}>Redux</Link></li>
          <li><Link to={path.route}>Route</Link></li>
          <li><Link to={path.split}>Split</Link></li>
          <li><Link to={path.style}>Style</Link></li>
          <li><Link to={path.user}>User</Link></li>
        </ul>
      </div>

      <div style={{ float: 'left', width: '70%', }}>

        <R3Route />

        {/*<Routes>*/}
        {/*  <Route path={path + '/'} element={<RouteIndexV />}/>*/}
        {/*  <Route path={pathArticle} element={<ArticleV />}>*/}
        {/*    <Route path={pathArticle + '/editor'} element={<ArticleEditorV/>}/>*/}
        {/*    <Route path={pathArticle + '/:id'} element={<ArticleItemContainerV/>}/>*/}
        {/*    <Route path={pathArticle + '/set/:id'} element={<ArticleItemSetV/>}/>*/}
        {/*    /!*<Route path={[ pathArticle + '/', pathArticle + '/user/:username', ]} element={<ArticleListContainerV/>}/>*!/*/}
        {/*    <Route path={pathArticle + '/'} element={<ArticleListContainerV />}/>*/}
        {/*    <Route path={pathArticle + '/user/:username'} element={<ArticleListContainerV />}/>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathAsync} element={<AsyncV />}>*/}
        {/*    <Route path={pathAsync + '/asyncAwaitAxios'} element={<AsyncAwaitAxiosV />} />*/}
        {/*    <Route path={pathAsync + '/asyncHookPromise'} element={<AsyncHookPromiseV />} />*/}
        {/*  </Route>*/}
        {/*  <Route path={pathContext} element={<ContextV />}>*/}
        {/*    <Route path={pathContext + '/contextFoo'} element={<ContextFooV />} />*/}
        {/*    <Route path={pathContext + '/contextDynamic'} element={<ContextDynamicV />} />*/}
        {/*  </Route>*/}
        {/*  <Route path={pathHook} element={<HookV />}>*/}
        {/*    <Route path={pathHook + '/useCustom'} element={<HookUseCustomV />} />*/}
        {/*    <Route path={pathHook + '/useCallback'} element={<HookUseCallbackV />} />*/}
        {/*    <Route path={pathHook + '/useMemo'} element={<HookUseMemoV />} />*/}
        {/*    <Route path={pathHook + '/useReducerInput'} element={<HookUseReducerInputV />} />*/}
        {/*    <Route path={pathHook + '/useReducer'} element={<HookUseReducerV />} />*/}
        {/*    <Route path={pathHook + '/useEffect'} element={<HookUseEffectV />} />*/}
        {/*    <Route path={pathHook + '/useState'} element={<HookUseStateV />} />*/}
        {/*  </Route>*/}
        {/*  <Route path={pathImmutable} element={<ImmutableV />}>*/}
        {/*    <Route path={pathImmutable + '/legacy'} element={<ImmutableLegacyV />} />*/}
        {/*    <Route path={pathImmutable + '/immer'} element={<ImmutableImmerV />} />*/}
        {/*  </Route>*/}
        {/*  <Route path={pathMiddleware} element={<MiddlewareV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathOptima} element={<OptimaV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathRedux} element={<ReduxV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathRoute} element={<RouteRouteV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathSplit} element={<SplitV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathStyle} element={<StyleV />}>*/}
        {/*  </Route>*/}
        {/*  <Route path={pathUser} element={<UserV />}>*/}
        {/*  </Route>*/}
        {/*</Routes>*/}
      </div>

      <div style={{ clear: 'both' }}></div>

    </div>
  )
}

export default RouteV