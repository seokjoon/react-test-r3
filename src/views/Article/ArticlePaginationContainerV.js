import { useSelector } from 'react-redux'
import qs from 'qs'
import ArticlePaginationV from './ArticlePaginationV'
import { withRouter } from 'react-router-dom'

const ArticlePaginationContainerV = ({ location, }) => {

  const { articles, loading, pageLast } = useSelector(({ articlesReadRedux, r3ApiLoadingRedux }) => ({
    articles: articlesReadRedux.articles,
    loading: r3ApiLoadingRedux.start,
    pageLast: articlesReadRedux.pageLast,
  }))

  if((!(articles)) || (loading)) return null

  const { page = 1, tag, username, } = qs.parse(location.search, { ignoreQueryPrefix: true, })

  return (
    <ArticlePaginationV
      page={parseInt(page, 10)}
      pageLast={pageLast}
      tag={tag}
      username={username}
    />
  )
}


export default withRouter(ArticlePaginationContainerV)