import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  if (!results) {
    return (
      <>
        {range(5).map((_) => (
          <span className="cell" key={crypto.randomUUID()}></span>
        ))}
      </>
    );
  }

  return (
    <>
      {results.map(({ letter, status }) => (
        <span className={`cell ${status}`} key={crypto.randomUUID()}>
          {letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
