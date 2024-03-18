import { useContext } from "react"
import axios from 'axios'
import { SessionContext } from "../../contexts/SessionContext"
import { useForm } from "react-hook-form"
export default function LoginForm(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm ();
    
    const {login} = useContext (SessionContext)


    function doLogin(datos){
        axios.post ("http://localhost:3000/api/users/login",datos)
        .then((response)=>{
            console.log(response.data.role)
            login({email: datos.email, token:response.data.token, role:response.data.role})
            datos=""
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="myForm">
                <form onSubmit={handleSubmit(doLogin)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      e-mail
                    </label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      <p>We will never share your email with anyone else.</p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      password
                    </label>
                    <input
                      type="password"
                      {...register("password", { required: true, minLength: 8 })}
                      className="form-control"
                      id="exampleInputPassword1"
                    />{" "}
                    {errors.password?.type === "required" && (
                      <p>This field is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p>Password must be at least 8 characters long</p>
                    )}
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                    Remind me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                  Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );

}