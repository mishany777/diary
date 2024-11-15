import "./App.css";

import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile/Profile";
import MyBooks from "./screens/MyBooks/MyBooks";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import AddBook from "./screens/AddBook/AddBook";
import Collection from "./screens/Collection/Collection";

import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import RequireAuth from "./components/RequireAuth";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/mybooks" element={<MyBooks/>} />
        <Route path="/addbook" element={<AddBook/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
