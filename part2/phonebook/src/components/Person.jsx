import { Button } from "./button";

export const Person = ({ person, onDelete }) => (
  <li className="person">
    {person.name} {person.number}{" "}
    <Button text="delete" onClick={onDelete} className="btn del-btn" />
  </li>
);
