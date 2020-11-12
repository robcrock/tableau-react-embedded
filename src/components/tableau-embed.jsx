import React, { useRef, useEffect } from 'react'

const { tableau } = window;

function TableauEmbed() {
  // One of the reasons people sometimes use refs is to avoid rerenders
  const ref = useRef(null)
  const url = 'https://public.tableau.com/views/TheGenderGapInInternetandMobileAccess/MOM';
  const options = {
    device: 'desktop'
  }

  function initViz() {
    new tableau.Viz(ref.current, url, options)
  }

  // If you leave the second argument to useEffect blanket useEffect will only
  // run onMount or on first render, which is what we're doing here.
  useEffect(() => {
    initViz();
  }, [])

  return (
    <div>
      <p>This is my Tableau dashboard</p>
      <div ref={ ref }></div>
    </div>
  );
}

export default TableauEmbed;
