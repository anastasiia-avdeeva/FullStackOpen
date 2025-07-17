import { useState, useEffect } from "react";
import { PersonForm } from "./components/PersonForm";
import { ContactFilter } from "./components/ContactFilter";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";
import helpers from "./utils/helpers";
import { ErrorMsg } from "./components/ErrorMsg";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [filterPattern, setFilterPattern] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const resetNewPerson = () => setNewPerson({ name: "", number: "" });

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterPattern)
  );

  useEffect(() => {
    personsService
      .getAllPersons()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch((error) => {
        console.log("Cannot fetch contacts list ", error);
        setErrorMsg("Ooops, something went wrong. Please, try again later!");
      });
  }, []);

  const handleAddBtnClick = (evt) => {
    evt.preventDefault();

    if (!newPerson.name || !newPerson.number) {
      alert("Please, fill in all fields");
    } else if (helpers.isNameInPersons(persons, newPerson.name)) {
      confirmAndUpdatePerson();
    } else if (helpers.isNumberInPersons(persons, newPerson.number)) {
      alert(`${newPerson.number} is already in the phonebook`);
      resetNewPerson();
    } else {
      addNewPerson();
    }
  };

  const addNewPerson = () => {
    const newPersonObj = {
      name: newPerson.name,
      number: newPerson.number,
    };

    personsService
      .createPerson(newPersonObj)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        resetNewPerson();
      })
      .catch((error) => {
        console.log("Cannot post new person to the server ", error);
        alert("Unable to add new contact. Please, try again later");
      });
  };

  const confirmAndUpdatePerson = () => {
    if (
      window.confirm(
        `${newPerson.name} is already on the phonebook. Would you like replace the phone number with the new one?`
      )
    ) {
      const oldPersonObj = helpers.findPersonByName(persons, newPerson.name);
      const id = oldPersonObj.id;
      const changedPersonObj = { ...oldPersonObj, number: newPerson.number };
      personsService
        .updatePerson(changedPersonObj)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === id ? returnedPerson : person
            )
          );
          resetNewPerson();
        })
        .catch((error) => {
          console.log("Cannot put changed contact to the server ", error);
          alert("Unable to change the contact. Please, try again later");
        });
    }
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

  const handleDelete = (personId) => {
    const name = helpers.findPersonById(persons, personId).name;
    if (window.confirm(`Are you sure you want to delete ${name}'s contact?`)) {
      personsService
        .deletePerson(personId)
        .then((deletedId) =>
          setPersons(persons.filter((person) => person.id !== deletedId))
        )
        .catch((error) => {
          console.log("Cannot delete person ", error);
          alert(`${name}'s contact has already been deleted from the server`);
          setPersons(persons.filter((person) => person.id !== personId));
        });
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <h2>Add new contact</h2>
      <PersonForm
        onAddPerson={handleAddBtnClick}
        newName={newPerson.name}
        onNameInputChange={handleNameInputChange}
        newNumber={newPerson.number}
        onPhoneInputChange={handlePhoneInputChange}
      />
      <h2>Contacts</h2>
      {errorMsg ? (
        <ErrorMsg errorText={errorMsg} />
      ) : (
        <ContactFilter
          filterValue={filterPattern}
          onFilterInputChange={handleFilterInputChange}
        />
      )}
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </>
  );
};

export default App;
