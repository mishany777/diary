import "./App.css";

import ReactDOM from "react-dom/client";
import Profile from "./screens/Profile/Profile";
import MyBooks from "./screens/MyBooks/MyBooks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/mybooks" element={<MyBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
