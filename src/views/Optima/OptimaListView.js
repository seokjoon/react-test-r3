import React, { useCallback, useRef, useState } from 'react'
import OptimaListItemView from './OptimaListItemView'

const OptimaListView = () => {

  const initItems = () => {
    const outs = []
    for (let i = 1; i <= 2; i++) {
      outs.push({
        id: i,
        title: 'title ' + i
      })
    }
    return outs
  }

  const [items, setItems] = useState(initItems) //렌더링 발생시마다가 아닌, 처음 렌더링시에만 initItems 실행

  const idNext = useRef(items.length + 1)

  const onDelete = useCallback(id => {
    //setItems(items.filter(item => item.id !== id))
    setItems(items => items.filter(item => item.id !== id)) //state 변경 함수에 파라미터로 상태가 아닌 함수를 제공
    //}, [items])
  }, [])

  const onInsert = useCallback(() => {
    const item = {
      id: idNext.current,
      title: Date.now(),
    }
    //setItems(items.concat(item))
    setItems(items => items.concat(item)) //state 변경 함수에 파라미터로 상태가 아닌 함수를 제공
    idNext.current += 1
  //}, [items])
  }, [])

  const outItems = items.map(item => (
    <OptimaListItemView key={item.id} item={item} onDelete={onDelete}/>
  )).reverse()

  return (
    <div>
      <h3>OptimaItemsView</h3>
      <button onClick={onInsert}>add</button>
      {outItems}
    </div>
  )
}

export default React.memo(OptimaListView)