import "./App.css";
import { useState } from "react";
import { Square } from "./components/square.jsx";
import confetti from "canvas-confetti";
import { TURNS, WINNING_COMBINATIONS } from "./constants.js";
import WinnerModal from './components/winnerModal.jsx';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  });
  const [pulsedCells, setPulsedCells] = useState(()=>{
    const pulsedCells = window.localStorage.getItem('pulsedCells')
    return pulsedCells ? parseInt(pulsedCells) : 0
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const checkWinner = (board) => {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board]; // Crear una copia del array
    newBoard[index] = turn;
    const winner = checkWinner(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    const newPulsedCells = pulsedCells + 1;

    setBoard(newBoard);
    setTurn(newTurn);
    setPulsedCells(newPulsedCells);

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    window.localStorage.setItem('pulsedCells', newPulsedCells)

    if (winner) {
      setPulsedCells(0);
      confetti();
      setTimeout(() => {
        setModalOpen(true);
        handleRestart();
      }, 200);
      return;
    }
    if (pulsedCells == 8 && winner == null) {
      setPulsedCells(0);
      setTimeout(() => {
        alert(`EMPATE!`);
        handleRestart();
      }, 100);
      return;
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setPulsedCells(0);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
    window.localStorage.removeItem('pulsedCells');
  };

  return (
    <main className="board">
      <h1>Tic-tac-toe</h1>
      <section className="game">
        {board.map((value, index) => {
          return (
            <Square
              key={index}
              isSelected={value !== null}
              onClick={() => handleClick(index)}
            >
              {value}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      <section>
        <button id="btn-restart" onClick={() => handleRestart()}>
          Reiniciar partida
        </button>
        <WinnerModal 
          winner={'x'}
        />
      </section>
    </main>
  );
}

export default App;
