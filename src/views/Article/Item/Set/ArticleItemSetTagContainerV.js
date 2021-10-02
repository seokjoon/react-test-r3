import { useDispatch, useSelector } from 'react-redux'
import articleCreateRedux from '../../../../redux/ducks/article/articleCreateRedux'
import ArticleItemSetTagV from './ArticleItemSetTagV'

const ArticleItemSetTagContainerV = () => {
  const dispatch = useDispatch()

  //const tags = useSelector(state => state.articleCreateRedux.tags)
  const tags = useSelector(({ articleCreateRedux }) => (articleCreateRedux.tags))

  const onChangeTags = tagsNext => {
    dispatch(articleCreateRedux.changeField({
      key: 'tags',
      val: tagsNext,
    }))
  }

  return <ArticleItemSetTagV
    onChangeTags={onChangeTags}
    tags={tags}
  />
}

export default ArticleItemSetTagContainerV