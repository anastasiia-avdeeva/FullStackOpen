const findNameById = (persons, id) => {
  const target = persons.find((person) => person.id === id);
  return target.name;
};

const findIdByName = (persons, name) => {
  const target = persons.find((person) => person.name === name);
  return target.name;
};

const isNameInPersons = (persons, name) => {
  return persons.some((person) => person.name === name);
};

const isNumberInPersons = (persons, number) => {
  return persons.some((person) => person.number === number);
};

// const isValueInPersons = (propertyName, persons, value) => {
//   return persons.some((person) => person[propertyName] === value);
// };

export default {
  findNameById,
  findIdByName,
  //   isValueInPersons,
  isNameInPersons,
  isNumberInPersons,
};
