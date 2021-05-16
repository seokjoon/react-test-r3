import React, { useState } from 'react'

const OptimaItemsView = () => {

  const initItems = () => {
    const outs = [];
    for(let i = 1; i <= 100; i++) {
      outs.push({
        id: i,
        title: 'title ' + i
      })
    }
    return outs
  }

  const [items, setItems] = useState(initItems) //렌더링 발생시마다가 아닌, 처음 렌더링시에만 initItems 실행

  const add = () => {
    setItems([...items, { id: items.length + 1, title: 'title ' + items.length + 1 }])
  }

  const itemsOut = items.map(item => (
    <div key={item.id}>{item.title}</div>
  )).reverse()

  return (
    <div>
      <button onClick={add}>add</button>
      { itemsOut }
    </div>
  )
}

export default OptimaItemsView