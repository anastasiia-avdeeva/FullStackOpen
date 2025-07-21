import { Button } from "./button";

export const Person = ({ person, onDelete }) => (
  <li>
    {person.name} {person.number} <Button text="delete" onClick={onDelete} />
  </li>
);
