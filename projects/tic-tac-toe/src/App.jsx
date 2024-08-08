import "./App.css";
import { useState } from "react";
import { Square } from "./components/square.jsx";
import confetti from "canvas-confetti";
import { TURNS, WINNING_COMBINATIONS } from "./constants.js";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [pulsedCells, setPulsedCells] = useState(0);

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
    setBoard(newBoard);
    setPulsedCells(pulsedCells + 1);
    const winner = checkWinner(newBoard);

    if (winner) {
      setPulsedCells(0);
      confetti();
      setTimeout(() => {
        alert(`El ganador es: ${winner}`);
        handleRestart();
      }, 200);
      return;
    }if (pulsedCells == 8 && winner == null) {
      setPulsedCells(0);
      setTimeout(() => {
        alert(`EMPATE!`);
        handleRestart();
      }, 100);
      return;
    }
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setPulsedCells(0);
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
      </section>
    </main>
  );
}

export default App;
