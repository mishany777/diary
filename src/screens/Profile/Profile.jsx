import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Collections from "./components/Collections/Collections";

export default function Profile() {
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
