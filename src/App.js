import React,{useEffect, useState} from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel} from '@material-ui/core';
import List from "./List-app";
import Listapp from './List-app';
import db from "./firebase";
import firebase from "firebase";

function App() {

  const [todos,setTodos]= useState([]);
  const [input,setInput]=useState("");
  console.log(input);

useEffect( ()=>{

  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    setTodos(snapshot.docs.map(doc=> ({id:doc.id,todo:doc.data().todo})))
  })
},[]);

  const addTodo=(event)=>{
    // console.log("Button is working")

    // setTodos([...todos,input]);

    event.preventDefault();

    db.collection('todos').add({
         todo:input,
         timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  }

  return (
    <>
    <h1>Hello awesome programmers 🔥</h1>


  <FormControl>
  <InputLabel >Write a Todo</InputLabel>
  <Input  value={input} onChange={event=>{setInput(event.target.value)}} />
  </FormControl>




    {/* <input value={input} onChange={event=>{setInput(event.target.value)}}/>  */}
    {/* <button onClick={addTodo}>Add event</button> */}

    <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
     Add event
    </Button>

    <ul>
        {
          todos.map((elem) =>(
            <Listapp value={elem}/>
          ))
         
        }
    </ul>


    </>
  );
}

export default App;

