import React, { useMemo, useState } from 'react'

const HookUseMemoV = () => {

  const [list, setList] = useState([])
  const [num, setNum] = useState('')

  const _getAvg = nums => {
    console.log('getAvg')
    if(nums.length === 0) return 0
    const sum = nums.reduce((a, b) => a + b)
    return sum / nums.length
  }

  const avg = useMemo(() => _getAvg(list), [list])

  const onChange = e => {
    setNum(e.target.value)
  }

  const onInsert = () => {
    const nextList = list.concat(parseInt(num))
    setList(nextList)
    setNum('')
  }

  return (
    <div>
      <h3>HookUseMemoV</h3>
      <input value={num} onChange={onChange} />
      <button onClick={onInsert}>insert</button>

      {/*<div>{_getAvg(list)}</div>*/}
      <div>{avg}</div>
    </div>
  )
}

export default HookUseMemoV