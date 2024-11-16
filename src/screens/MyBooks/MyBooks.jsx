import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileSection from "../Profile/components/ProfileSection/ProfileSection";
import BooksList from "./components/BooksList/BooksList";

import { useEffect, useState } from "react";
import { useAuth } from "../../AuthContext";

import api from '../../api'

export default function MyBooks() {

  const { user } = useAuth();
  const [profileInfo, setProfileInfo] = useState(user);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setProfileInfo(user);
  }, [user])

  const getBooks = async () => {
    const username = profileInfo.username;
    if (username) {
      api.get(`/books/user/${username}`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        alert(error);
      });
    }
  }

  useEffect(() => {
    getBooks();
  }, [profileInfo])

  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className="test">
          <SearchForm></SearchForm>
          <ProfileSection>
            <BooksList books={books}></BooksList>
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
