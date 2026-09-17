import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(['', '', '', '', '']);
  const [round, setRound] = React.useState(1)

  const handleSubmit = (guess) => {

    if (round > 5) {
      window.alert('Max rounds meet')
      setGuesses(['', '', '', '', ''])
      setRound(1)
      return
    }
    
    console.log(round)
    const nextGuesses = guesses
    nextGuesses[round - 1] = guess
    setGuesses(nextGuesses)
    setRound(round + 1)
  };

  return (
    <>
      <div className="guess-results">
        {guesses.map(guess => {
          return <p className="guess" key={crypto.randomUUID()}>
            {Array.from({length: 5}, (_, index) => <span className="cell" key={crypto.randomUUID()}>{guess[index] ?? ''}</span>)}
          </p>
        })}
      </div>
      {guesses.length === 0 && createGrid()}
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
