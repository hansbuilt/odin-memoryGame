import { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="header">
        <div className="headerLeft">
          <h1>Flags Memory Game</h1>
          <span>Here would go some instructions</span>
        </div>
        <div className="headerRight">
          <Scoreboard></Scoreboard>
        </div>
      </div>
      <div className="gameContainer">
        <GameBoard></GameBoard>
      </div>
    </div>
  );
}

export default App;
