import React,{useEffect} from 'react'
import { Button } from 'react-bootstrap'
import {BrowserRouter ,Routes,Route, useNavigate } from "react-router-dom";
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Userdetails = ({values,handleChange}) => {
    let navigate = useNavigate();
    console.log(values,handleChange);
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (!authToken) {
            navigate('/')
        }
    }, [])
    return (
        <div>
            <Form>
                <FormGroup>
                    <FormLabel>first Name </FormLabel>
                    <FormControl type="text" value={values.firstName} onChange={handleChange('firstName')} placeholder='first name'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>last Name </FormLabel>
                    <FormControl type="text"value={values.lastName} onChange={handleChange('lastName')} placeholder='last name'/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>email </FormLabel>
                    <FormControl type="email"value={values.email} onChange={handleChange('email')} placeholder='emial'/>
                </FormGroup>
                <Link to="/address-details">
            <Button  className="ml-10"   >Next</Button>
            </Link>
            </Form>
          








        </div>
    )
}
export default Userdetails;