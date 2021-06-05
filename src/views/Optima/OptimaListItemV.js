import React from 'react'

const OptimaListItemV = ({item, onDelete}) => {

  const { id, title } = item

  return (
    <div onClick={() => onDelete(id)} >
      {id} | {title}
    </div>
  )
}

//export default OptimaListItemV
export default React.memo(OptimaListItemV, (prevProps, nextProps) => prevProps.item === nextProps.item)