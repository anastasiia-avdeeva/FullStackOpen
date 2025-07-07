import React from "react";

export const Statistics = ({ isFeedBackGiven, good, neutral, bad }) => {
  const countAll = () => {
    return good + neutral + bad;
  };

  const countAvg = () => {
    const avg = (good - bad) / countAll();
    return avg || "";
  };

  const countPositive = () => {
    if (!countAll()) return "";
    const pos = (good * 100) / countAll();
    return pos + "%";
  };

  const renderStatistics = () => {
    return (
      <>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {countAll()}</p>
        <p> average: {countAvg()}</p>
        <p>positive: {countPositive()}</p>
      </>
    );
  };
  return (
    <div>
      <h2>Statistics:</h2>
      {isFeedBackGiven ? renderStatistics() : <p>No feedback given</p>}
    </div>
  );
};
