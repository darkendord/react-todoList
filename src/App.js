import { useState } from 'react';
import './App.css';

let num = 0;

function App() {
const [input, setInput] = useState("")

 const [todos, setTodos] = useState([
  {id:num++, todo:"Cook dinner"},
  {id:num++, todo:"Do the laundry"}
 ])

function handleChange(e){
setInput(e.target.value)
}

function addElement(){
  input && setTodos((prevTodos)=>{
    return [...prevTodos, {id:num++, todo:input}]
  })
  setInput("")
}

function handleDelete(elId){
  setTodos(allTodos => allTodos.filter((todo)=> todo.id !== elId))
}

function enter(e){
e.charCode === 13 && addElement()
}


  return (
    <div onKeyPress={(e)=>enter(e)} className="App">
      <h1>Todo List</h1> 
      <input 
      className='input-el' 
      type="text"
      value={input} 
      onChange={(e)=>handleChange(e)}
      />
      <button className='todo-btn' 
      onClick={()=>addElement()}>Add</button>
      {todos.map((todo)=>{
        return (
        <div className='todo-el' 
        key={todo.id}><h3>{todo.todo}</h3>
        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
        </div>)
      })}
    </div>
  );
}

export default App;
