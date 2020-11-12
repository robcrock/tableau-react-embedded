import { useRef, useState, useEffect } from "react";

const dashboards = [
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi1",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi2",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi3",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi4",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi5",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi6",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi7",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi8",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi9",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi10",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi11",
  "https://public.tableau.com/views/SocialMediaKPIs_16051099238290/kpi12"
];

const { tableau } = window;

function DynamicLoad() {
  const [vizCount, setVizCount] = useState(0);
  const [viz, setViz] = useState(null);
  const ref = useRef(null)

  const initViz = () => {
    let vizURL = dashboards[vizCount];
    const options = {
      hideTabs: true,
      hideToolbar: true,
      width: "500px",
      height: "300px"
    };
    if (viz) {
      viz.dispose();
      setViz(null);
    }
    setViz(new tableau.Viz(ref.current, vizURL, options));
  };

  useEffect(initViz, [vizCount]);

  return (
    <div>
      <h1>Dynamic Load</h1>
      <div style={setVizStyle} ref={ ref } />
      <button onClick={() => setVizCount(checkminValue(vizCount))}>Previous</button>
      <button onClick={() => setVizCount(checkmaxValue(vizCount, dashboards.length))}>Next</button>
    </div>
  );
}

const checkminValue = value => {
  return value > 1 ? value - 1 : 0;
};

const checkmaxValue = (value, max) => {
  return value < max - 1 ? value + 1 : max - 1;
};

const setVizStyle = {
  height: "100%",
  width: "100%",
  margin: "20px",
  display: "flex",
  "justify-content": "center",
  "align-items": "center",
};

export default DynamicLoad;
