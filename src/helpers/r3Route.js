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
import ImmutableLegacyV from '../views/Immutable/ImmutableLegacyV'
import ImmutableImmerV from '../views/Immutable/ImmutableImmerV'
import MiddlewareApiSagaContainerV from '../views/Middleware/MiddlewareApiSagaContainerV'
import MiddlewareApiThunkContainerV from '../views/Middleware/MiddlewareApiThunkContainerV'
import MiddlewareCounterSagaContainerV from '../views/Middleware/MiddlewareCounterSagaContainerV'
import MiddlewareCounterThunkContainerV from '../views/Middleware/MiddlewareCounterThunkContainerV'
import MiddlewareCounterContainerV from '../views/Middleware/MiddlewareCounterContainerV'
import OptimaListV from '../views/Optima/OptimaListV'
import OptimaScrollV from '../views/Optima/OptimaScrollV'
import ReduxCounterV from '../views/Redux/ReduxCounterV'
import ReduxTodoV from '../views/Redux/ReduxTodoV'
import RouteMultiV from '../views/Route/RouteMultiV'
import RouteHistoryV from '../views/Route/RouteHistoryV'
import RouteNavLinkV from '../views/Route/RouteNavLinkV'
import RouteSwitchV from '../views/Route/RouteSwitchV'
import RouteUrlParamV from '../views/Route/RouteUrlParamV'
import RouteUrlQueryV from '../views/Route/RouteUrlQueryV'
import SplitStateV from '../views/Split/SplitStateV'
import SplitLazyV from '../views/Split/SplitLazyV'
import SplitLoadableComponentV from '../views/Split/SplitLoadableComponentV'
import StyleCssV from '../views/Style/StyleCssV'
import StyleCssModV from '../views/Style/StyleCssModV'
import StyleResponsiveV from '../views/Style/StyleResponsiveV'
import StyleUserCreateV from '../views/Style/StyleUserCreateV'
import UserCreateV from '../views/User/UserCreateV'
import UserCreateTokenV from '../views/User/UserCreateTokenV'


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
    path: r3Const.path.immutable , element: <ImmutableV />,
    children: [
      { path: 'legacy', element: <ImmutableLegacyV /> },
      { path: 'immer', element: <ImmutableImmerV />},
    ],
  }

  const middlewareRoute = {
    path: r3Const.path.middleware , element: <MiddlewareV />,
    children: [
      { path: 'counter', element: <MiddlewareCounterContainerV /> },
      { path: 'counterThunk', element:<MiddlewareCounterThunkContainerV /> },
      { path: 'counterSaga', element: <MiddlewareCounterSagaContainerV /> },
      { path: 'apiThunk', element: <MiddlewareApiThunkContainerV /> },
      { path: 'apiSaga', element: <MiddlewareApiSagaContainerV /> },
    ],
  }

  const optimaRoute = {
    path: r3Const.path.optima , element: <OptimaV />,
    children: [
      { path: 'scroll', element: <OptimaScrollV /> },
      { path: 'list', element: <OptimaListV /> },
    ],
  }

  const reduxRoute = {
    path: r3Const.path.redux , element: <ReduxV />,
    children: [
      { path: 'reduxCounter', element: <ReduxCounterV /> },
      { path: 'reduxTodo', element: <ReduxTodoV /> },
    ],
  }

  const routeRoute = {
    path: r3Const.path.route , element: <RouteRouteV />,
    children: [
      { path: 'err', element: <RouteMultiV /> },
      { path: 'na', element: <RouteMultiV /> },
      { path: 'history', element: <RouteHistoryV /> },
      {
        path: 'navLink', element: <RouteNavLinkV />,
        children: [
          { path: 'foo', element: <RouteNavLinkV /> },
          { path: 'bar', element: <RouteNavLinkV /> },
        ],
      },
      {
        path: 'switch', element: <RouteSwitchV />,
        children: [
          { path: 'foo', element: <RouteSwitchV /> },
          { path: 'bar', element: <RouteSwitchV /> },
        ],
      },
      { path: 'urlParam/:foo', element: <RouteUrlParamV /> },
      { path: 'urlQuery', element: <RouteUrlQueryV /> },
    ],
  }

  const splitRoute = {
    path: r3Const.path.split , element: <SplitV />,
    children: [
      { path: 'state', element: <SplitStateV /> },
      { path: 'lazy', element: <SplitLazyV /> },
      { path: 'loadableComponent', element: <SplitLoadableComponentV /> },
    ],
  }

  const styleRoute = {
    path: r3Const.path.style , element: <StyleV />,
    children: [
      { path: 'css', element: <StyleCssV /> },
      { path: 'cssMod', element: <StyleCssModV /> },
      { path: 'responsive', element: <StyleResponsiveV /> },
      { path: 'userCreate', element: <StyleUserCreateV /> },
    ],
  }

  const userRoute = {
    path: r3Const.path.user , element: <UserV />,
    children: [
      { path: 'create', element: <UserCreateV /> },
      { path: 'createToken', element: <UserCreateTokenV /> },
    ],
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