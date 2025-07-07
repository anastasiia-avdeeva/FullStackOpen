import { useState } from "react";
import { anecdotes } from "./constants/constants";
import { TextBtn } from "./components/TextBtn";

const App = () => {
  const chooseRandom = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () => {
    setSelected(chooseRandom());
  };

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>
        has {votes[selected]} {votes[selected] === 1 ? "vote" : "votes"}{" "}
      </p>
      <TextBtn text="vote" onClick={handleVoteClick} />
      <TextBtn text="next anecdote" onClick={handleNextClick} />
    </div>
  );
};

export default App;
