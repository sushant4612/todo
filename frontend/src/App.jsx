import './App.css'
import {CreateTodo} from "./components/CreateTodo"
import { Todo } from './components/Todo'
import {useState} from 'react'

function App(){
  const [todos, setTodos] = useState([]);
  
  // fetch("http://localhost:4000/todos").then(
  //   async (res) => {
      
  //     const json = await res.json();
  //     console.log(json)
  //     setTodos(json.todo)
  //   }
  // )


  return (
    <>
    <CreateTodo/>
    <Todo todos={todos}></Todo>
    </>
  )
}

export default App
