import React,{useState}from 'react'
import {BrowserRouter ,Routes,Route, useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import Login from './steps/login/login';
import Register from './steps/register/register';
import { Button } from 'react-bootstrap'
import Addressdetails from './steps/addressdetails'
import Confirm from './steps/confirm'
import Details from './steps/details'
import Userdetails from './steps/userdetails'

 const  AllRoutes=(props) =>{
    let navigate = useNavigate();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    const [values,setValue]=useState({
        firstName:"",
        lastName:"",
        email:"",
        job:"",
        city:"",
        country:"",
        hobby:"",
        projects:"",
        salary:""
    })
  
const handleChange=(input)=>(e)=>{
    setValue({...values , [input]:e.target.value})
}
const handleClick=(id)=>{
    const authentication = getAuth();
    if (id === 2) {
        createUserWithEmailAndPassword(authentication, email, password)
          .then((response) => {
              navigate("/")
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((err)=>{
            console.log("error",err.message);
            alert(err.message)
        })
     }else{
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
              .then((response) => {
                navigate('/user-details')
                sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
              })
              .catch((err)=>{
                console.log("error",err);
                  alert(err.message)
              })
          }
     }

}
  return (
    <>
  
<Routes>

<Route    path='/'exact={true} element={<Login values={values} setEmail={setEmail} setPassword={setPassword} handleClick={()=>handleClick(1)} />}/>
<Route  path='/register'  element={<Register values={values} setEmail={setEmail} setPassword={setPassword} handleClick={()=>handleClick(2)}  />}/>
<Route   path='/user-details'element={<Userdetails values={values} handleChange={handleChange} />}/>
<Route    path='/address-details'element= {<Addressdetails values={values} handleChange={handleChange} />}/>
<Route   path='/details' element= {<Details values={values} handleChange={handleChange} />}/>
 <Route   path='/confirm' element={<Confirm values={values} />}/>
            </Routes>
    </>
  )
}
export default AllRoutes;