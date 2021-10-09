import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import articlesReadRedux from '../../../redux/ducks/article/articlesReadRedux'
import ArticleListV from './ArticleListV'

const ArticleListContainerV = ({ match }) => {

  const { page, tag, username, } = match.params

  const dispatch = useDispatch()

  const { articles, error, loading, user, } = useSelector(({ articlesRedux, r3ApiLoadingRedux, }) => ({
    articles: articlesReadRedux.articles,
    error: articlesReadRedux.error,
    loading: r3ApiLoadingRedux.start, //loading['articlesRead/READ'],
    user: {}, //XXX
  }))

  useEffect(() => {
    dispatch(articlesReadRedux.read({ page, tag, username, }))
  }, [dispatch, page, tag, username,])

  return (
    <ArticleListV
      articles={articles}
      error={error}
      loading={loading}
      isAvailBtn={user}
    />
  )
}

export default ArticleListContainerV