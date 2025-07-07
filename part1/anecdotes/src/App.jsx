import { useState } from "react";
import { anecdotes } from "./constants/constants";
import { TextBtn } from "./components/TextBtn";

const App = () => {
  const chooseRandom = () => Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(0);

  const handleNextClick = () => {
    console.log(selected);
    setSelected(chooseRandom());
  };
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <TextBtn text="next anecdote" onClick={handleNextClick} />
    </div>
  );
};

export default App;
