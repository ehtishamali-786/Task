import React ,{useState}from 'react'
import './login.css';
import {  Link ,useHistory} from "react-router-dom";

// import {toast} from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
const Login=(props) =>{
   const {handleClick ,setEmail,setPassword}=props
    
    const [error, setError] = useState("");
  

  
    return (
        <>
       
        <h1 className='mainheading'>LOGIN</h1>
        <div className="login">
            <input type="email" name="email" placeholder="enter email"
             onChange={event => {setEmail(event.target.value)}}/>
            <input type="password"name="password" placeholder="enter password"
             onChange={event => {setPassword(event.target.value)}}/>
          
            <button className="loginbutton " onClick={()=>handleClick()}>Login </button>
        
            <Link to="/register">
            <button className="loginbutton " >register </button>
            </Link>
        </div>
        </>
    )
}
export default Login;