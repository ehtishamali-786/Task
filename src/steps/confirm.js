import React,{useState,useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {BrowserRouter ,Routes,Route, useNavigate } from "react-router-dom";
import { collection, addDoc, doc ,Timestamp,onSnapshot,query} from "firebase/firestore";
import {db } from '../config'
const Confirm = ({values}) => {
  let navigate = useNavigate();
  const [task,setTasks]=useState([])
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')

      if (!authToken) {
          navigate('/')
      }else{
        onSnapshot(collection(db, 'tasks'),
        (snapshot) => {
          setTasks(snapshot.docs.map(doc => doc.data()))
        })
      }
  }, [db])
  // const {firstName,lastName,email,job,city,country,hobby,projects,salary} = values

  return (
    <div>

       <h1>your data</h1>
       {/* <ListGroup style={{maxwidth:"600px",margin:"auto"}}>
           <ListGroupItem>firstname:{firstName}</ListGroupItem>
           <ListGroupItem>lastname:{lastName}</ListGroupItem>
           <ListGroupItem>email:{email}</ListGroupItem>
           <ListGroupItem>job:{job}</ListGroupItem>
           <ListGroupItem>city:{city}</ListGroupItem>
           <ListGroupItem>country:{country}</ListGroupItem>
           <ListGroupItem>hobby:{hobby}</ListGroupItem>
           <ListGroupItem>Project:{projects}</ListGroupItem>
           <ListGroupItem>salary:{salary}</ListGroupItem>
       </ListGroup> */}

    
    <div>
      {task.map(ta =>
        (
          <div>
          <h1>{ta.firstName}</h1>
          <h1>{ta.lastName}</h1>
          <h1>{ta.email}</h1>
          <h1>{ta.job}</h1>
          <h1>{ta.city}</h1>
          <h1>{ta.country}</h1>
          <h1>{ta.hobby}</h1>
          <h1>{ta.projects}</h1>
          <h1>{ta.salary}</h1>
          </div>
        ))}
    </div>
    </div>
  )
}
export default Confirm;