import React, { useState, useEffect } from 'react'
import { Movie } from './Movie'
import { Filter } from './Filter'

const movies = [
  { name: "36th Chamber"},
  { name: "5 Deadly Venoms"},
  { name: "Man of Iron"},
]

export function MoviesList() {
  
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log('Hit effect')
  }, [filter])

  return (
    <div>
      <Filter filter={ filter } setFilter={ setFilter } />
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
              <Movie key={ movie.name } movie={ movie } />
            )}
          )
        }
      </ul>
    </div>
  )
}
