import "./App.css";

import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile/Profile";
import MyBooks from "./screens/MyBooks/MyBooks";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import AddBook from "./screens/AddBook/AddBook";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {

  const LoginCheckRouter = ({...props}) => {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token') ? <Profile /> : <Navigate to="/login"/>
  }

  const LoginChechRouter = (props) => {
    return localStorage.getItem('token') ? props.element : <Navigate to="/login"/>
  } 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCheckRouter />} />
        <Route path="/mybooks" element={<LoginChechRouter element={ <MyBooks/> }/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
