import React, { useEffect } from 'react'

const RouteHistoryV = ({history}) => {

  const goBack = () => {
    history.goBack()
  }

  const goRoot = () => {
    history.push('/')
  }

  useEffect(() => history.block('foo'), [history]) //페이지 이탈시 확인

  return (
    <div>
      <h3>RouteHistoryV</h3>
      <button onClick={goBack}>go back</button>
      <button onClick={goRoot}>go root</button>
    </div>
  )
}

export default RouteHistoryV