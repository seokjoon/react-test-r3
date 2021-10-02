import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


const TagBlock = styled.div``

const TagFormBlock = styled.form``

const TagListBlock = styled.div``

const TagListItemBlock = styled.div``


//tag 값이 바뀔때만 리렌더링
const TagListItem = React.memo(({ onDelete, tag }) => (
  <TagListItemBlock onClick={() => onDelete(tag)}>
    #{ tag }
  </TagListItemBlock>
))

//tags 값이 바뀔 때만 리렌더링
const TagList = React.memo(({ onDelete, tags }) => (
  <TagListBlock>
    { tags.map(tag => <TagListItem key={tag} onDelete={onDelete} tag={tag} />) }
  </TagListBlock>
))


const ArticleItemSetTagV = ({ onChangeTags, tags }) => {

  const [input, setInput] = useState('')
  const [tagsLocal, setTagsLocal] = useState([])

  const addTag = useCallback(tag => {
    if(!(tag)) return 0
    if(tagsLocal.includes(tag)) return 0
    // setTagsLocal([...tagsLocal, tag])
    const tagsNext = [...tagsLocal, tag]
    setTagsLocal(tagsNext)
    onChangeTags(tagsNext)
  }, [onChangeTags, tagsLocal])

  const onChange = useCallback(e => {
    setInput(e.target.value)
  }, [])

  const onDelete = useCallback(tag => {
    // setTagsLocal(tagsLocal.filter(t => t !== tag))
    const tagsNext = tagsLocal.filter(t => t !== tag)
    setTagsLocal(tagsNext)
    onChangeTags(tagsNext)
  }, [onChangeTags, tagsLocal])

  const onSubmit = useCallback(e => {
    e.preventDefault()
    addTag(input.trim())
    setInput('')
  }, [input, addTag])

  //tags 깂이 바뀔때
  useEffect(() => {
    setTagsLocal(tags)
  }, [tags])

  return (
    <TagBlock>
      <h3>태그</h3>
      <TagFormBlock onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="태그를 입력하세요."
          value={input}
        />
        <button type="submit">add</button>
      </TagFormBlock>
      <TagList onDelete={onDelete} tags={[tagsLocal]} />
    </TagBlock>
  )
}

export default ArticleItemSetTagV