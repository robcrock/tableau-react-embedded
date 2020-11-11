import './App.css';
import { Counter } from './components/Counter'
import { Accordion } from './components/Accordion'
import { Input } from './components/Input'

// Load components
import TableauEmbed from './components/TableauEmbed'

function App() {
  return (
    <div className="App">
      <h1>Embedded Analytics with Tableau</h1>
      <Input />
      <Counter />
      <Accordion />
      <TableauEmbed />
    </div>
  );
}

export default App;
