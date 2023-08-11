import { WidthFull } from "@mui/icons-material";
import { Button, FormControlLabel, Paper, Typography } from "@mui/material";
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShowTodo({todo, todoNo}) {
    const [todos, setTodos] = useState([]);
    const handleDelete = (todoNo, e) => {
        e.preventDefault();
        console.log(todoNo)
    }


    return (    
        <Paper elevation={3} WidthFull style={{padding: 16 }}>
            <Typography variant="h6">{todoNo + 1} .&nbsp; {todo}</Typography>
            <Button variant="outlined" onClick={(e, todoNo) => handleDelete(todoNo, e)}>
                <DeleteIcon />
            </Button>
        </Paper>
    )
}