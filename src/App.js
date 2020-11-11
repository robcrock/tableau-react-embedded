import './App.css';
import { Counter } from './components/Counter'
import { Accordion } from './components/Accordion'
import { Input } from './components/Input'
import { MoviesList } from './components/MoviesList'

// Load components
import TableauEmbed from './components/TableauEmbed'

function App() {
  return (
    <div className="App">
      <h1>Embedded Analytics with Tableau</h1>
      <Input />
      <Counter />
      <Accordion />
      <MoviesList />
      <TableauEmbed />
    </div>
  );
}

export default App;
