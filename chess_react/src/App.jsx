// App.js

import "./App.css";
import { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function App() {
  const [game, setGame] = useState(new Chess());
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Safely modify the game state
  function safeGameMutate(modify) {
    setGame((g) => {
      const update = g; // Directly modify the game object
      modify(update);
      return update;
    });
  }

  // Make a random move for the computer
  function makeRandomMove() {
    const possibleMoves = game.moves();

    // Exit if the game is over
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
      setGameOver(true);
      if (game.in_checkmate()) {
        const winner = game.turn() === "w" ? "Black" : "White";
        setWinner(winner);
      } else {
        setWinner("Draw");
      }
      return;
    }

    // Select a random move
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game) => {
      game.move(possibleMoves[randomIndex]);
    });
  }

  // Handle piece drop by the user
  function onDrop(source, target) {
    if (gameOver) return false;

    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: source,
        to: target,
        promotion: "q", // Always promote to a queen
      });
    });

    // If the move is invalid
    if (move === null) return false;

    // If the move is valid, make a random move for the computer
    setTimeout(makeRandomMove, 200);
    return true;
  }

  // Restart the game
  function restartGame() {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
  }

  // Listen for Enter key press to restart the game
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        restartGame();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      {/* Header Section */}
      <div className="header">
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
          alt="Game Logo"
          className="game-image"
        />
        <div className="game-info">
          <h1>GeeksforGeeks Chess Game</h1>
        </div>
      </div>

      {/* Chessboard Section */}
      <div className="chessboard-container">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        {gameOver && (
          <div className="game-over">
            <p>Game Over</p>
            <p>Winner: {winner}</p>
            <p>Press Enter to restart</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
