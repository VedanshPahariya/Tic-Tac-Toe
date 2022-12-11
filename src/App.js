import "./App.css"
import { useState, useEffect } from "react";
import Square from "./Components/square";
import { Patterns } from "./Components/Pattern";

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({
    winner: 'none',
    status: 'none'
  })

  useEffect(() => {
    checkWin();
    checkIfMatchTie();
  }, [board])

  useEffect(() => {
    if (result.status !== 'none') {
      if (result.status === 'Won') {
        alert(`Game Finished!! Player ${result.winner} wins`);
        restartGame();
      }
      if (result.status === 'Match Tie') {
        alert(`Game Finished!! ${result.winner} wins, ${result.status}`);
        restartGame();
      }
    }
  }, [result])

  const chooseSquare = (square) => {
    setBoard(board.map((val, index) => {
      if (index === square && val === "") {
        if (player === "X") {
          setPlayer("O")
        } else {
          setPlayer("X")
        }
        return player;
      }
      return val;
    }))
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({
          winner: player === "X" ? "O" : "X",
          status: 'Won'
        })
        currPattern.forEach((i) => {
          console.log(i);
        })
      }
    })
  }

  const checkIfMatchTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    })
    if (filled) {
      setResult({
        winner: 'No One',
        status: 'Match Tie'
      })
    }
  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X")
  }


  return (
    <>
      <div className="App" >
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
        </div>

        <div className="board">

          <div className="row">
            <Square
              val={board[0]}
              id={0}
              chooseSquare={() => { chooseSquare(0) }}
            />
            <Square
              val={board[1]}
              id={1}
              chooseSquare={() => { chooseSquare(1) }}
            />
            <Square
              val={board[2]}
              id={2}
              chooseSquare={() => { chooseSquare(2) }}
            />
          </div>

          <div className="row">
            <Square
              val={board[3]}
              id={3}
              chooseSquare={() => { chooseSquare(3) }}
            />
            <Square
              val={board[4]}
              id={4}
              chooseSquare={() => { chooseSquare(4) }}
            />
            <Square
              val={board[5]}
              id={5}
              chooseSquare={() => { chooseSquare(5) }}
            />
          </div>

          <div className="row">
            <Square
              val={board[6]}
              id={6}
              chooseSquare={() => { chooseSquare(6) }}
            />
            <Square
              val={board[7]}
              id={7}
              chooseSquare={() => { chooseSquare(7) }}
            />
            <Square
              val={board[8]}
              id={8}
              chooseSquare={() => { chooseSquare(8) }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
