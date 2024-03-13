import { Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Comics from "./pages/comics/Comics";
import Home from "./pages/home/Home";

function App() {
  

  return (
    <>
     <header>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/comics">Comic</Link>
          </li>
        </ul>
      </nav>
     </header>
     <main>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/comics" element={<Comics></Comics>}></Route>
      </Routes>
     </main>
    </>
  )
}

export default App
