import {Board} from './components/board';
import './App.css';

const TURNS = {
  X: 'x',
  O: 'o'
}


function App() {

  return (
    <>
    <h1 className='titlePage'>Tic-tac-toe</h1>
    <div className='App'>
      <Board />
    </div>
    </>
  )
}

export default App
