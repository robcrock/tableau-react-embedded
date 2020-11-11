import React, { useState } from 'react'

const movies = [
  { name: "36th Chamber"},
  { name: "5 Deadly Venoms"},
  { name: "Man of Iron"},
]

export function MoviesList() {
  
  const [filter, setFilter] = useState("");

  return (
    <div>
      <label>
        Filter:
        <input 
          onChange={ (e) => setFilter(e.target.value) }
          value={ filter }
        ></input>
      </label>
      <ul>
        {/* This create the array of lis we want to render */}
        { movies
          .filter((movie) => { 
            return (
              movie.name.toLowerCase().includes(filter.toLowerCase())
            )}
          )
          .map((movie, i) => { 
            return (
              <li key={i}>{ movie.name }</li>
            )}
          )
        }
      </ul>
    </div>
  )
}
