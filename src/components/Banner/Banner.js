function Banner({ gameState, round, answer, playAgain }) {
  console.log("Round in Banner", round);
  return (
    <>
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
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{round} guesses</strong>.
          </p>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
    </>
  );
}

export default Banner;
