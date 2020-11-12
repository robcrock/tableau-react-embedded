import { useRef, useState, useEffect } from "react";
import "./styles.css"

const { tableau } = window;
const url = "https://public.tableau.com/views/SocialMediaKPIs_16051099238290"

export default function Kpi({ dashboard }) {
  const ref = useRef(null)
  const [viz, setViz] = useState(null)

  useEffect(() => {
    console.dir("Loading " + dashboard)
    setViz(new tableau.Viz(
      ref.current,
      `${url}/${dashboard}`,
      {
        hideTabs: true,
        hideToolbar: true,
        width: "500px",
        height: "300px"
      }))
    return () => viz.dispose()
  }, []);

  return (
    <div className="__kpi_dashboard" ref={ ref } />
  );
}
