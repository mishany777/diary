import "./App.css";
import Header from "./shared/Header/Header.jsx";
import MainWrapper from "../src/shared/MainWrapper/MainWrapper.jsx";
import ProfileInfo from "./screens/Profile/components/ProfileInfo/ProfileInfo.jsx";

export default function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <div className="test">
          <ProfileInfo></ProfileInfo>
          <main>
            <h1>Тут будет профиль</h1>
          </main>
        </div>
      </MainWrapper>
    </>
  );
}
