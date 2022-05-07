import React,{useState} from 'react'
import './register.css';
import { Link } from "react-router-dom"
const Register = (props) => {
    const {handleClick,setEmail, setPassword}=props
 
    const [error, setError] = useState("");
    return (

        <>

<h1 className='mainheading'>Register</h1>
        <div className="login">
            <input type="email" name="email" placeholder="enter email"
             onChange={event => {setEmail(event.target.value)}}/>
            <input type="password"name="password" placeholder="enter password"
             onChange={event => {setPassword(event.target.value)}}/>
           
            <button className="loginbutton " onClick={()=>handleClick()}>Register </button>
         
        </div>
        </>
    )
}
export default Register;