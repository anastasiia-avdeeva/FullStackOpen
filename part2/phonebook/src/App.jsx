import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "+3590087589" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const discardInputStates = () => {
    setNewName("");
    setNewPhone("");
  };

  const addEntry = (event) => {
    event.preventDefault();

    if (!newName) {
      alert("Please, fill in name");
      return;
    }

    if (!newPhone) {
      alert("Please fill in phone number");
      return;
    }

    const isInPersons = persons.some(
      (person) => person.name === newName || person.phone === newPhone
    );
    if (isInPersons) {
      alert(`${newName} is already in the phonebook`);
      discardInputStates();
      return;
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }));
    discardInputStates();
  };

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    const pattern = /[^\d+]/g;
    const newVal = event.target.value.replace(pattern, "");
    setNewPhone(newVal);
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
            value={newName}
            onChange={handleNameInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneInput">phone number:</label>
          <input
            type="tel"
            id="phoneInput"
            minLength="3"
            maxLength="20"
            value={newPhone}
            onChange={handlePhoneInputChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
};

export default App;
