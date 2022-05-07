import React,{useEffect} from 'react'
import { Form, FormControl, FormGroup, FormLabel,Button} from 'react-bootstrap'
import {BrowserRouter ,Routes,Route, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Addressdetails = ({values,handleChange}) => {
    let navigate = useNavigate();
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
                    <FormLabel>job </FormLabel>
                    <FormControl type="text"value={values.job} onChange={handleChange('job')} placeholder='job'/>
                   
                </FormGroup>
                <FormGroup>
                    <FormLabel>country</FormLabel>
                    <FormControl type="text"value={values.country} onChange={handleChange('country')} placeholder='country'/>
                   
                </FormGroup>
                <FormGroup>
                    <FormLabel>city </FormLabel>
                    <FormControl type="text"value={values.city} onChange={handleChange('city')} placeholder='city'/>
                  
                </FormGroup>
                <Link to="/details">
            <Button  className="ml-10">Next</Button>
            </Link>
            </Form>
        </div>
    )
}
export default Addressdetails;