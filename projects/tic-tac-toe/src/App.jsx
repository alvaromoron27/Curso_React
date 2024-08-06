/* eslint-disable react/prop-types */
import './App.css';
import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const Square = ({children, isSelected, onClick}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
};

const checkWinner = (board) => {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

function App() {

  // Modificación en el repositorio original
const message = "Hello from the original repository!";
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);

    const handleClick = (index)=>{
      if (board[index]) return;
      const newBoard = [...board]; // Crear una copia del array
      newBoard[index] = turn;
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        alert(`El ganador es: ${winner}`);
        return;
      }

      setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
    };

  return (
    <main className='board'>
      <h1>Tic-tac-toe</h1>
      <section className="game">
          {
            board.map((value, index) => {
              return(
                <Square 
                  key={index}
                  isSelected={value !== null}
                  onClick={() => handleClick(index)}
                >
                  {value}
                </Square>
              )
            })
          }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  );
}

export default App
