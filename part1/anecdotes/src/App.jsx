import { useState } from "react";
import { anecdotes } from "./constants/constants";
import { TextBtn } from "./components/TextBtn";

const App = () => {
  const chooseRandom = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextClick = () => {
    let randomIndex;
    do {
      randomIndex = chooseRandom();
    } while (randomIndex === selected);
    setSelected(randomIndex);
  };

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const findsIfAnyVotes = () => {
    const arraySum = votes.reduce(
      (accumulator, currentVal) => accumulator + currentVal,
      0
    );
    return !!arraySum;
  };

  const findMostVoted = () => {
    return votes.reduce((maxId, currentVal, currentId, array) => {
      return currentVal > array[maxId] ? currentId : maxId;
    }, 0);
  };

  return (
    <>
      <h1 style={{ display: "none" }}>Anecdotes for developers</h1>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>
          has {votes[selected]} {votes[selected] === 1 ? "vote" : "votes"}{" "}
        </p>
        <TextBtn text="vote" onClick={handleVoteClick} />
        <TextBtn text="next anecdote" onClick={handleNextClick} />
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {findsIfAnyVotes() ? (
          <p>{anecdotes[findMostVoted()]}</p>
        ) : (
          <p>No anecdote has been voted for yet</p>
        )}
      </div>
    </>
  );
};

export default App;
