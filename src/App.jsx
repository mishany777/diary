import "./App.css";

import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile/Profile";
import MyBooks from "./screens/MyBooks/MyBooks";
import AddBook from "./screens/AddBook/AddBook";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/mybooks" element={<MyBooks />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
