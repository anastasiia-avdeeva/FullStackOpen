import { Button } from "./button";

export const Person = ({ person, onDelete }) => (
  <div>
    <p>
      {person.name} {person.number}
    </p>
    <Button text="delete" onClick={onDelete} />
  </div>
);
