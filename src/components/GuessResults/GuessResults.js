import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p className="guess" key={crypto.randomUUID()}>
            <Guess guess={guesses[index]} answer={answer} />
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
