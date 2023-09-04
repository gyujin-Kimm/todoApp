import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';


const Todo = (props) => {
    const [item, setItem] = useState(props.item);

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
        </ListItem>
    );
};

export default Todo;