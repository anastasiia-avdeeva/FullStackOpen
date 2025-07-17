import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAllPersons = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const createPerson = (newPerson) => {
  const request = axios.post(baseURL, newPerson);
  return request.then((response) => response.data);
  //   return request.then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   });
};

const deletePerson = (personId) => {
  const request = axios.delete(`${baseURL}/${personId}`);
  return request.then((response) => {
    console.log("Response status", response.status);
    return personId;
  });
  //   return request.then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   });
};

const updatePerson = (changedPersonObj) => {
  const request = axios.put(
    `${baseURL}/${changedPersonObj.id}`,
    changedPersonObj
  );
  return request.then((response) => response.data);
};

export default { getAllPersons, createPerson, deletePerson, updatePerson };
