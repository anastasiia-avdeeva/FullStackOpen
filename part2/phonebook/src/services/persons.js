import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAllContacts = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const addContact = (newContact) => {
  const request = axios.post(baseURL, newContact);
  return request.then((response) => response.data);
  //   return request.then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   });
};

const deleteContact = (contactId) => {
  const request = axios.delete(`${baseURL}/${contactId}`);
  return request.then((response) => {
    console.log(response);
    console.log("Response status", response.status);
    return contactId;
  });
  //   return request.then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   });
};

export default { getAllContacts, addContact, deleteContact };
