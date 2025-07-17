import { Person } from "./Person";

export const Persons = ({ persons, onDelete }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          person={person}
          onDelete={() => onDelete(person.id)}
        />
      ))}
    </div>
  );
};
