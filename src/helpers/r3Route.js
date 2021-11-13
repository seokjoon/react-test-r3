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


const R3Route = () => {

  const indexRoute = [
    { path: r3Const.path.index, element: <V /> }
  ]

  const articleRoute = [
    { path: r3Const.path.article , element: <ArticleV /> },
  ]

  const asyncRoute = [
    { path: r3Const.path.async , element: <AsyncV /> },
  ]

  const contextRoute = [
    { path: r3Const.path.context , element: <ContextV /> },
  ]

  const hookRoute = [
    { path: r3Const.path.hook , element: <HookV /> },
  ]

  const immutableRoute = [
    { path: r3Const.path.immutable , element: <ImmutableV /> },
  ]

  const middlewareRoute = [
    { path: r3Const.path.middleware , element: <MiddlewareV /> },
  ]

  const optimaRoute = [
    { path: r3Const.path.optima , element: <OptimaV /> },
  ]

  const reduxRoute = [
    { path: r3Const.path.redux , element: <ReduxV /> },
  ]

  const routeRoute = [
    { path: r3Const.path.route , element: <RouteRouteV /> },
  ]

  const splitRoute = [
    { path: r3Const.path.split , element: <SplitV /> },
  ]

  const styleRoute = [
    { path: r3Const.path.style , element: <StyleV /> },
  ]

  const userRoute = [
    { path: r3Const.path.user , element: <UserV /> },
  ]

  return useRoutes([
    ...indexRoute,
    ...articleRoute,
    ...asyncRoute,
    ...contextRoute,
    ...hookRoute,
    ...immutableRoute,
    ...middlewareRoute,
    ...optimaRoute,
    ...reduxRoute,
    ...routeRoute,
    ...splitRoute,
    ...styleRoute,
    ...userRoute,
  ])
}


export default R3Route