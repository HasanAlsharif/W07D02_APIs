// Q1
const express = require("express");
const app = express();
const port = 3000;

// a middleware that enables us to read the received JSON data
app.use(express.json());

// Q2
const todos = [
    { todo: "wake up", isCompleted: false },
    { todo: "Eat Breakfast", isCompleted: false }
];


// Q3
//http://localhost:3000/todos
app.get("/todos", (req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // sends back a response of all users
    res.json(todos);
  });

  
// Q4
  //http://localhost:3000/create/todo
app.post("/create/todo", (req, res) => {
   
    const newtodo = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    todos.push(newtodo);
    res.status(201);
    res.json(todos);

  });

  
// Q5
  //http://localhost:3000/update/todo/:name
    app.put("/update/todo/:name", (req, res) => {
    const update = req.params.name
    let i
    const found = todos.find((element, index) => {
        i=index
        return element.todo === update;
      });
    
      if (found) {
        res.status(201);
        const updatedobject = {todo: req.body.todo, isCompleted: req.body.isCompleted};    
        todos[i] = updatedobject
        res.json(todos);

        } else {
        // set the response status code to 404 (Not Found)
        res.status(404);
        res.json("todo task not found");
      }
  });



// Q6

 //http://localhost:3000/delete/todo/:name
 app.delete("/delete/todo/:name", (req, res) => {
    const deletetodo = req.params.name

    let i
    const found = todos.find((element, index) => {
        i=index
        return element.todo === deletetodo;
      });
    
      if (found) {
        res.status(201);
        
        todos.splice(i,1);
        res.json(todos);

        } else {
        // set the response status code to 404 (Not Found)
        res.status(404);
        res.json("Error, not found");
      }
  });




// Q7
// Q8






  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });