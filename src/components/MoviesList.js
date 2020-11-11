import React from 'react'

export function MoviesList() {

  const movies = [
    { name: "Man of Iron"},
    { name: "Man of Iron"},
    { name: "Man of Iron"},
    { name: "Man of Iron"},
    { name: "Man of Iron"},
  ]
  return (
    <div>
      <ul>
        {/* This create the array of lis we want to render */}
        { movies.map((movie, i) => <li key={i}>{ movie.name }</li>)}
      </ul>
    </div>
  )
}
