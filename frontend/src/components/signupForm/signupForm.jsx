import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import InputValidation from "../shared/inputValidation"
export default function SignupForm(){
   const[datos, setDatos]=useState({email:"", password:"", name:""})
   const navegate = useNavigate()
   
    function onSignup (){
        axios.post("http://localhost:3000/api/users/signup", datos)
        .then((reponse)=>{
            alert("Succefull register")
            navegate( "/login")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   
    return(
    <div class="container">
        <h1 class="text-center mb-5">Sign Up Form</h1>
        <div>
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Name</label>
                <input value={datos.name} onChange={(e)=>setDatos({...datos, name:e.target.value})} type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp"/>
                <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <InputValidation 
                    rules={[{msg:'The email must at least include [@] and [.] and [domain]', fn:(p)=>p.match("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")!==null}]}
                    value={datos.email} onChange={(e)=>setDatos({...datos, email:e.target.value})} 
                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </InputValidation>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <InputValidation 
                    rules={[{msg:'lenght less than 8!', fn:(p)=>p.length>=8},
                        {msg:'without @ simbol', fn:(p)=>p.includes("@")}]} 
                        type="password" value={datos.password} 
                        onChange={(e)=>setDatos({...datos, password:e.target.value})}>
                </InputValidation>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button onClick={onSignup} type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
    )
}