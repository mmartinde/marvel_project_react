import { useContext, useState } from "react"
import axios from 'axios'
import { SessionContext } from "../../contexts/SessionContext";
export default function LoginForm(){
    
    const [datos, setDatos] = useState({email:"",password:""});
    const {login} = useContext (SessionContext)


    function doLogin(){
        axios.post ("http://localhost:3000/api/users/login",datos)
        .then((response)=>{
            console.log(response.data)
            login({email: datos.email, token:response.data.token});
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return(
    <div class="container mt-5">
        <h1 class="text-center mb-5">Login Form</h1>
        <div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" value={datos.email} onChange={(e)=>setDatos({...datos, email:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" value={datos.password} onChange={(e)=>setDatos({...datos, password:e.target.value})} class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button onClick={doLogin} type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>   
    )
}