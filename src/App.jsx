import { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
    setCurrentScore((prevScore) => {
      const newScore = prevScore + 1;

      setHighScore((prevHighScore) => Math.max(prevHighScore, newScore));

      return newScore;
    });
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="headerLeft">
          <h1>Flags Memory Game</h1>
          <span>Here would go some instructions</span>
        </div>
        <div className="headerRight">
          <Scoreboard
            currentScoreValue={currentScore}
            highScoreValue={highScore}
          ></Scoreboard>
        </div>
      </div>
      <div className="gameContainer">
        <GameBoard
          handleScoreIncrement={incrementScore}
          handleScoreReset={resetScore}
        ></GameBoard>
      </div>
    </div>
  );
}

export default App;
