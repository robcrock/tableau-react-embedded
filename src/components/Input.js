import React, { useState } from 'react'

export function Input() {

  const [ inputValue, setInputvalue ] = useState("")

  return (
    <div>
      {/* Basic Controlled Input Example */}
      { inputValue && <h3>{ inputValue }</h3>}
      <input 
        value={ inputValue } 
        onChange={ (e) => setInputvalue(e.target.value) }
      />

    </div>
  );
}
