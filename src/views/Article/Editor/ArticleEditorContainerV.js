import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import articleCreateRedux from '../../../redux/ducks/article/articleCreateRedux'
import ArticleEditorV from './ArticleEditorV'


const ArticleEditorContainerV = () => {
  const dispatch = useDispatch()

  const { content, title, } = useSelector(({ articleCreateRedux }) => ({
    content: articleCreateRedux.content,
    title: articleCreateRedux.title,
  }))

  const onChangeField = useCallback(payload => (
    dispatch(articleCreateRedux.changeField(payload))
  ), [dispatch])

  useEffect(() => (
    () => dispatch(articleCreateRedux.init())
  ), [dispatch])

  return (
    <ArticleEditorV
      content={content}
      onChangeField={onChangeField}
      title={title}
    />
  )
}


export default ArticleEditorContainerV