import { useState, useEffect } from "react";
import "./scoreboard.css";

function Scoreboard({ currentScoreValue, highScoreValue }) {
  const [highlightClass, setHighlightClass] = useState("");

  useEffect(() => {
    if (highScoreValue !== 0) {
      if (currentScoreValue === 0) {
        setHighlightClass("reset-highlight");
      } else if (currentScoreValue === highScoreValue) {
        setHighlightClass("highscore-highlight");
      } else {
        setHighlightClass("increment-highlight");
      }
    }

    const timer = setTimeout(() => setHighlightClass(""), 500);
    return () => clearTimeout(timer);
  }, [currentScoreValue, highScoreValue]);

  return (
    <div className={`scoreboard ${highlightClass}`}>
      <div>Current Score: {currentScoreValue}</div>
      <div>High Score: {highScoreValue}</div>
    </div>
  );
}

export default Scoreboard;
