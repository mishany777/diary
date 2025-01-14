import "./App.css";

import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile/Profile";
import MyBooks from "./screens/MyBooks/MyBooks";
import Register from "./screens/Register/Register";
import Login from "./screens/Login/Login";
import AddBook from "./screens/AddBook/AddBook";
import Collection from "./screens/Collection/Collection";
import Error404 from "./screens/Error404/Error404";
import BookView from "./screens/BookView/BookView";
import CollectionView from "./screens/CollectionView/CollectionView";
import Search from "./screens/Search/Search";

import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { AuthProvider } from "./AuthContext";

import RequireAuth from "./components/RequireAuth";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/mybooks" element={<MyBooks/>} />
          <Route path="/books/:uuid" element={<BookView/>} />
          <Route path="/addbook" element={<AddBook/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/:uuid" element={<CollectionView />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
