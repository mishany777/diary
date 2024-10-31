import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

export default function Profile() {
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
