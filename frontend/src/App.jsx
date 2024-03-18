import { Button, Form } from "react-bootstrap";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Comics from "./pages/comics/Comics";
import Home from "./pages/home/Home";
import AdminComics from "./pages/adminComics/adminComics";
import { useContext } from "react";
import { SessionContext } from "./contexts/SessionContext";
import "./App.scss";

function App() {
  const { logout, user } = useContext(SessionContext);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {user ? ("") : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}

            {user ? ("") : (
              <li>
              <Link to="/signup">Signup</Link>
            </li> 
            )}
            
            {user ? (
              <li>
              <Link to="/comics">Comic</Link>
            </li>
            ):("")}
            
            {user && user.role === 'admin'?(
              <li>
                <Link className="btn btn-primary text-white no-underline" to="/admin-comics">Admin Comics</Link>
              </li>):("")}

            {user ? (
              <Button type="button" class="btn btn-outline-secondary" onClick={logout}>logout</Button>
            ):("")}
            
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/login"
            element={
              user ? <Navigate to="/comics"></Navigate> : <Login></Login>
            }
          ></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/comics" element={<Comics></Comics>}></Route>
          <Route path="/admin-comics" element={<AdminComics></AdminComics>}></Route>
        </Routes>
        
      </main>
    </>
  );
}

export default App;
