import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleItemSetBtnV from './ArticleItemSetBtnV'
import articleCreateRedux from '../../../../redux/ducks/article/articleCreateRedux'
// import { withRouter } from 'react-router-dom'
import r3Const from '../../../../helpers/r3Const'


const ArticleItemSetBtnContainerV = ({ history }) => {

  const dispatch = useDispatch()

  const { content, create, createErr, tags, title, } = useSelector(({ articleCreateRedux }) => ({
    content: articleCreateRedux.content,
    create: articleCreateRedux.create,
    createErr: articleCreateRedux.createErr,
    tags: articleCreateRedux.tags,
    title: articleCreateRedux.title,
  }))

  const onCancel = () => {
    history.goBack()
  }

  const onCreate = () => {
    dispatch(
      articleCreateRedux.create({
        content,
        tags,
        title,
      })
    )
  }

  useEffect(() => {
    if(create) {
      // const { _id, user } = create
      //history.push('/' + user.username + '/' + _id)
      history.push(r3Const.pathPublic + '/article/' + create._id)
    }
    if(createErr) console.log(createErr)
  }, [create, createErr, history])

  return (
    <ArticleItemSetBtnV
      onCancel={onCancel}
      onCreate={onCreate}
    />
  )
}


// export default withRouter(ArticleItemSetBtnContainerV)
export default ArticleItemSetBtnContainerV
