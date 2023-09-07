import "./App.css";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import React, { useState } from "react";
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


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

    const addItem = (item) => {
      item.id = "ID-" + items.length;   // Key를 위한 id
      item.done = false;  // done 초기화
      // 업데이트는 반드시 setItems로 하고 새 배열을 만들어야 한다.
      setItems([...items, item]);
      console.log("items : " , items);
    };

    const deleteItem = (item) => {
      // 삭제할 아이템을 찾는다.
      const newItems = items.filter(e => e.id !== item.id);
      // 삭제할 아이템을 제외한 아이템을 다시 배열에 저장한다.
      setItems([...newItems]);
    }

    let todoItems = items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {items.map((item) => (
            <Todo 
            item={item} 
            key={item.id}
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