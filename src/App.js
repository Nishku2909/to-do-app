import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/navbar';
import { Todo } from './components/todo';
import { About } from './components/about';
import { useState, useEffect } from 'react';
import { AddToDo } from './components/addToDo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  let firstToDo;
  if (localStorage.getItem("todos") === null) {
    firstToDo = [];
  }
  else {
    firstToDo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    // to show checkbox is clicked
    setTimeout(() => {
      setTodo(todos.filter((e) => {
        return e !== todo;
      }))
    }, 200);
    //  localStorage.setItem("todos",JSON.stringify(todos));
  }

  function onAdd(ToDo) {
    let sno;

    todos.length === 0 ? sno = 1 : sno = todos[todos.length - 1].sno + 1
    ToDo={...ToDo,sno};
     //console.log(ToDo);
    setTodo([...todos,ToDo]);

    //  localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos, setTodo] = useState(firstToDo);
  const [editableTodo,setEditableTodo] =useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
   
  const editToDo=(sno)=>{
    // console.log(sno);
    //   console.log(todos);
   setEditableTodo(todos.find(t=>t.sno===sno));
  }
  const updateTodo=(ToDo)=>{
    const idx=todos.findIndex(v=>v.sno===ToDo.sno);
    const temp=[...todos];
    temp.splice(idx,1,ToDo)
    //console.log(temp);
   setTodo(temp);
    setEditableTodo(null);
  }

  return (

    <Router>
       <Header  title="Todo list" searchbar={false}/>
            
      <Routes>

      <Route exact path="/" element={
        <>
         <AddToDo onAdd={onAdd} updateTodo={updateTodo} editableTodo={editableTodo}/>
         <Todo todos={todos} onDelete={onDelete} editToDo={editToDo}/>
         </>
      }>
       </Route>

       <Route exact path="/about" element={<About />}> 
          </Route>

       </Routes>
    </Router >
    
  );
}

export default App;
