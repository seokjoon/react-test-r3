import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import articleReadRedux from '../../redux/ducks/article/articleReadRedux'
import ArticleItemV from './ArticleItemV'

const ArticleItemContainerV = ({ match }) => {
  const { id } = match.params

  const dispatch = useDispatch()

  const { article, error, loading, } = useSelector(({ articleReadRedux, r3ApiLoadingRedux }) => ({
    article: articleReadRedux.article,
    error: articleReadRedux.error,
    //loading: r3ApiLoadingRedux.loading['articleRead/READ'],
    loading: r3ApiLoadingRedux.start,
  }))


  useEffect(() => {
    dispatch(articleReadRedux.read(id))
    return () => { dispatch(articleReadRedux.readUnload()) }
  }, [dispatch, id])


  return (
    <ArticleItemV
      article={article}
      error={error}
      loading={loading}
    />
  )
}


export default withRouter(ArticleItemContainerV)