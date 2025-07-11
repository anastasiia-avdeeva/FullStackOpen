import { useState } from "react";
import { personsInfo } from "./constants/constants";
import { PersonForm } from "./components/PersonForm";
import { ContactFilter } from "./components/ContactFilter";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState(personsInfo);
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
    <>
      <h1>Phonebook</h1>
      <h2>Add new contact</h2>
      <PersonForm
        addEntry={addEntry}
        newName={newName}
        onNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        onPhoneInputChange={handlePhoneInputChange}
      />
      <h2>Contacts</h2>
      <ContactFilter
        filterValue={filterPattern}
        onFilterInputChange={handleFilterInputChange}
        onApplyFilter={applyFilter}
        onDiscardFilter={discardFilter}
      />
      <Persons persons={personsToShow} />
    </>
  );
};

export default App;
