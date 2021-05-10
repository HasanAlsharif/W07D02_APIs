const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const todos = [
    { todo: " wake up", isCompleted: false },
    { todo: "Eat Breakfast", isCompleted: false }
];

//http://localhost:3000/todos
app.get("/todos", (req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // sends back a response of all users
    res.json(todos);
  });

  

  //http://localhost:3000/create/todo
app.get("/create/todo", (req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // sends back a response of all users
    res.json(todos);
  });











  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });