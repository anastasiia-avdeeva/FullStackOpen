import { useState } from "react";
import { TextBtn } from "./components/TextBtn";
import { Statistics } from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isFeedBackGiven, setisFeedBackGiven] = useState(false);

  const handleGoodClick = () => {
    setGood((good) => good + 1);
    isFeedBackGiven || setisFeedBackGiven(true);
  };

  const handleNeutralClick = () => {
    setNeutral((neutral) => neutral + 1);
    isFeedBackGiven || setisFeedBackGiven(true);
  };

  const handleBadClick = () => {
    setBad((bad) => bad + 1);
    isFeedBackGiven || setisFeedBackGiven(true);
  };

  return (
    <div>
      <h1>Give us feedback</h1>
      <p>How do you find our service?</p>
      <TextBtn onClick={handleGoodClick}>good</TextBtn>
      <TextBtn onClick={handleNeutralClick}>neutral</TextBtn>
      <TextBtn onClick={handleBadClick}>bad</TextBtn>
      <Statistics
        isFeedBackGiven={isFeedBackGiven}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
};

export default App;
