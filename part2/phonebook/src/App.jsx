import { useState } from "react";
import { personsInfo } from "./constants/constants";
import { PersonForm } from "./components/PersonForm";
import { ContactFilter } from "./components/ContactFilter";
import { Persons } from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState(personsInfo);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [filterPattern, setFilterPattern] = useState("");
  const [appliedFilter, setAppliedFilter] = useState("");

  const resetNewContact = () => setNewContact({ name: "", number: "" });

  const personsToShow = !appliedFilter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(appliedFilter)
      );

  const addEntry = (event) => {
    event.preventDefault();

    if (!newContact.name) {
      alert("Please, fill in name");
      return;
    }

    if (!newContact.number) {
      alert("Please fill in phone number");
      return;
    }

    const isNameInPersons = persons.some(
      (person) => person.name === newContact.name
    );

    if (isNameInPersons) {
      alert(`${newContact.name} is already in the phonebook`);
      resetNewContact();
      return;
    }

    const isNumberInPersons = persons.some(
      (person) => person.number === newContact.number
    );

    if (isNumberInPersons) {
      alert(`${newContact.number} is already in the phonebook`);
      resetNewContact();
      return;
    }

    setPersons(
      persons.concat({
        name: newContact.name,
        number: newContact.number,
        id: persons.length + 1,
      })
    );
    resetNewContact();
  };

  const handleNameInputChange = (event) => {
    const newName = event.target.value.trim();
    setNewContact((prevContact) => ({ ...prevContact, name: newName }));
  };

  const handlePhoneInputChange = (event) => {
    const pattern = /[^\d+-]/g;
    const newNumber = event.target.value.replace(pattern, "");
    setNewContact((prevContact) => ({ ...prevContact, number: newNumber }));
  };

  const handleFilterInputChange = (event) => {
    setFilterPattern(event.target.value);
  };

  const applyFilter = () => {
    setAppliedFilter(filterPattern.trim().toLowerCase());
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
        newName={newContact.name}
        onNameInputChange={handleNameInputChange}
        newNumber={newContact.number}
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
