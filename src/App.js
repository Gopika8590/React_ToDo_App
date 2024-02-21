import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleAddToDo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((obj, index) => (
          <div key={index} className="todo">
            <div className="left">
              <input
                onChange={(e) => {
                  setTodos(todos.map(todo =>
                    todo.id === obj.id ? { ...todo, status: e.target.checked } : todo
                  ));
                }}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
