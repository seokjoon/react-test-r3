import { useRoutes } from 'react-router-dom'
import r3Const from './r3Const'
import V from '../views/V'
import ArticleV from '../views/Article/ArticleV'
import AsyncV from '../views/Async/AsyncV'
import HookV from '../views/Hook/HookV'
import ImmutableV from '../views/Immutable/ImmutableV'
import MiddlewareV from '../views/Middleware/MiddlewareV'
import OptimaV from '../views/Optima/OptimaV'
import ReduxV from '../views/Redux/ReduxV'
import RouteRouteV from '../views/Route/RouteRouteV'
import SplitV from '../views/Split/SplitV'
import StyleV from '../views/Style/StyleV'
import UserV from '../views/User/UserV'
import ContextV from '../views/Context/ContextV'
import ArticleEditorV from '../views/Article/Editor/ArticleEditorV'
import ArticleItemContainerV from '../views/Article/Item/ArticleItemContainerV'
import ArticleItemSetV from '../views/Article/Item/Set/ArticleItemSetV'
import ArticleListContainerV from '../views/Article/List/ArticleListContainerV'
import AsyncAwaitAxiosV from '../views/Async/AsyncAwaitAxiosV'
import AsyncHookPromiseV from '../views/Async/AsyncHookPromiseV'
import ContextDynamicV from '../views/Context/ContextDynamicV'
import ContextFooV from '../views/Context/ContextFooV'
import HookUseCustomV from '../views/Hook/HookUseCustomV'
import HookUseCallbackV from '../views/Hook/HookUseCallbackV'
import HookUseMemoV from '../views/Hook/HookUseMemoV'
import HookUseReducerInputV from '../views/Hook/HookUseReducerInputV'
import HookUseReducerV from '../views/Hook/HookUseReducerV'
import HookUseEffectV from '../views/Hook/HookUseEffectV'
import HookUseStateV from '../views/Hook/HookUseStateV'


const R3Route = () => {

  const indexRoute = {
    path: r3Const.path.index, element: <V />
  }

  const articleRoute = {
    path: r3Const.path.article , element: <ArticleV />,
    children: [
      { path: 'editor', element: <ArticleEditorV /> },
      { path: ':id', element: <ArticleItemContainerV /> },
      { path: 'set/:id', element: <ArticleItemSetV /> },
      { path: '', element: <ArticleListContainerV /> },
      { path: 'user/:username', element: <ArticleListContainerV /> },
    ],
  }

  const asyncRoute = {
    path: r3Const.path.async , element: <AsyncV />,
    children: [
      { path: 'asyncAwaitAxios', element: <AsyncAwaitAxiosV /> },
      { path: 'asyncHookPromise', element: <AsyncHookPromiseV /> },
    ],
  }

  const contextRoute = {
    path: r3Const.path.context , element: <ContextV />,
    children: [
      { path: 'contextFoo', element: <ContextFooV /> },
      { path: 'contextDynamic', element: <ContextDynamicV /> },
    ],
  }

  const hookRoute = {
    path: r3Const.path.hook , element: <HookV />,
    children: [
      { path: 'useCustom', element: <HookUseCustomV /> },
      { path: 'useCallback', element: <HookUseCallbackV /> },
      { path: 'useMemo', element: <HookUseMemoV /> },
      { path: 'useReducerInput', element: <HookUseReducerInputV /> },
      { path: 'useReducer', element: <HookUseReducerV /> },
      { path: 'useEffect', element: <HookUseEffectV /> },
      { path: 'useState', element: <HookUseStateV /> },
    ],
  }

  const immutableRoute = {
    path: r3Const.path.immutable , element: <ImmutableV />
  }

  const middlewareRoute = {
    path: r3Const.path.middleware , element: <MiddlewareV />
  }

  const optimaRoute = {
    path: r3Const.path.optima , element: <OptimaV />
  }

  const reduxRoute = {
    path: r3Const.path.redux , element: <ReduxV />
  }

  const routeRoute = {
    path: r3Const.path.route , element: <RouteRouteV />
  }

  const splitRoute = {
    path: r3Const.path.split , element: <SplitV />
  }

  const styleRoute = {
    path: r3Const.path.style , element: <StyleV />
  }

  const userRoute = {
    path: r3Const.path.user , element: <UserV />
  }

  return useRoutes([
    indexRoute,
    articleRoute,
    asyncRoute,
    contextRoute,
    hookRoute,
    immutableRoute,
    middlewareRoute,
    optimaRoute,
    reduxRoute,
    routeRoute,
    splitRoute,
    styleRoute,
    userRoute,
  ])
}


export default R3Route