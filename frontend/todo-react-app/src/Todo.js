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

  const deleteItem = props.deleteItem;

  // deleteEventHandler 작성
  const deleteEventHandler = () => {
    deleteItem(item);
  };

  return (
    <ListItem>
      <Checkbox Checked={item.done} />
      <ListItemText>
          <InputBase
              inputProps={{ "aria-label": "naked" }}
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