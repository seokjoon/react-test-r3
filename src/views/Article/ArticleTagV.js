import React from 'react'
import styled from 'styled-components'


const TagBlock = styled.div``

const TagFormBlock = styled.form``

const TagListBlock = styled.div``

const TagListItemBlock = styled.div``

const ArticleTagV = () => {

  //tag 값이 바뀔때만 리렌더링
  const TagListItem = React.memo(({ tag }) => <TagListItemBlock>#{ tag }</TagListItemBlock>)

  //tags 값이 바뀔 때만 리렌더링
  const TagList = React.memo(({ tags }) => (
    <TagListBlock>
      { tags.map(tag => <TagListItem key={tag} tag={tag} />) }
    </TagListBlock>
  ))

  return (
    <TagBlock>
      <h3>태그</h3>
      <TagFormBlock>
        <input placeholder="태그를 입력하세요." />
        <button type="submit">add</button>
      </TagFormBlock>
      <TagList tags={['foo', 'bar',]} />
    </TagBlock>
  )
}

export default ArticleTagV