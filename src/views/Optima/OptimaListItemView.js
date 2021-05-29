import React from 'react'

const OptimaListItemView = ({item, onDelete}) => {

  const { id, title } = item

  return (
    <div onClick={() => onDelete(id)} >
      {id} | {title}
    </div>
  )
}

//export default OptimaListItemView
export default React.memo(OptimaListItemView)