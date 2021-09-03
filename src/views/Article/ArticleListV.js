import React, { useEffect, useState } from 'react'
import r3Api from '../../helpers/r3Api'

const ArticleListV = () => {

  const [ items, setItems ] = useState([])

  const readItems = async ({ limit, page, }) => {
    const res = await r3Api.article.readItems({ limit, page, }); //console.log(res.data)
    setItems(res.data)
  }

  useEffect(() => {
    readItems({ limit: 5 }).then()
  }, [])


  const outItems = items.map(item => (
    <div key={item._id}>{item.title}</div>
  ))

  return (
    <div>
      <h3>ArticleListV</h3>
      <div>
        { outItems }
      </div>
    </div>
  )
}

export default ArticleListV