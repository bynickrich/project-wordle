import React from "react";

function GuessInput({ handleSubmit }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(guess);
      setGuess("");
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
