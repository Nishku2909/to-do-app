import React from 'react'
import {Button,Form} from 'react-bootstrap'
import { useState,useEffect } from 'react'

let initialState={
    title:"",
    desc:""
}


export const AddToDo = ({onAdd,updateTodo,editableTodo}) => {

    const [ToDo,setToDo]=useState(initialState);
    
    const submit=(e)=>{
        e.preventDefault();
        //console.log(ToDo);
         
        if(editableTodo){
          //console.log(ToDo);
            updateTodo(ToDo);
        }
    else{
        if(!ToDo.title || !ToDo.desc){
            alert("Tile and Description for Todo can't be Empty");
            return;
        }
       onAdd(ToDo);
      }
      setToDo(initialState);

     }
     
     const handleChange=(e)=>{
        //console.log(e)
          setToDo({...ToDo,
             [e.target.name]:e.target.value
          })
     }

      useEffect(()=>{
        if(editableTodo){
          //console.log(editableTodo);
       setToDo(editableTodo); }
      },[editableTodo])

  return (
   <div className="container" >
    <Form onSubmit={submit} autoComplete="off">
    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text"  name="title" value={ToDo.title} onChange={handleChange} placeholder="Add Title for your ToDo" />
      {/* <Form.Text className="text-muted">
        Add Title for your Todo
      </Form.Text> */}
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" name="desc" value={ToDo.desc} onChange={handleChange} placeholder="Add Description" />
    </Form.Group>
    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group> */}
    <Button variant="success" type="submit">
     {editableTodo?'EDIT':'ADD'}
    </Button>
  </Form>
  </div>
  )
}
