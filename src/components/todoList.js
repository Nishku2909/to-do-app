import React from 'react'
import Button from  'react-bootstrap/Button';
export const TodoList = ({todos,onDelete,editToDo}) => {
  return(
     <div className="my-5">
          <h4><input type="checkbox" 

          style={{width: "20px",height: "20px"}}  
          onClick={()=>{onDelete(todos)}} //onChange={(e)=>{console.log(e)}}
          />  {todos.title}</h4>

          <p>{todos.desc}</p>
          <Button onClick={()=>{editToDo(todos.sno)}}>Edit</Button>
          </div>
    )
}

