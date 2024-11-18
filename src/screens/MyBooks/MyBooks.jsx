import Header from "../../shared/Header/Header";
import MainWrapper from "../../shared/MainWrapper/MainWrapper";
import SearchForm from "./components/SearchForm/SearchForm";
import ProfileSection from "../Profile/components/ProfileSection/ProfileSection";
import BooksList from "./components/BooksList/BooksList";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { useSearchParams } from "react-router-dom";

import api from '../../api'

export default function MyBooks() {

  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  const getBooks = async () => {
    const username = user.username;
    if (username) {
      api.get(`/books/user/${username}${searchValue ? `?search=${searchValue}` : ""}`)
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
          <SearchForm searchValue={searchValue}></SearchForm>
          <ProfileSection>
            {user ? <BooksList books={books}></BooksList> : <p>loading</p>}
          </ProfileSection>
        </div>
      </MainWrapper>
    </>
  );
}
