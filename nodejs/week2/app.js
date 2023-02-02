const { json } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const documents = require("./documents.json");

// Support parsing JSON requests
app.use(express.json());

app.get("/search", (req, res) => {
  console.log(JSON.stringify(req.query));
  const query = req.query.q.toLowerCase();
  if (!query) {
    res.json(documents);
  } else {
    const filtereddocs = documents.filter((document) => {
      const matchesValue =
        document.value && document.value.toLowerCase().includes(query);
      const matchesName =
        document.name && document.name.toLowerCase().includes(query);
      const matchDesc =
        document.description &&
        document.description.toLowerCase().includes(query);
      return matchesName || matchDesc || matchesValue;
    });
    res.json(filtereddocs);
  }
});

app.get("/documents/:id", (req, res) => {
  console.log(JSON.stringify(req.params));
  const selected = documents.find(
    (document) => document.id === Number(req.params.id)
  );
  if (selected) {
    res.json(selected);
  } else {
    res.sendStatus(404);
  }
});

app.post("/search", (req, res) => {
  const fields = req.body.fields;
  console.log(fields);
  const items = documents.filter((document) => {
    return Object.keys(fields).some((key) => {
      return document[key] === fields[key];
    });
  });
  res.json(items);
  //const query = req.query.q.toLowerCase();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
