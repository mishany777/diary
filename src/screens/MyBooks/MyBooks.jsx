import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileSection from "../Profile/components/ProfileSection/ProfileSection";
import BooksList from "./components/BooksList/BooksList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext";

import api from '../../api'

export default function MyBooks() {

  const { user } = useAuth();
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const username = user.username;
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
  }, [user])

  return (
    <>
      <Header></Header>
      <MainWrapper>
        <div className="test">
          <SearchForm></SearchForm>
          <ProfileSection>
            {user ? <BooksList books={books}></BooksList> : <p>loading</p>}
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
