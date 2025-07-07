import React from "react";
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ isFeedBackGiven, good, neutral, bad }) => {
  const countAll = () => {
    return good + neutral + bad;
  };

  const countAvg = () => {
    if (!countAll()) return "";
    const avg = (good - bad) / countAll();
    return avg.toFixed(1);
  };

  const countPositive = () => {
    if (!countAll()) return "";
    const pos = (good * 100) / countAll();
    return pos.toFixed(1) + "%";
  };

  const renderStatistics = () => {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={countAll()} />
          <StatisticLine text="average" value={countAvg()} />
          <StatisticLine text="positive" value={countPositive()} />
        </tbody>
      </table>
    );
  };
  return (
    <div>
      <h2>Statistics:</h2>
      {isFeedBackGiven ? renderStatistics() : <p>No feedback given</p>}
    </div>
  );
};
