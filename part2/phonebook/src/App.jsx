import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const isInPersons = persons.some((person) => person.name === newName);
    if (isInPersons) {
      alert(`${newName} is already in the phonebook`);
      setNewName("");
      return;
    }
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <label htmlFor="nameInput">name: </label>
        <input
          type="text"
          id="nameInput"
          value={newName}
          onChange={handleNameInputChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
