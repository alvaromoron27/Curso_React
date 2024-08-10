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
  const [winner, setWinner] = useState(null);

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
    if (board[index] || isModalOpen) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    const winner = checkWinner(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    setBoard(newBoard);
    setTurn(newTurn);

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    if (winner) {
      setPulsedCells(0);
      confetti();
      setWinner(winner);
      setModalOpen(true);
      return;
    }else if (newBoard.every(currentValue => currentValue != null)) {
      setPulsedCells(0);
      setWinner('Empate')
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    handleRestart();  // Reiniciar el juego cuando se cierre el modal
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setPulsedCells(0);
    setWinner(null);
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
        <button id="btn-restart" 
          onClick={() => handleRestart()}
          disabled={isModalOpen}
          >
          Reiniciar partida
        </button>
        {isModalOpen && <WinnerModal winner={winner} onclose={closeModal} />}
      </section>
    </main>
  );
}

export default App;
