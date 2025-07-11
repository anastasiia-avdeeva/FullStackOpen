import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterPattern, setFilterPattern] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");

  const personsToShow = !appliedFilter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(appliedFilter.toLowerCase())
      );

  const discardInputStates = () => {
    setNewName("");
    setNewNumber("");
  };

  const addEntry = (event) => {
    event.preventDefault();

    if (!newName) {
      alert("Please, fill in name");
      return;
    }

    if (!newNumber) {
      alert("Please fill in phone number");
      return;
    }

    const isInPersons = persons.some(
      (person) => person.name === newName || person.number === newNumber
    );
    if (isInPersons) {
      alert(`${newName} is already in the phonebook`);
      discardInputStates();
      return;
    }

    setPersons(
      persons.concat({
        name: newName,
        phone: newNumber,
        id: persons.length + 1,
      })
    );
    discardInputStates();
  };

  const handleNameInputChange = (event) => {
    const newFilter = event.target.value.trim();
    setNewName(newFilter);
  };

  const handlePhoneInputChange = (event) => {
    const pattern = /[^\d+-]/g;
    const newVal = event.target.value.replace(pattern, "");
    setNewNumber(newVal);
  };

  const handleFilterInputChange = (event) => {
    setFilterPattern(event.target.value);
  };

  const applyFilter = () => {
    setAppliedFilter(filterPattern);
    setFilterPattern("");
  };

  const discardFilter = () => {
    setAppliedFilter("");
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="nameInput">name: </label>
          <input
            type="text"
            id="nameInput"
            name="nameInput"
            value={newName}
            onChange={handleNameInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneInput">phone number: </label>
          <input
            type="tel"
            id="phoneInput"
            name="phoneInput"
            minLength="3"
            maxLength="20"
            value={newNumber}
            onChange={handlePhoneInputChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        <h2>Numbers</h2>
        <div>
          <label htmlFor="filterInput">Filter by name: </label>
          <input
            type="text"
            name="filterInput"
            id="filterInput"
            value={filterPattern}
            onChange={handleFilterInputChange}
          />
          <button onClick={applyFilter}>Apply</button>
          <button onClick={discardFilter}>Discard</button>
        </div>
        {personsToShow.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
