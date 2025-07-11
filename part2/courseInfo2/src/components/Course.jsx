import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

export const Course = ({ course }) => {
  const countTotalExercises = () => {
    return course.parts.reduce(
      (accumulator, part) => (accumulator += part.exercises),
      0
    );
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={countTotalExercises()} />
    </div>
  );
};
