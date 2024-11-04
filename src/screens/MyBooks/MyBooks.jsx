import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileSection from "../Profile/components/ProfileSection/ProfileSection";
import BooksList from "./components/BooksList/BooksList";

export default function MyBooks() {
  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className="test">
          <SearchForm></SearchForm>
          <ProfileSection>
            <BooksList></BooksList>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
