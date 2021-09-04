import { useDispatch, useSelector } from 'react-redux'
import articleCreateRedux from '../../redux/ducks/article/articleCreateRedux'
import ArticleTagV from './ArticleTagV'

const ArticleTagContainerV = () => {
  const dispatch = useDispatch()

  //const tags = useSelector(state => state.articleCreateRedux.tags)
  const tags = useSelector(({ articleCreateRedux }) => (articleCreateRedux.tags))

  const onChangeTags = tagsNext => {
    dispatch(articleCreateRedux.changeField({
      key: 'tags',
      val: tagsNext,
    }))
  }

  return <ArticleTagV
    onChangeTags={onChangeTags}
    tags={tags}
  />
}

export default ArticleTagContainerV