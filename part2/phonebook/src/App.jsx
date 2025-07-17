import { useState, useEffect } from "react";
import { PersonForm } from "./components/PersonForm";
import { ContactFilter } from "./components/ContactFilter";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";
import helpers from "./utils/helpers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [filterPattern, setFilterPattern] = useState("");

  const resetNewContact = () => setNewContact({ name: "", number: "" });

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterPattern)
  );

  useEffect(() => {
    personsService.getAllContacts().then((persons) => {
      setPersons(persons);
    });
  }, []);

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
    const newContactObj = {
      name: newContact.name,
      number: newContact.number,
    };

    personsService
      .addContact(newContactObj)
      .then((newContact) => setPersons(persons.concat(newContact)));

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
    setFilterPattern(event.target.value.trim().toLowerCase());
  };

  const handleDelete = (contactId) => {
    const name = helpers.findNameById(persons, contactId);
    if (window.confirm(`Are you sure you want to delete ${name}'s contact?`)) {
      personsService
        .deleteContact(contactId)
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
      />
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </>
  );
};

export default App;
