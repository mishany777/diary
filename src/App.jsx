import "./App.css";
import Header from "./shared/Header/Header.jsx";
import MenuList from "./shared/MenuList/MenuList.jsx";
import MainWrapper from "../src/shared/MainWrapper/MainWrapper.jsx";

export default function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <main>
          <h1>Тут будет профиль</h1>
        </main>
      </MainWrapper>
    </>
  );
}
