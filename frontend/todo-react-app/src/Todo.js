import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Todo = (props) => {

  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);

  const deleteItem = props.deleteItem;
  const editItem = props.editItem;

  // deleteEventHandler 작성
  const deleteEventHandler = () => {
    deleteItem(item);
  };

  // editEventHandler() 함수 추가
  const editEventHandler = (e) => {
    item.title = e.target.value;
    editItem();
  };

  // turnOffReadOnly 함수 작성
  const turnOffReadOnly = () => {
    setReadOnly(false);
  }

  // turnOnReadOnly 함수 작성
  const turnOnReadOnly = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      setReadOnly(true);
    }
  };

  const checkboxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem();
  };


  return (
    <ListItem>
      <Checkbox Checked={item.done} onChange={checkboxEventHandler}/>
      <ListItemText>
          <InputBase
              inputProps={{ 
                "aria-label": "naked",
                readOnly: readOnly }}
              onClick={turnOffReadOnly}
              onKeyDown={turnOnReadOnly}
              onChange={editEventHandler}
              type="text"
              id={item.id}
              name={item.id}
              value={item.title}
              multiline={true}
              fullWidth={true}
            />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo"
          onClick={deleteEventHandler} >
          <DeleteOutlined />
          </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;