import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("PLAYING");

  const playAgain = () => {
    setGameState("PLAYING");
    setGuesses([]);
    answer = sample(WORDS);
    console.info({ answer });
    return;
  };

  const handleSubmit = (guess) => {
    const nextGuesses = [...guesses, guess];
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("LOOSER");
    }

    if (guess === answer) {
      setGameState("WINNER");
    }

    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Banner
        answer={answer}
        gameState={gameState}
        round={guesses.length}
        playAgain={playAgain}
      />
      <GuessInput
        handleSubmit={handleSubmit}
        disabled={gameState !== "PLAYING"}
      />
    </>
  );
}

export default Game;
