import React, { useCallback, useState } from 'react'
import { List } from 'react-virtualized'

const OptimaScrollView = () => {

  const initItems = () => {
    const outs = []
    for (let i = 1; i <= 200; i++) {
      outs.push({
        id: i,
        title: 'title ' + i
      })
    }
    return outs
  }

  const [items] = useState(initItems)

  // const outItems = items.map(item => ( <div key={item.id}>{item.title}</div> ))
  const outItems = useCallback(({idx, key, style}) => {
    const item = items[idx]
    return (<div key={key} item={item} style={style}>foo</div>)
  }, [items])

  return (
    <div>
      <h3>OptimaScrollView</h3>
      <List
        width={300}
        height={100}
        rowHeight={28}
        rowCount={items.length}
        rowRenderer={outItems}
        list={items}
        style={{}}
      />
    </div>
  )
}

export default OptimaScrollView