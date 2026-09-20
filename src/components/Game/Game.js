import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(["", "", "", "", "", ""]);
  const [round, setRound] = React.useState(1);

  const handleSubmit = (guess) => {
    if (round > NUM_OF_GUESSES_ALLOWED) {
      window.alert("Max rounds meet");
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
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
