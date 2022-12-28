import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
  
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert("Enter a valid task (must be at least 1 character)");
      setTodo("");
    }
  }

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((item) => {
      return item.id !== id;
    })

    setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return(
  <div className ="App">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
      <input
        onChange={e => setTodo(e.target.value)} 
        type ="text" align ="right" value={todo} />
      <button type ="submit">Add Todo</button>
    </form>
    {todos.map((todoItem, index) => {
      return (
        <div 
          className="todo"
          key={todoItem.text + index}
        >
          {todoItem.text}
          <input 
            type="checkbox" 
            id="completed"
            checked={todoItem.completed} onChange={() => toggleComplete(todoItem.id)}
          />
          <button onClick={() => removeTodo(todoItem.id)}>Delete</button>
        </div>
      )
    })}
  </div>
  );
};
export default App;
