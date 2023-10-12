import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { call } from "./service/ApiService";


function App () {
  const [items, setItems] = useState([
    // {
    //   id: "0",
    //   title: "Hello World 1",
    //   done: true,
    // },
    // {
    //   id: "1",
    //   title: "Hello World 2",
    //   done: false,
    // },
    ]);

  useEffect(() => {
    call("/todo", "GET", null)
    .then((response) => setItems(response.data));
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data));
  }

    let todoItems = items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item) => (
            <Todo 
            item={item} 
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem} />
          ))}
        </List>
      </Paper>
    );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;