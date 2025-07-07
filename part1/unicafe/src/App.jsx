import { useState } from "react";
import { TextBtn } from "./components/TextBtn";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood((good) => good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral((neutral) => neutral + 1);
  };

  const handleBadClick = () => {
    setBad((bad) => bad + 1);
  };

  return (
    <div>
      <h1>Give us feedback</h1>
      <p>How our service has been up untill now?</p>
      <TextBtn onClick={handleGoodClick}>good</TextBtn>
      <TextBtn onClick={handleNeutralClick}>neutral</TextBtn>
      <TextBtn onClick={handleBadClick}>bad</TextBtn>
      <h2>Statistics:</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
