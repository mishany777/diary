import "./App.css";
import Header from "./shared/Header/Header.jsx";
import MenuList from "./shared/MenuList/MenuList.jsx";

export default function App() {
  return (
    <div>
      <Header></Header>
      <MenuList></MenuList>
      <main>
        <h1>Тут потанцевально будут дневник</h1>
      </main>
    </div>
  );
}
