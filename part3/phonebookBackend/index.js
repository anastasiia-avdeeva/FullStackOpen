const express = require("express");

const app = express();
app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const generateRandomId = () => {
  const ids = persons.map((person) => Number(person.id));
  let id;
  do {
    id = Math.floor(Math.random() * 10000);
  } while (ids.includes(id));
  return String(id);
};

app.get("/", (req, resp) => {
  resp.send("<h1>Phonebook</h1>");
});

app.get("/api/persons", (req, resp) => {
  resp.json(persons);
});

app.get("/info", (req, resp) => {
  const arrLen = persons.length;
  const contactsInfo = `Phonebook has info for ${arrLen} ${
    arrLen === 1 ? "person" : "people"
  }`;
  resp.send(`<p>${contactsInfo}</p><p>${new Date()}</p>`);
});

app.get("/api/persons/:id", (req, resp) => {
  const id = req.params.id;
  const target = persons.find((person) => person.id === id);

  if (!target) {
    return resp.status(404).end();
  }

  return resp.json(target);
});

app.delete("/api/persons/:id", (req, resp) => {
  const id = req.params.id;
  persons = persons.filter((person) => person.id !== id);
  console.log(persons);
  resp.status(204).end();
});

app.post("/api/persons", (req, resp) => {
  const entry = req.body;
  const person = {
    id: generateRandomId(),
    ...entry,
  };
  persons = persons.concat(person);
  resp.json(person);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
