import React, { useRef, useEffect } from 'react'

const { tableau } = window;

function TableauEmbed() {
  const ref = useRef(null)
  const url = 'https://public.tableau.com/views/TheGenderGapInInternetandMobileAccess/MOM';
  const options = {
    device: 'desktop'
  }

  function initViz() {
    new tableau.Viz(ref.current, url, options)
  }

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
