import React, { useEffect, useState } from 'react'
import r3Api from '../../../helpers/r3Api'
import { Link } from 'react-router-dom'
import r3Const from '../../../helpers/r3Const'
import ArticleListV from './ArticleListV'

const ArticleListContainerLegacyV = ({ match }) => {

  const [ items, setItems ] = useState([])

  const readItems = async ({ ...rest }) => {
    const res = await r3Api.article.readItems(rest); //console.log(res.data)
    setItems(res.data)
  }

  useEffect(() => {
    const { username } = match.params; //console.log(match, username)
    readItems({
      limit: 5,
      username,
    }).then()
  }, [match])

  const outItems = items.map(item => (
    <div key={item._id}>
      <Link to={r3Const.pathPublic + '/article/' + item._id}>
        {item.title}
      </Link>
    </div>
  ))

  return (
    <div>
      <h3>ArticleListContainerLegacyV</h3>
      <div>
        { outItems }
      </div>

      <ArticleListV />
    </div>
  )
}

export default ArticleListContainerLegacyV