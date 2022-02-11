import React from "react"
import './App.css';
import Todo from "./components/Todo.js"

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      description: "Bananen Kaufen",
      category: null,
      isFavorite: true,
    },
    {
      id: 2,
      description: "Steuer",
      category: "privat",
      isFavorite: false,
    },
    {
      id: 3,
      description: "Meeting 12.12.22",
      category: "business",
      isFavorite: false,
    },
  ])

  function check(id) {
    console.log("Check-" + id)
  }

  function remove(id) {
    console.log("remove-" + id)  
  }

  function toggle(id) {
    console.log("toggle-" + id) 
  }

  return (
    <div className="App">
      <div className="todos">
      <h2 className="title">mini.do</h2>
        {todos.map((todo, index) => <Todo key={todo.id} id={todo.id} description={todo.description} category={"todo--" + todo.category} favorite={todo.isFavorite} functions={{check, remove, toggle}}/>)}
      </div>
    </div>
  );
}

export default App;
