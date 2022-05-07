import React,{useState,useEffect} from 'react'
import { Form, FormControl, FormGroup, FormLabel,Button } from 'react-bootstrap'
import {BrowserRouter ,Routes,Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { collection, addDoc, doc} from "firebase/firestore";
import {db } from '../config'
const Details = ({values,handleChange}) => {
    let navigate = useNavigate();
  
   
    let {firstName,lastName,email,job,country,city,hobby,projects,salary}=values
    useEffect(() => {
     
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            navigate('/')
        }
    }, [])
     const submit= async ()=>{
       
        try {
            console.log("ali");
            await addDoc(collection(db,"tasks"), {
                firstName:firstName,
                lastName:lastName,
                email:email,
                job:job,
                projects:projects,
                country:country,
                city:city,
                hobby:hobby,
                salary:salary
            })
            console.log("khsn");
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  
     
    return (
        <div>
            <Form>
                <FormGroup>
                    <FormLabel>Hobby </FormLabel>
                    <FormControl type="text"value={values.hobby} onChange={handleChange('hobby')} placeholder='Hobby'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Project </FormLabel>
                    <FormControl type="text"value={values.projects} onChange={handleChange('projects')} placeholder='Project'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Salary</FormLabel>
                    <FormControl type="text"value={values.salary} onChange={handleChange('salary')} placeholder='Salary'/>
                </FormGroup>
                <Link to="">
            <Button  className="ml-10" onClick={()=>submit()}  >submit</Button>
            </Link>
            <Link to="/confirm">
            <Button  className="ml-10">show data</Button>
            </Link>
            </Form>
         
     
       </div>
    )
}
export default Details;