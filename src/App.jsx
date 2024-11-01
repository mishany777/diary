import "./App.css";
import Header from "./shared/Header/Header.jsx";
import MainWrapper from "../src/shared/MainWrapper/MainWrapper.jsx";
import ProfileInfo from "./screens/Profile/components/ProfileInfo/ProfileInfo.jsx";
import ProfileSection from "./screens/Profile/components/ProfileSection/ProfileSection.jsx";
import Collections from "./screens/Profile/components/Collections/Collections.jsx";

export default function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <div className="test">
          <ProfileSection>
            <ProfileInfo></ProfileInfo>
          </ProfileSection>
          <ProfileSection>
            <Collections></Collections>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
