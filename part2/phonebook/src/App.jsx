import { useState, useEffect } from "react";
import { PersonForm } from "./components/PersonForm";
import { ContactFilter } from "./components/ContactFilter";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";
import helpers from "./utils/helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterPattern, setFilterPattern] = useState("");

  const resetNewPerson = () => setNewPerson({ name: "", number: "" });

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterPattern)
  );

  useEffect(() => {
    personsService.getAllPersons().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleAddPerson = (event) => {
    event.preventDefault();

    if (!newPerson.name || !newPerson.number) {
      alert("Please, fill in all fields");
      return;
    }

    if (helpers.isNameInPersons(persons, newPerson.name)) {
      alert(`${newPerson.name} is already in the phonebook`);
      resetNewPerson();
      return;
    }

    if (helpers.isNumberInPersons(persons, newPerson.number)) {
      alert(`${newPerson.number} is already in the phonebook`);
      resetNewPerson();
      return;
    }

    const newPersonObj = {
      name: newPerson.name,
      number: newPerson.number,
    };

    personsService
      .createPerson(newPersonObj)
      .then((newPersonFromResponse) =>
        setPersons(persons.concat(newPersonFromResponse))
      );

    resetNewPerson();
  };

  const handleNameInputChange = (event) => {
    const newName = event.target.value.trim();
    setNewPerson((prevPersonInfo) => ({ ...prevPersonInfo, name: newName }));
  };

  const handlePhoneInputChange = (event) => {
    const pattern = /[^\d+-]/g;
    const newNumber = event.target.value.replace(pattern, "");
    setNewPerson((prevPersonInfo) => ({
      ...prevPersonInfo,
      number: newNumber,
    }));
  };

  const handleFilterInputChange = (event) => {
    setFilterPattern(event.target.value.trim().toLowerCase());
  };

  const handleDelete = (contactId) => {
    const name = helpers.findNameById(persons, contactId);
    if (window.confirm(`Are you sure you want to delete ${name}'s contact?`)) {
      personsService
        .deletePerson(contactId)
        .then((deletedId) =>
          setPersons(persons.filter((person) => person.id !== deletedId))
        );
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <h2>Add new contact</h2>
      <PersonForm
        onAddPerson={handleAddPerson}
        newName={newPerson.name}
        onNameInputChange={handleNameInputChange}
        newNumber={newPerson.number}
        onPhoneInputChange={handlePhoneInputChange}
      />
      <h2>Contacts</h2>
      <ContactFilter
        filterValue={filterPattern}
        onFilterInputChange={handleFilterInputChange}
      />
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </>
  );
};

export default App;
