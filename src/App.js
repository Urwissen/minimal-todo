import React from "react"
import './App.css';
import Todo from "./components/Todo.js"

function App() {
  const [inputValue, setInputValue] = React.useState("")
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      description: "Bananen Kaufen",
      category: null,
      isFavorite: true,
      isChecked: false,
    },
    {
      id: 2,
      description: "Steuer",
      category: "privat",
      isFavorite: false,
      isChecked: false,
    },
    {
      id: 3,
      description: "Meeting 12.12.22",
      category: "business",
      isFavorite: false,
      isChecked: false,
    },
  ])

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  function handleClick(event) {
    event.preventDefault()
    setTodos(prevTodos => {
      const newTodos = [...prevTodos]
      const newTodo = {
        id: prevTodos.length +1, 
        description: inputValue, 
        category: null, 
        isFavorite: false, 
        isChecked: false
      }
      return [...newTodos, newTodo]
    })
    setInputValue("")
  }

  function check(id) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => (
        id === todo.id ? {...todo, isFavorite: false, isChecked: !todo.isChecked} : {...todo}))
    })
    console.log("toggle-" + id) 
    console.log("Check-" + id)
  }

  function remove(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => id !== todo.id)
    })
    console.log("toggle-" + id) 
    console.log("remove-" + id)  
  }

  function toggle(id) {
    setTodos((prevTodos) => {
      return prevTodos.map(todo => (
        id === todo.id ? {...todo, isFavorite: !todo.isFavorite} : {...todo}))
    })
    console.log("toggle-" + id) 
  }

  console.log(inputValue)

  return (
    <div className="App">
      <div className="todos">
      <h2 className="title">mini.do</h2>
        {todos.map((todo, index) => <Todo key={todo.id} id={todo.id} description={todo.description} category={"todo--" + todo.category} isFavorite={todo.isFavorite} isChecked={todo.isChecked} functions={{check, remove, toggle}}/>)}
        <form>
          <input className="todos--input" type="text" placeholder="todo..." value={inputValue} onChange={handleChange}></input>
          <button className="todos--btn" onClick={handleClick}>Add</button>
        </form>
        
      </div>
    </div>
  );
}

export default App;
