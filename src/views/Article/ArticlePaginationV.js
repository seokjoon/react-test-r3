import styled from 'styled-components'
import qs from 'qs'
import StyleUserCreateButton from '../Style/StyleUserCreateButton'


const PaginationBlock = styled.div``

const PageNum = styled.div``

const buildLink = ({ page, tag, username, }) => {
  const query = qs.stringify({ page, tag })
  return username ? `/article/user/${username}/?${query}` : `/article/?${query}`
}

const ArticlePaginationV = ({ page, pageLast, tag, username, }) => {
  return (
    <PaginationBlock>

      <StyleUserCreateButton
        disabled={ page === 1 }
        to={ (page === 1) ? undefined : buildLink({ page: page - 1, tag, username, }) }
      >
        PREV
      </StyleUserCreateButton>

      <PageNum>{ page }</PageNum>

      <StyleUserCreateButton
        disabled={ page === pageLast }
        to={ page === pageLast ? undefined : buildLink({ page: page + 1, tag, username, }) }
      >
        NEXT
      </StyleUserCreateButton>

    </PaginationBlock>
  )
}


export default ArticlePaginationV