import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(["", "", "", "", "", ""]);
  const [round, setRound] = React.useState(1);
  const [gameState, setGameState] = React.useState("PLAYING");

  const playAgain = () => {
    setGameState("PLAYING");
    setGuesses(["", "", "", "", "", ""]);
    setRound(1);
    answer = sample(WORDS);
    console.log(answer);
    return;
  };

  const handleSubmit = (guess) => {
    if (round >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("LOOSER");
      setGuesses(["", "", "", "", ""]);
      setRound(1);
      return;
    }

    if (guess === answer) {
      setGameState("WINNER");
      setGuesses(["", "", "", "", ""]);
      setRound(1);
      return;
    }

    const nextGuesses = guesses;
    nextGuesses[round - 1] = guess;
    setGuesses(nextGuesses);
    setRound(round + 1);
  };

  return (
    <>
      <div className="guess-results">
        {guesses.map((guess) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              <Guess guess={guess} answer={answer} />
            </p>
          );
        })}
      </div>
      {gameState === "LOOSER" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
      {gameState === "WINNER" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{round} guesses</strong>.
          </p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
      <GuessInput
        handleSubmit={handleSubmit}
        disabled={gameState !== "PLAYING"}
      />
    </>
  );
}

export default Game;
