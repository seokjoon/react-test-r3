import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import articlesReadRedux from '../../../redux/ducks/article/articlesReadRedux'
import ArticleListV from './ArticleListV'
import { withRouter } from 'react-router-dom'


const ArticleListContainerV = ({ location }) => {

  const dispatch = useDispatch()

  const { articles, error, loading, user, } = useSelector(({ articlesReadRedux, r3ApiLoadingRedux, }) => ({
    articles: articlesReadRedux.articles,
    error: articlesReadRedux.error,
    loading: r3ApiLoadingRedux.start, //loading['articlesRead/READ'],
    user: {}, //TODO
  }))

  useEffect(() => {
    const { page, tag, username, } = location.search; //console.log(location)
    dispatch(articlesReadRedux.read({ page, tag, username, }))
  }, [dispatch, location])

  return (
    <ArticleListV
      articles={articles}
      error={error}
      loading={loading}
      isAvailBtn={user}
    />
  )
}

export default withRouter(ArticleListContainerV)