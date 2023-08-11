import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Add } from "@mui/icons-material";
import { useState } from "react";




export default function AddTodo({makeTodos}) {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const createTodo = (e) => {
        e.preventDefault();
        makeTodos(inputValue)
        console.log(inputValue);
    }
    return (
       <div>
        <Container maxWidth="sm">
            <form onSubmit={createTodo}>
                <FormControl fullWidth={true}>
                    <TextField
                        label="Add Todo"
                        variant="outlined"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                    ><Add />Add Todo</Button>
                </FormControl>

            </form>
        </Container>
       </div>

    )
}