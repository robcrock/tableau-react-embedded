

// Load components
import Kpi from "./components/kpi";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "100%",
      }}
    >
      {[
        "kpi1",
        "kpi2",
        "kpi3",
        "kpi4",
        "kpi5",
        "kpi6",
        "kpi7",
        "kpi8",
        "kpi9",
        "kpi10",
        "kpi11",
        "kpi12",
      ].map((dashboard) => (
        <div style={{ width: 300, margin: "1rem" }}>
          <Kpi dashboard={dashboard} />
        </div>
      ))}
    </div>
  );
}

export default App;
