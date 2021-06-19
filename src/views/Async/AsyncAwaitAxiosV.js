import React, { useState } from 'react'
import axios from 'axios'

const AsyncAwaitAxiosV = () => {

  const [items, setItems] = useState(null)

  const getItems = async() => {
    try {
      const res = await axios.get('/')
      setItems(res.data)
    } catch (e) { console.log(e) }
  }

  return (
    <div>
      <h3>AsyncAwaitAxiosV</h3>
      <div>
        <button onClick={getItems}>get</button>
        { items && <textarea rows={7} value={JSON.stringify(items, null, 2)} readOnly={true} /> }
      </div>
    </div>
  )
}

export default AsyncAwaitAxiosV