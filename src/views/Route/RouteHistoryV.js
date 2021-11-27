import React from 'react'
import { useNavigate } from 'react-router-dom'

const RouteHistoryV = () => {

  const nav = useNavigate()

  const goBack = () => {
    nav(-1)
  }

  const goRoot = () => {
    nav('/')
  }

  // useEffect(() => history.block('foo'), [history]) //페이지 이탈시 확인

  return (
    <div>
      <h3>RouteHistoryV</h3>
      <button onClick={goBack}>go back</button>
      <button onClick={goRoot}>go root</button>
    </div>
  )
}

export default RouteHistoryV