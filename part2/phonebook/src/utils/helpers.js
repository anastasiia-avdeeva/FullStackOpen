const findNameById = (contacts, id) => {
  const target = contacts.find((contact) => contact.id === id);
  return target.name;
};

export default { findNameById };
