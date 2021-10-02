import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TagsBlock = styled.div``

const ArticleListItemTagsV = ({ tags }) => {
  return (
    <TagsBlock>
      { tags.map(tag => (
        <Link to={`/?tag=${tag}`} key={tag}>
          #{ tag }
        </Link>
      )) }
    </TagsBlock>
  )
}

export default ArticleListItemTagsV