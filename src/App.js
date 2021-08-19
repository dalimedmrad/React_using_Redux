
import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Welcome in my Redux App</h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
