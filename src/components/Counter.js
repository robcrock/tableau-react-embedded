import React, { useState } from 'react'

export function Counter() {

  // Gen
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h3>{ count }</h3>
      <button onClick={ () => setCount(count + 1) }>+</button>
      <button onClick={ () => setCount(count - 1) }>-</button>
    </div>
  )
}
