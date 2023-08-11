import logo from './logo.svg';
import './App.css';
import MyAppBar from './components/Appbar';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import ShowTodo from './components/ShowTodo';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/theme';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <ThemeProvider theme={theme}>
       <MyAppBar />
      <AddTodo makeTodos={(text) => setTodos([...todos, text])} />
      {todos.map((todo, index) => {
        return <ShowTodo todoNo={index} todo={todo} key={index} />;
      })}
    </ThemeProvider>
  );
}

export default App;
