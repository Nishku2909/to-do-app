import React from 'react'
import { TodoList } from './todoList'
export const Todo = (props) => {
  return (
    <div className="container my-5">
    <h1 className="text-center my-3">My Todo List</h1>
    { props.todos.length===0?<h3>No Tasks left for the Day</h3>:
    props.todos.map(todo=>{
       return <TodoList todos={todo} key={todo.sno} onDelete={props.onDelete} editToDo={props.editToDo}/>
    })
  }
    </div>
  )
}
